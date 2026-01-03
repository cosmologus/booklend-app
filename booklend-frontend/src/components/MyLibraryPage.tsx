import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Navbar } from "./Navbar";
import { BookOpen, Clock, Heart, Trash2, Download, BookMarked } from "lucide-react";

interface MyLibraryPageProps {
    onNavigate: (page: string) => void;
    onLogout?: () => void;
}

export function MyLibraryPage({ onNavigate, onLogout }: MyLibraryPageProps) {
    const myBooks = [
        {
            id: 1,
            title: "The Midnight Garden",
            author: "Sarah Johnson",
            image: "https://images.unsplash.com/photo-1758796629109-4f38e9374f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmaWN0aW9ufGVufDF8fHx8MTc2NDMzODk4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            progress: 75,
            status: "Reading",
        },
        {
            id: 2,
            title: "Mystery at Dawn",
            author: "Michael Chen",
            image: "https://images.unsplash.com/photo-1604435062356-a880b007922c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBteXN0ZXJ5fGVufDF8fHx8MTc2NDMyNTkxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            progress: 100,
            status: "Completed",
        },
        {
            id: 3,
            title: "Love in Paris",
            author: "Emma Williams",
            image: "https://images.unsplash.com/photo-1711185901354-73cb6b666c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjByb21hbmNlfGVufDF8fHx8MTc2NDMyMzQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            progress: 45,
            status: "Reading",
        },
        {
            id: 4,
            title: "Realm of Dragons",
            author: "Lisa Anderson",
            image: "https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rJTIwY292ZXIlMjBmYW50YXN5fGVufDF8fHx8MTc2NDM5NDk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            progress: 0,
            status: "Want to Read",
        },
    ];

    const readingStats = [
        { label: "Books Read", value: "12", icon: BookOpen, color: "bg-blue-100 text-blue-600" },
        { label: "Reading Time", value: "45h", icon: Clock, color: "bg-green-100 text-green-600" },
        { label: "Favorites", value: "8", icon: Heart, color: "bg-pink-100 text-pink-600" },
        { label: "In Progress", value: "3", icon: BookMarked, color: "bg-purple-100 text-purple-600" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar currentPage="library" onNavigate={onNavigate} onLogout={onLogout} />

            {/* Page Header */}
            <div className="bg-gradient-to-br from-blue-50 to-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-gray-900 mb-2">My Library</h1>
                    <p className="text-gray-600">Track your reading journey and manage your book collection</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {readingStats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                                <div
                                    className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mb-3`}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div className="text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-gray-200">
                    <button className="px-4 py-3 border-b-2 border-blue-600 text-blue-600">Currently Reading</button>
                    <button className="px-4 py-3 text-gray-600 hover:text-gray-900">Completed</button>
                    <button className="px-4 py-3 text-gray-600 hover:text-gray-900">Want to Read</button>
                    <button className="px-4 py-3 text-gray-600 hover:text-gray-900">Favorites</button>
                </div>

                {/* Books List */}
                <div className="space-y-4">
                    {myBooks.map((book) => (
                        <div
                            key={book.id}
                            className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col sm:flex-row gap-6">
                                {/* Book Cover */}
                                <div className="w-24 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                                    <ImageWithFallback
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Book Info */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-gray-900 mb-1">{book.title}</h3>
                                            <p className="text-gray-600">{book.author}</p>
                                        </div>
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm ${
                                                book.status === "Reading"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : book.status === "Completed"
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-gray-100 text-gray-600"
                                            }`}
                                        >
                                            {book.status}
                                        </span>
                                    </div>

                                    {/* Progress Bar */}
                                    {book.progress > 0 && (
                                        <div className="mb-4">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-gray-600">Reading Progress</span>
                                                <span className="text-gray-900">{book.progress}%</span>
                                            </div>
                                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-blue-600 rounded-full transition-all"
                                                    style={{ width: `${book.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* Actions */}
                                    <div className="flex flex-wrap gap-3">
                                        {book.status === "Reading" && (
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                Continue Reading
                                            </button>
                                        )}
                                        {book.status === "Completed" && (
                                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                                                Read Again
                                            </button>
                                        )}
                                        {book.status === "Want to Read" && (
                                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                                Start Reading
                                            </button>
                                        )}
                                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                                            <Download className="w-4 h-4" />
                                            Download
                                        </button>
                                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                                            <Heart className="w-4 h-4" />
                                            Favorite
                                        </button>
                                        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2">
                                            <Trash2 className="w-4 h-4" />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (if no books) */}
                {myBooks.length === 0 && (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-gray-900 mb-2">Your library is empty</h3>
                        <p className="text-gray-600 mb-6">Start building your collection by browsing our books</p>
                        <button
                            onClick={() => onNavigate("browse")}
                            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            Browse Books
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
