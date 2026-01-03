import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Navbar } from "./Navbar";
import { Search, Star, TrendingUp, Heart, BookMarked, Compass, Sparkles, User, BookOpen } from "lucide-react";

interface HomePageProps {
    onNavigate: (page: string) => void;
    onLogout?: () => void;
}

export function HomePage({ onNavigate, onLogout }: HomePageProps) {
    const featuredBooks = [
        {
            id: 1,
            title: "The Midnight Garden",
            author: "Sarah Johnson",
            rating: 4.8,
            reviews: 234,
            image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NDMzODk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            price: "$12.99",
            category: "Fiction",
        },
        {
            id: 2,
            title: "Mystery at Dawn",
            author: "Michael Chen",
            rating: 4.6,
            reviews: 189,
            image: "https://images.unsplash.com/photo-1604435062356-a880b007922c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBteXN0ZXJ5fGVufDF8fHx8MTc2NDMyNTkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            price: "$14.99",
            category: "Mystery",
        },
        {
            id: 3,
            title: "Love in Paris",
            author: "Emma Williams",
            rating: 4.9,
            reviews: 312,
            image: "https://images.unsplash.com/photo-1711185901354-73cb6b666c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjByb21hbmNlfGVufDF8fHx8MTc2NDMyMzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            price: "$11.99",
            category: "Romance",
        },
        {
            id: 4,
            title: "Science Wonders",
            author: "Dr. James Porter",
            rating: 4.7,
            reviews: 156,
            image: "https://images.unsplash.com/photo-1733426510973-4b7b7b3afd55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBzY2llbmNlfGVufDF8fHx8MTc2NDM2NzQ3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            price: "$16.99",
            category: "Science",
        },
    ];

    const categories = [
        { name: "Fiction", icon: BookOpen, color: "bg-blue-100 text-blue-600", count: "2,340 books" },
        { name: "Mystery", icon: Compass, color: "bg-purple-100 text-purple-600", count: "1,230 books" },
        { name: "Romance", icon: Heart, color: "bg-pink-100 text-pink-600", count: "1,890 books" },
        { name: "Science", icon: Sparkles, color: "bg-green-100 text-green-600", count: "890 books" },
        { name: "Biography", icon: User, color: "bg-yellow-100 text-yellow-600", count: "670 books" },
        { name: "Self-Help", icon: TrendingUp, color: "bg-orange-100 text-orange-600", count: "1,120 books" },
        { name: "History", icon: BookMarked, color: "bg-red-100 text-red-600", count: "780 books" },
        { name: "Fantasy", icon: Sparkles, color: "bg-indigo-100 text-indigo-600", count: "1,560 books" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar currentPage="home" onNavigate={onNavigate} onLogout={onLogout} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-blue-50 to-white py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-gray-900 mb-4">Discover Your Next Great Read</h1>
                        <p className="text-gray-600 mb-8">
                            Explore thousands of books across all genres. From bestsellers to hidden gems, find your
                            perfect book in our ever-growing collection.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search for books, authors, or ISBN..."
                                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl mx-auto">
                            <div>
                                <div className="text-blue-600 mb-1">10,000+</div>
                                <div className="text-gray-600">Books</div>
                            </div>
                            <div>
                                <div className="text-blue-600 mb-1">50,000+</div>
                                <div className="text-gray-600">Readers</div>
                            </div>
                            <div>
                                <div className="text-blue-600 mb-1">100+</div>
                                <div className="text-gray-600">Publishers</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Books Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-gray-900 mb-2">Featured Books</h2>
                            <p className="text-gray-600">Handpicked selections just for you</p>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700">View All</button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredBooks.map((book) => (
                            <div
                                key={book.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                            >
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
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-gray-900 mb-2">Browse by Category</h2>
                        <p className="text-gray-600">Find books in your favorite genres</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={index}
                                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow text-left"
                                >
                                    <div
                                        className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-3`}
                                    >
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-gray-900 mb-1">{category.name}</h3>
                                    <p className="text-gray-500">{category.count}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center">
                        <h2 className="text-white mb-4">Start Your Reading Journey Today</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of readers who have discovered their favorite books on Booklend. Get
                            personalized recommendations and exclusive deals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                Get Started Free
                            </button>
                            <button className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* About */}
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <BookOpen className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-white">Booklend</span>
                            </div>
                            <p className="text-gray-400">
                                Your destination for discovering and reading amazing books from around the world.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div>
                            <h3 className="text-white mb-4">Categories</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Fiction
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Non-Fiction
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Children's Books
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Educational
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white mb-4">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-white transition-colors">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-gray-400">© 2025 Booklend. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 sm:mt-0">
                            <a href="#" className="hover:text-white transition-colors">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Facebook
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                Instagram
                            </a>
                            <a href="#" className="hover:text-white transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
