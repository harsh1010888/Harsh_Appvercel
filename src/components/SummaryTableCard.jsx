export default function SummaryTableCard({ rows = [] }) {
  return (
    <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-orange-300" />
      <div className="p-4 pb-3">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-orange-500 animate-pulse" /> Summary
        </h3>
      </div>
      <div className="px-4 pb-4">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-gray-600 font-semibold border-y bg-gray-50">
              <th className="text-left py-2 font-medium">Item</th>
              <th className="text-right py-2 font-medium">Value</th>
              <th className="text-right py-2 font-medium">Change</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const color = r.change > 0 ? 'text-green-600' : r.change < 0 ? 'text-red-600' : 'text-gray-500';
              return (
                <tr
                  key={i}
                  className={`border-b last:border-b-0 transition hover:bg-orange-50/40 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                >
                  <td className="py-2 pr-2 text-gray-900 text-[12.5px]">{r.name}</td>
                  <td className="py-2 pr-2 text-right font-semibold text-gray-900">{r.value}</td>
                  <td className={`py-2 text-right font-medium ${color}`}>{r.change > 0 ? `+${r.change}%` : `${r.change}%`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
