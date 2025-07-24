import { Bell, Menu, Search, User, X } from "lucide-react";
import { Link } from "react-router";

export default function MobileNavbarSection() {
    return (
        <div className="sm:hidden">
        {/* Mobile Navigation Links */}
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
        {nabItems.map((item) => (
          <Link
          key={item.text}
            to={item.url}
            className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
          >
            {item.text}{" "}
          </Link>
        ))}


        {/* Mobile Search Bar */}
        <div className="px-3 py-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-full text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="flex items-center justify-start space-x-4 px-3 py-2 ">
          <button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 "
          >
            <User className="h-5 w-5 cursor-pointer" />
            <span className="sr-only">User profile</span>
          </button>
         
          <button
            variant="ghost"
            size="icon"
            className="text-gray-600 hover:text-gray-900 relative "
          >
            <Bell className="h-5 w-5 crusor-pointer" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </button>

        </div>
      </div>
    </div>
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
