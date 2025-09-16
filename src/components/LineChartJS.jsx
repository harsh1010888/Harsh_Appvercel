import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ChartTooltip, ChartLegend, Filler);

export default function LineChartJS({ data, height = 200 }) {
  const labels = data.map(d => d.date);
  const datasetValues = data.map(d => d.spend);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Daily Spend',
        data: datasetValues,
        borderColor: '#ff7a1a',
        backgroundColor: 'rgba(255,122,26,0.1)',
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#ff7a1a',
        pointHoverBackgroundColor: '#ff7a1a',
        pointHoverBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'nearest', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#111',
        bodyColor: '#111',
        borderColor: '#ff7a1a',
        borderWidth: 1,
        displayColors: false,
        padding: 10,
        callbacks: {
          label: (ctx) => `$${ctx.parsed.y.toLocaleString()}`,
        },
      },
    },
    layout: { padding: { left: 4, right: 8, top: 8, bottom: 4 } },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#666', font: { size: 11 } },
        border: { color: '#ddd' },
      },
      y: {
        grid: { color: '#f1f1f1', drawBorder: false },
        ticks: {
          color: '#111',
          font: { size: 11, weight: '600' },
          callback: (val) => `$${Number(val).toLocaleString()}`,
        },
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line data={chartData} options={options} height={height} />
    </div>
  );
}
