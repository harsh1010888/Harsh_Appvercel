import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import SummaryTableCard from './SummaryTableCard';
import WorldMapChart from './WorldMapChart';

function formatCurrency(v) {
  return v.toLocaleString(undefined, { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

function computeMetrics(barData = [], lineData = []) {
  const totalSpend = barData.reduce((s, r) => s + r.spend, 0);
  const topCampaign = barData.reduce((top, r) => (r.spend > top.spend ? r : top), barData[0] || { campaign: '-', spend: 0 });
  const avgDaily = lineData.length ? Math.round(lineData.reduce((s, r) => s + r.spend, 0) / lineData.length) : 0;
  const maxDay = lineData.reduce((max, r) => (r.spend > max.spend ? r : max), lineData[0] || { date: '-', spend: 0 });
  return { totalSpend, topCampaign, avgDaily, maxDay };
}

function SummaryRow({ barData, lineData }) {
  const { totalSpend, topCampaign, avgDaily, maxDay } = computeMetrics(barData, lineData);
  const items = [
    { label: 'Total Spend', value: formatCurrency(totalSpend), icon: '💰', accent: 'from-orange-500/20 to-orange-500/5' },
    { label: 'Top Campaign', value: `${topCampaign.campaign} (${formatCurrency(topCampaign.spend)})`, icon: '🏆', accent: 'from-amber-500/20 to-amber-500/5' },
    { label: 'Avg Daily Spend', value: formatCurrency(avgDaily), icon: '📊', accent: 'from-blue-500/20 to-blue-500/5' },
    { label: 'Peak Day', value: `${maxDay.date} (${formatCurrency(maxDay.spend)})`, icon: '🚀', accent: 'from-emerald-500/20 to-emerald-500/5' },
  ];
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-gray-900 tracking-tight">Overview</h2>
        <span className="h-px flex-1 bg-gradient-to-r from-orange-400/60 to-transparent" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={i}
            className={`relative rounded-lg border border-gray-200 bg-gradient-to-br ${it.accent} p-4 shadow-sm overflow-hidden group`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_70%_30%,rgba(255,122,26,0.15),transparent_70%)]" />
            <div className="relative flex items-start gap-3">
              <div className="h-9 w-9 rounded-md bg-white/70 backdrop-blur border border-white/40 flex items-center justify-center text-lg">
                <span>{it.icon}</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] uppercase tracking-wide text-gray-600 font-medium">{it.label}</span>
                <span className="text-sm font-semibold text-gray-900 leading-tight truncate">{it.value}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SummaryDashboard({ barData, lineData }) {
  const { totalSpend, topCampaign, avgDaily, maxDay } = computeMetrics(barData, lineData);
  const tableRows = [
    { name: 'Total Spend', value: formatCurrency(totalSpend), change: 0 },
    { name: 'Top Campaign Spend', value: formatCurrency(topCampaign.spend), change: 0 },
    { name: 'Avg Daily Spend', value: formatCurrency(avgDaily), change: 0 },
    { name: 'Peak Day Spend', value: formatCurrency(maxDay.spend), change: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <SummaryRow barData={barData} lineData={lineData} />
      <div className="grid gap-8 lg:grid-cols-3 items-start">
        <div className="lg:col-span-1"><SummaryTableCard rows={tableRows} /></div>
        <div className="lg:col-span-2 space-y-8">
          <LineChartComponent data={lineData} />
          <BarChartComponent data={barData} />
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <WorldMapChart />
      </div>
    </div>
  );
}
