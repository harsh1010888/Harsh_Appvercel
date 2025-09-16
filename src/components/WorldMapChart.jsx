import React, { useEffect, useRef, useState } from 'react';
import { Chart as ChartJS } from 'chart.js';
import { ChoroplethController, GeoFeature, ProjectionScale, ColorScale } from 'chartjs-chart-geo';
import { feature } from 'topojson-client';

// Register geo components (ColorScale improves choropleth rendering)
ChartJS.register(ChoroplethController, GeoFeature, ProjectionScale, ColorScale);

export default function WorldMapChart() {
  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        const res = await fetch('https://unpkg.com/world-atlas/countries-50m.json');
        const world = await res.json();
        if (!world.objects || !world.objects.countries) {
          throw new Error('Invalid world atlas payload shape');
        }
        const countries = feature(world, world.objects.countries).features;
        const outlineFeatureCollection = { type: 'FeatureCollection', features: countries };

        if (cancelled) return;
        const ctx = canvasRef.current.getContext('2d');

        // Destroy existing instance if re-running (HMR)
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new ChartJS(ctx, {
          type: 'choropleth',
          data: {
            labels: countries.map(d => d.properties.name),
            datasets: [
              {
                label: 'Spend',
                outline: outlineFeatureCollection,
                data: countries.map(d => ({
                  feature: d,
                  value: d.properties.name === 'India' ? 6110 : Math.floor(Math.random() * 5000),
                })),
                borderColor: '#ffffff',
                borderWidth: 0.5,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            showOutline: true,
            showGraticule: true,
            scales: {
              projection: {
                axis: 'x',
                projection: 'equalEarth',
              },
              color: {
                quantize: 6,
                legend: {
                  position: 'bottom-right',
                  align: 'right',
                  labels: { boxWidth: 12, boxHeight: 10 },
                },
              },
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: (ctx) => `${ctx.raw.feature.properties.name}: $${ctx.raw.value.toLocaleString()}`,
                },
              },
            },
          },
        });
      } catch (e) {
        console.error('Failed to load map data', e);
        setError(e.message);
      }
    }
    load();
    return () => {
      cancelled = true;
      if (chartInstanceRef.current) chartInstanceRef.current.destroy();
    };
  }, []);

  return (
    <div className="w-full h-full">
      {error ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-sm text-red-600">Map load failed: {error}</div>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <canvas ref={canvasRef} />
        </div>
      )}
    </div>
  );
}
