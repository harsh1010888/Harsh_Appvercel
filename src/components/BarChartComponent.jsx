import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip as ChartTooltip,
  Legend as ChartLegend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTooltip, ChartLegend);

export default function BarChartComponent({ data, height = 256 }) {
  const labels = data.map(d => d.campaign);
  const values = data.map(d => d.spend);
  const maxVal = Math.max(...values);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Spend',
        data: values,
        backgroundColor: values.map(v => (v === maxVal ? '#cc5f06' : '#ff7a1a')),
        borderRadius: 6,
        borderSkipped: false,
        barThickness: 24,
        hoverBackgroundColor: '#cc5f06',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#ffffff',
        titleColor: '#111',
        bodyColor: '#111',
        borderColor: '#ff7a1a',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (ctx) => ` $${ctx.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: { color: '#f1f1f1', drawBorder: false },
        ticks: { color: '#111', font: { size: 11, weight: '600' }, callback: (v) => `$${Number(v).toLocaleString()}` },
      },
      y: {
        grid: { display: false },
        ticks: { color: '#555', font: { size: 11 } },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4">
      <h3 className="text-gray-700 font-semibold mb-2">Campaign Spend</h3>
      <div className="h-64">
        <Bar data={chartData} options={options} height={height} />
      </div>
    </div>
  );
}
