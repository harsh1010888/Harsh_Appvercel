import LineChartJS from './LineChartJS';
import BarChartJS from './BarChartJS';

export default function ChartsSection({ lineData, barData }) {
  return (
    <div className="px-6 py-4 grid grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Daily Spend Trend</h3>
            <div className="flex space-x-2">
              <button className="p-1 text-blue-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </button>
              <button className="p-1 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-sm bg-orange-100 text-orange-800 rounded">Spend</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="h-64">
            <LineChartJS data={lineData} height={250} />
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Daily Spend Trend</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Campaign Performance</h3>
            <div className="flex space-x-2">
              <button className="p-1 text-blue-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </button>
              <button className="p-1 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"/>
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-2">
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded">Campaign Spend</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="h-64">
            <BarChartJS data={barData} height={250} />
          </div>
          <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span>Campaign Spending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
