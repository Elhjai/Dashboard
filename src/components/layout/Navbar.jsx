import { 
  Search,
  House,
  User,
  Rows3,
  BriefcaseBusiness,
  ScrollText,
  X,
  CircleX
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleCancel = () => {
    setSearchValue("");
    setIsFocused(false);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Centered Navigation Links */}
          <div className="flex-1 flex justify-center">
            <div className="flex space-x-20 items-center">
              <a
                href="#"
                className="text-gray-600 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              >
                <House size={25} />
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-600 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              >
                <BriefcaseBusiness size={25} />
                Listings
              </a>
              <a
                href="#"
                className="text-gray-600 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              >
                <User size={25} />
                Users
              </a>
              <a
                href="#"
                className="text-gray-600 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              >
                <Rows3 size={25} />
                Requests
              </a>
              <a
                href="#"
                className="text-gray-600 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
              >
                <ScrollText size={25} />
                Applications
              </a>
            </div>
          </div>

          
          <div className="flex items-center ml-2">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={isFocused ? "mary jane" : "search listings, users here..."}
                onFocus={() => setIsFocused(true)}
                className="pl-8 py-2 text-sm rounded-lg border border-gray-300 font-poppins transition-colors duration-200 text-gray-700 focus:text-gray-900 focus:ring-0 focus:outline-none"
              />
              {/* Search Icon */}
              <Search
                className="absolute left-3 top-2.5 text-gray-400 pointer-events-none"
                size={18}
                strokeWidth={2}
              />
              {/* Cancel (X) Icon */}
              {isFocused && (
                <button
                  onClick={handleCancel}
                  className="absolute right-2 top-2.5 text-gray-400 hover:text-gray-700"
                >
                  <CircleX size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
