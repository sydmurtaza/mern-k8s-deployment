import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import { LogOut, List, CheckSquare, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) =>
    `flex items-center px-4 py-2 rounded-md transition-colors ${
      isActive(path)
        ? 'bg-blue-100 text-blue-700'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

  return (
    <nav className="bg-white py-3 px-4 shadow-sm border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold text-blue-600 flex items-center">
          <CheckSquare className="mr-2 h-6 w-6" />
          TaskFlow
        </Link>

        <div className="hidden md:flex space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className={navLinkClass('/dashboard')}>
                <List className="w-4 h-4 mr-2" /> Dashboard
              </Link>
              <Link to="/profile" className={navLinkClass('/profile')}>
                <User className="w-4 h-4 mr-2" /> Profile
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center"
                onClick={() => logout()}
              >
                <LogOut className="w-4 h-4 mr-2" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" className={navLinkClass('/login')}>Login</Link>
              <Link to="/register">
                <Button size="sm" variant="primary">Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {user ? (
            <Button
              variant="outline"
              size="sm"
              className="flex items-center"
              onClick={() => logout()}
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm" variant="primary">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;