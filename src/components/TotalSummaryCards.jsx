export default function TotalSummaryCards() {
  const metrics = [
    { label: 'Conversions ROAS:', value: '0.00%', subtext: '0%' },
    { label: 'Conversions ROAS:', value: '$6,109.89', subtext: '+27.42%', highlighted: true },
    { label: 'Conversions ROAS:', value: '0.00%', subtext: '0%' },
    { label: 'Conversions ROAS:', value: '$2,101', subtext: '0%' },
    { label: 'Conversions ROAS:', value: '$2.91', subtext: '0%' },
    { label: 'Conversions ROAS:', value: '0', subtext: '0%' },
    { label: 'Conversions ROAS:', value: '$0.00', subtext: '0%' },
  ];

  return (
    <div className="px-6 py-4">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Total Summary</h2>
      <div className="grid grid-cols-7 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg border ${
              metric.highlighted
                ? 'bg-yellow-100 border-yellow-300'
                : 'bg-white border-gray-200'
            }`}
          >
            <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
            <div className="text-lg font-semibold text-gray-900 mb-1">{metric.value}</div>
            <div className={`text-xs ${
              metric.subtext.includes('+') 
                ? 'text-green-600' 
                : metric.subtext === '0%' 
                  ? 'text-gray-500' 
                  : 'text-red-600'
            }`}>
              {metric.subtext}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
