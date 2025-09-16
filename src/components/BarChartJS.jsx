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

export default function BarChartJS({ data, height = 200 }) {
  const labels = data.map(d => d.campaign);
  const values = data.map(d => d.spend);
  const maxVal = Math.max(...values);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Campaign Spend',
        data: values,
        backgroundColor: values.map(v => (v === maxVal ? '#ff7a1a' : '#ff9a4a')),
        borderColor: values.map(v => (v === maxVal ? '#cc5f06' : '#ff7a1a')),
        borderWidth: 1,
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const options = {
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
        displayColors: false,
        padding: 10,
        callbacks: {
          label: (ctx) => `$${ctx.raw.toLocaleString()}`,
        },
      },
    },
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
      <Bar data={chartData} options={options} height={height} />
    </div>
  );
}
