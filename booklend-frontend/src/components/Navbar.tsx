import { BookOpen, User, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">Booklend</span>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('browse')}
              className={currentPage === 'browse' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}
            >
              Browse Books
            </button>
            <button
              onClick={() => onNavigate('library')}
              className={currentPage === 'library' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}
            >
              My Library
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className={currentPage === 'categories' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}
            >
              Categories
            </button>
          </div>

          {/* CTA and Profile */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <ShoppingBag className="w-4 h-4" />
              Buy a Book
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
