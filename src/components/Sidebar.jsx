export default function Sidebar() {
  const navigationItems = [
    { icon: '📊', active: true },
    { icon: '🎯', active: false },
    { icon: '📱', active: false },
    { icon: '💬', active: false },
    { icon: '📈', active: false },
    { icon: '🎨', active: false },
    { icon: '⚙️', active: false },
    { icon: '❓', active: false },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-orange-500 flex flex-col">
      {/* Logo/Brand */}
      <div className="h-16 flex items-center justify-center bg-orange-600">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
        </div>
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col py-4 space-y-2">
        {navigationItems.map((item, index) => (
          <div
            key={index}
            className={`mx-2 h-10 flex items-center justify-center rounded cursor-pointer transition-colors ${
              item.active
                ? 'bg-orange-400 text-white'
                : 'text-orange-100 hover:bg-orange-400/50 hover:text-white'
            }`}
          >
            <span className="text-lg">{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
