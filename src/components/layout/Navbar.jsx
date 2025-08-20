import { 
  Search,
  House,
  User,
  Rows3,
  BriefcaseBusiness,
  ScrollText,
  X,
  CircleX,
  Menu
} from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCancel = () => {
    setSearchValue("");
    setIsFocused(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { icon: House, label: "Dashboard", href: "#" },
    { icon: BriefcaseBusiness, label: "Listings", href: "#" },
    { icon: User, label: "Users", href: "#" },
    { icon: Rows3, label: "Requests", href: "#" },
    { icon: ScrollText, label: "Applications", href: "#" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Centered Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-4 lg:space-x-20 items-center">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 inline-flex items-center gap-1 lg:gap-2 px-2 lg:px-3 py-2 rounded-md text-sm font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900"
                  >
                    <Icon size={20} className="lg:size-[25px]" />
                    <span className="hidden lg:inline">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center ml-2 flex-1 md:flex-none justify-end md:justify-start">
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={isFocused ? "mary jane" : "search listings, users here..."}
                onFocus={() => setIsFocused(true)}
                className="pl-8 pr-8 py-2 text-sm rounded-lg border border-gray-300 font-poppins transition-colors duration-200 text-gray-700 focus:text-gray-900 focus:ring-0 focus:outline-none w-full md:w-64 lg:w-80"
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

        {/* Mobile menu, show/hide based on menu state */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-600 flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium font-poppins transition-colors hover:bg-gray-100 hover:text-gray-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon size={22} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;