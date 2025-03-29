import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HoverBorderGradient } from './ui/hover-border-gradient';

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
    setIsDropdownOpen(false);
    window.location.reload();
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-4 px-8 backdrop-blur-xl bg-gray-900/95 border-b border-gray-800">
      <div className="flex items-center gap-4">
        <img 
          src="https://reqres.in/img/logo.png" 
          className="w-28 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => navigate('/')}
          alt="EmployWise Logo"
        />
      </div>

      <div className="relative">
        {token ? (
          <div 
            className="group relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-pink-600 flex items-center justify-center cursor-pointer border-2 border-gray-700 hover:border-yellow-500 transition-all">
              <span className="font-medium text-white">U</span>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-[0.5px] w-48 origin-top-right rounded-xl bg-gray-800/95 backdrop-blur-sm border border-gray-700 shadow-xl">
                <div className="p-2 space-y-2">
                  <button
                    className="w-full px-4 py-2 text-left text-gray-300 hover:bg-gray-700/50 rounded-lg transition-colors flex items-center gap-2"
                    onClick={() => {
                      navigate('/users');
                      setIsDropdownOpen(false);
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                    View Users
                  </button>
                  <button
                    className="w-full px-4 py-2 text-left text-red-400 hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2"
                    onClick={handleLogout}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="px-6 py-2 bg-gray-800 text-white flex items-center gap-2 hover:bg-gray-700 transition-colors"
            onClick={() => navigate('/login')}
          >
            Sign In
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/>
            </svg>
          </HoverBorderGradient>
        )}
      </div>
    </nav>
  );
};

export default Navbar;