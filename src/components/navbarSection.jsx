import { Bell, Menu, Search, User, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import MobileNavbarSection from "./mobileNavbarSection";


export default function NavbarSection() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="shadow-2xl bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className=" flex items-center space-x-2 cursor-pointer">
            <img
              className="h-12 w-12 rounded-full object-cover border border-gray-300"
              src="../logos/logo.jpg"
              alt="Logo"
            />
        <span className="text-base hidden lg:flex">Health Link Nepal</span>
          </div>

          {/* Center - Navigation Links (Desktop) */}
          <div className="hidden sm:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {nabItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.url}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-base font-medium transition-colors duration-200"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - User Icon, Search Bar, Notification Icon (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">User profile</span>
            </button>

            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              <span className="sr-only">Notifications</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
         <MobileNavbarSection toggleMobileMenu={toggleMobileMenu}/> /* Pass the toggle function to close the menu on link click */
        )}
      </div>
    </nav>
  );
}

const nabItems = [
  {
    text: "Home",
    url: "/",
  },

  {
    text: "Contact",
    url: "/contact",
  },

  {
    text: "About Us",
    url: "/about",
  },
  {
    text: "Reminder",
    url: "/reminder",
  },
];
