export default function CampaignTables() {
  const topListData = [
    { name: 'Discovery', type: '(LOC)', spend: '$6,109.89', change: '+27.42%', installs: '$44', conversion: '0.00%', changePercent: '+27.42%' },
    { name: 'Competitor', type: '(LOC)', spend: '$6,109.89', change: '+27.42%', installs: '$121', conversion: '0.00%', changePercent: '+27.42%' },
    { name: 'Today tab', type: '(LOC)', spend: '$6,109.89', change: '+27.42%', installs: '$44', conversion: '0.00%', changePercent: '+27.42%' },
  ];

  const biggestChangesData = [
    { name: 'Discovery', type: '(LOC)', spend: '$6,109.89', change: '+7.42%' },
    { name: 'Today tab', type: '(LOC)', spend: '$6,109.89', change: '+7.42%' },
  ];

  return (
    <div className="px-6 py-4 grid grid-cols-2 gap-6">
      {/* Top List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Top List</h3>
          <div className="flex space-x-6 mt-4">
            <button className="text-sm font-medium text-purple-600 border-b-2 border-purple-600 pb-1">Campaigns</button>
            <button className="text-sm text-gray-500">Ad Groups</button>
            <button className="text-sm text-gray-500">Keywords</button>
            <button className="text-sm text-gray-500">Ads</button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-end space-x-4 mb-4 text-sm text-gray-500">
            <button className="flex items-center space-x-1">
              <span>Spend</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button className="flex items-center space-x-1">
              <span>Installs</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <button className="flex items-center space-x-1">
              <span>Conver...</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            {topListData.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
                <div className="flex space-x-8 text-sm">
                  <div className="text-center">
                    <div className="font-medium">{item.spend}</div>
                    <div className="text-green-600 text-xs">{item.change}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{item.installs}</div>
                    <div className="text-green-600 text-xs">{item.changePercent}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{item.conversion}</div>
                    <div className="text-gray-500 text-xs">0%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Biggest Changes */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Biggest Changes</h3>
          <div className="flex space-x-6 mt-4">
            <button className="text-sm font-medium text-gray-900 border-b-2 border-gray-900 pb-1">Campaigns</button>
            <button className="text-sm text-gray-500">Ad Groups</button>
            <button className="text-sm text-gray-500">Keywords</button>
            <button className="text-sm text-gray-500">Ads</button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-end mb-4">
            <button className="flex items-center space-x-1 text-sm text-gray-500">
              <span>Spend</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-3">
            {biggestChangesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">{item.type}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{item.spend}</div>
                  <div className="text-green-600 text-xs">{item.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
