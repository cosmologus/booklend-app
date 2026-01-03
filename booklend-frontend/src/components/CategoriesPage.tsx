import { Navbar } from "./Navbar";
import {
    BookOpen,
    Heart,
    Compass,
    Sparkles,
    User,
    TrendingUp,
    BookMarked,
    Lightbulb,
    Briefcase,
    GraduationCap,
    Music,
    Plane,
    Utensils,
    Palette,
    Scale,
    Activity,
} from "lucide-react";

interface CategoriesPageProps {
    onNavigate: (page: string) => void;
    onLogout?: () => void;
}

export function CategoriesPage({ onNavigate, onLogout }: CategoriesPageProps) {
    const categories = [
        {
            name: "Fiction",
            icon: BookOpen,
            color: "bg-blue-100 text-blue-600 border-blue-200",
            count: "2,340 books",
            description: "Explore imaginary worlds and compelling stories",
        },
        {
            name: "Mystery & Thriller",
            icon: Compass,
            color: "bg-purple-100 text-purple-600 border-purple-200",
            count: "1,230 books",
            description: "Suspenseful tales that keep you guessing",
        },
        {
            name: "Romance",
            icon: Heart,
            color: "bg-pink-100 text-pink-600 border-pink-200",
            count: "1,890 books",
            description: "Love stories from sweet to steamy",
        },
        {
            name: "Science & Technology",
            icon: Sparkles,
            color: "bg-green-100 text-green-600 border-green-200",
            count: "890 books",
            description: "Discover the wonders of science",
        },
        {
            name: "Biography & Memoir",
            icon: User,
            color: "bg-yellow-100 text-yellow-600 border-yellow-200",
            count: "670 books",
            description: "Real life stories of remarkable people",
        },
        {
            name: "Self-Help & Personal Growth",
            icon: TrendingUp,
            color: "bg-orange-100 text-orange-600 border-orange-200",
            count: "1,120 books",
            description: "Transform your life and mindset",
        },
        {
            name: "History",
            icon: BookMarked,
            color: "bg-red-100 text-red-600 border-red-200",
            count: "780 books",
            description: "Journey through time and civilizations",
        },
        {
            name: "Fantasy",
            icon: Sparkles,
            color: "bg-indigo-100 text-indigo-600 border-indigo-200",
            count: "1,560 books",
            description: "Magic, dragons, and epic adventures",
        },
        {
            name: "Philosophy",
            icon: Lightbulb,
            color: "bg-cyan-100 text-cyan-600 border-cyan-200",
            count: "450 books",
            description: "Explore life's big questions",
        },
        {
            name: "Business & Economics",
            icon: Briefcase,
            color: "bg-teal-100 text-teal-600 border-teal-200",
            count: "920 books",
            description: "Master the art of business",
        },
        {
            name: "Education & Reference",
            icon: GraduationCap,
            color: "bg-lime-100 text-lime-600 border-lime-200",
            count: "680 books",
            description: "Learn and expand your knowledge",
        },
        {
            name: "Arts & Music",
            icon: Music,
            color: "bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200",
            count: "340 books",
            description: "Creativity and artistic expression",
        },
        {
            name: "Travel & Adventure",
            icon: Plane,
            color: "bg-sky-100 text-sky-600 border-sky-200",
            count: "520 books",
            description: "Explore the world from your couch",
        },
        {
            name: "Cooking & Food",
            icon: Utensils,
            color: "bg-amber-100 text-amber-600 border-amber-200",
            count: "410 books",
            description: "Culinary adventures and recipes",
        },
        {
            name: "Art & Design",
            icon: Palette,
            color: "bg-rose-100 text-rose-600 border-rose-200",
            count: "290 books",
            description: "Visual arts and creative design",
        },
        {
            name: "Law & Politics",
            icon: Scale,
            color: "bg-slate-100 text-slate-600 border-slate-200",
            count: "360 books",
            description: "Understanding society and governance",
        },
        {
            name: "Health & Wellness",
            icon: Activity,
            color: "bg-emerald-100 text-emerald-600 border-emerald-200",
            count: "740 books",
            description: "Physical and mental well-being",
        },
        {
            name: "Children's Books",
            icon: BookOpen,
            color: "bg-violet-100 text-violet-600 border-violet-200",
            count: "1,230 books",
            description: "Stories for young readers",
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar currentPage="categories" onNavigate={onNavigate} onLogout={onLogout} />

            {/* Page Header */}
            <div className="bg-gradient-to-br from-blue-50 to-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-gray-900 mb-2">Browse Categories</h1>
                    <p className="text-gray-600">Discover books across all genres and topics</p>
                </div>
            </div>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Featured Categories */}
                <div className="mb-12">
                    <h2 className="text-gray-900 mb-6">Popular Categories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.slice(0, 4).map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => onNavigate("browse")}
                                    className={`${category.color} border p-6 rounded-xl hover:shadow-md transition-shadow text-left group`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div
                                            className={`w-14 h-14 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <span className="text-sm opacity-75">{category.count}</span>
                                    </div>
                                    <h3 className="text-gray-900 mb-2">{category.name}</h3>
                                    <p className="text-sm opacity-75">{category.description}</p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* All Categories */}
                <div>
                    <h2 className="text-gray-900 mb-6">All Categories</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <button
                                    key={index}
                                    onClick={() => onNavigate("browse")}
                                    className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow text-left group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-gray-900 mb-1 truncate">{category.name}</h3>
                                            <p className="text-gray-500 text-sm">{category.count}</p>
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-center">
                    <h2 className="text-white mb-4">Can't Find What You're Looking For?</h2>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Use our advanced search to find books by title, author, ISBN, or keywords
                    </p>
                    <button
                        onClick={() => onNavigate("browse")}
                        className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Advanced Search
                    </button>
                </div>
            </div>
        </div>
    );
}
