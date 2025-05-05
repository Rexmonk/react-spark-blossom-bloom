
import React from 'react';
import { Menu, Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5 lg:px-6 fixed top-0 left-0 right-0 z-10">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 mr-3 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <Menu />
            <span className="sr-only">Open sidebar</span>
          </button>
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-600">Dashboard</span>
          </a>
        </div>
        
        <div className="flex items-center lg:order-2">
          <div className="hidden md:flex relative mr-3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <input 
              type="text" 
              className="pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full" 
              placeholder="Search..." 
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative text-gray-500 mr-3">
            <Bell className="w-5 h-5" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-2 h-2 bg-red-500 rounded-full top-1 right-1"></div>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false">
                <span className="sr-only">Open user menu</span>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                  <User className="w-5 h-5" />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="mt-3">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button 
            className="p-2 ml-1 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <Search className="w-5 h-5" />
            <span className="sr-only">Search</span>
          </button>
        </div>

        <div 
          className={`${mobileMenuOpen ? "block" : "hidden"} items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-blue-600 border-b border-gray-100 lg:border-0 lg:p-0">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-blue-600 lg:border-0 lg:p-0">
                Analytics
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-blue-600 lg:border-0 lg:p-0">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-blue-600 lg:border-0 lg:p-0">
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:text-blue-600 lg:border-0 lg:p-0">
                Reports
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
