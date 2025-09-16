export default function Navbar({ totalSpend, topCampaign, averageDailySpend }) {
  return (
    <nav className="w-full bg-white/90 backdrop-blur shadow-sm border-b border-[var(--color-border)] sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl text-[var(--color-text)]">
            Chart
            <span className="text-[var(--color-accent)]">Dash</span>
          </span>
          <span className="text-[10px] tracking-wide text-gray-500 border border-[var(--color-border)] px-1.5 py-0.5 rounded bg-[var(--color-bg-subtle)]">
            DEMO
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-medium text-[var(--color-text)]">
          <div className="flex flex-col">
            <span className="metric-label">Total Spend</span>
            <span className="metric-value">
              ${totalSpend.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="metric-label">Top Campaign</span>
            <span className="metric-value">{topCampaign.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="metric-label">Avg Daily</span>
            <span className="metric-value">
              ${averageDailySpend.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
            Dashboard
          </button>
          <button className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
            Reports
          </button>
          <button className="text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors">
            Settings
          </button>
        </div>
      </div>
    </nav>
  );
}
