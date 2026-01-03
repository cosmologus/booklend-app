import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Navbar } from './Navbar';
import { Search, Filter, Star, Heart, ChevronDown } from 'lucide-react';

interface BrowseBooksPageProps {
  onNavigate: (page: string) => void;
}

export function BrowseBooksPage({ onNavigate }: BrowseBooksPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const books = [
    {
      id: 1,
      title: "The Midnight Garden",
      author: "Sarah Johnson",
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NDMzODk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$12.99",
      category: "Fiction"
    },
    {
      id: 2,
      title: "Mystery at Dawn",
      author: "Michael Chen",
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1604435062356-a880b007922c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBteXN0ZXJ5fGVufDF8fHx8MTc2NDMyNTkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$14.99",
      category: "Mystery"
    },
    {
      id: 3,
      title: "Love in Paris",
      author: "Emma Williams",
      rating: 4.9,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1711185901354-73cb6b666c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjByb21hbmNlfGVufDF8fHx8MTc2NDMyMzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$11.99",
      category: "Romance"
    },
    {
      id: 4,
      title: "Science Wonders",
      author: "Dr. James Porter",
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1733426510973-4b7b7b3afd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBzY2llbmNlfGVufDF8fHx8MTc2NDM2NzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$16.99",
      category: "Science"
    },
    {
      id: 5,
      title: "Dark Shadows",
      author: "Robert Blake",
      rating: 4.5,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1696947833843-9707b58254fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjB0aHJpbGxlcnxlbnwxfHx8fDE3NjQzMTUzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$13.99",
      category: "Thriller"
    },
    {
      id: 6,
      title: "Realm of Dragons",
      author: "Lisa Anderson",
      rating: 4.8,
      reviews: 423,
      image: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmYW50YXN5fGVufDF8fHx8MTc2NDM5NDk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$15.99",
      category: "Fantasy"
    },
    {
      id: 7,
      title: "Life of Einstein",
      author: "Walter Isaacson",
      rating: 4.7,
      reviews: 198,
      image: "https://images.unsplash.com/photo-1619878473858-ace2b236897c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBiaW9ncmFwaHl8ZW58MXx8fHwxNzY0MzE2OTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$17.99",
      category: "Biography"
    },
    {
      id: 8,
      title: "Ancient Civilizations",
      author: "David Harper",
      rating: 4.6,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1611576673788-a954e01092d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBoaXN0b3J5fGVufDF8fHx8MTc2NDQwMzk4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      price: "$14.99",
      category: "History"
    }
  ];

  const categories = ['All', 'Fiction', 'Mystery', 'Romance', 'Science', 'Thriller', 'Fantasy', 'Biography', 'History'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPage="browse" onNavigate={onNavigate} />

      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-gray-900 mb-4">Browse Books</h1>
          <p className="text-gray-600 mb-6">
            Explore our complete collection of books across all genres
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by title, author, or ISBN..."
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="text-gray-900">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="text-gray-700 mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category.toLowerCase())}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.toLowerCase()
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="text-gray-700 mb-3">Price Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">Under $10</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">$10 - $15</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">$15 - $20</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-600">Over $20</span>
                  </label>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-gray-700 mb-3">Rating</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-600">4.5+</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-600">4.0+</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-gray-600">3.5+</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className="flex-1">
            {/* Sort and Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{books.length} books found</p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {books.map((book) => (
                <div key={book.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <ImageWithFallback
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="inline-block px-2 py-1 bg-blue-100 text-blue-600 rounded text-sm mb-2">
                      {book.category}
                    </div>
                    <h3 className="text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-gray-600 mb-3">{book.author}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-gray-900">{book.rating}</span>
                      </div>
                      <span className="text-gray-500">({book.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600">{book.price}</span>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-12">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
