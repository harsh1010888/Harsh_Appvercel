export default function Header() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-900">Overview dashboard</h1>
        <p className="text-sm text-gray-500">A consolidated view of your app efficiency by storefronts and key metrics.</p>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* PDF Name Dropdown */}
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-red-500 rounded-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">📄</span>
          </div>
          <select className="text-sm border-none bg-transparent focus:outline-none cursor-pointer">
            <option>Pdf Name</option>
          </select>
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        
        {/* Date Range */}
        <div className="flex items-center space-x-2 border border-gray-300 rounded px-3 py-1">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
          <span className="text-sm text-gray-600">Last 7 Days</span>
          <span className="text-sm text-gray-900 font-medium">Jul 5 - Jul 11, 2025</span>
        </div>
        
        {/* Menu Button */}
        <button className="p-2">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
