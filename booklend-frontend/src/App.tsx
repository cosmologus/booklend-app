import { useState, useEffect } from "react";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { HomePage } from "./components/HomePage";
import { BrowseBooksPage } from "./components/BrowseBooksPage";
import { MyLibraryPage } from "./components/MyLibraryPage";
import { CategoriesPage } from "./components/CategoriesPage";
import { navigate, getCurrentPath, subscribe } from "./router";
import { isAuthenticated, logout } from "./auth";

export default function App() {
    const [currentPath, setCurrentPath] = useState(getCurrentPath());
    const [isLoggedIn, setIsLoggedIn] = useState(isAuthenticated());

    useEffect(() => {
        // Subscribe to route changes
        const unsubscribe = subscribe((path) => {
            setCurrentPath(path);
            // Re-check auth status on navigation
            setIsLoggedIn(isAuthenticated());
        });

        // Redirect based on auth status
        const path = getCurrentPath();
        if (isLoggedIn) {
            // If logged in and on auth pages, redirect to home
            if (path === "/" || path === "/login" || path === "/register") {
                navigate("/home");
            }
        } else {
            // If not logged in and on protected pages, redirect to login
            if (path !== "/login" && path !== "/register") {
                navigate("/login");
            }
        }

        return unsubscribe;
    }, [isLoggedIn]);

    const handleNavigate = (page: string) => {
        navigate(`/${page}`);
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        navigate("/home");
    };

    const handleLogout = () => {
        logout();
        setIsLoggedIn(false);
        navigate("/login");
    };

    // Public routes (login/register)
    if (!isLoggedIn) {
        if (currentPath === "/register") {
            return (
                <RegisterPage onSwitchToLogin={() => navigate("/login")} onRegisterSuccess={() => navigate("/login")} />
            );
        }
        return <LoginPage onSwitchToRegister={() => navigate("/register")} onLoginSuccess={handleLoginSuccess} />;
    }

    // Protected routes (require authentication)
    const renderProtectedPage = () => {
        switch (currentPath) {
            case "/browse":
                return <BrowseBooksPage onNavigate={handleNavigate} onLogout={handleLogout} />;
            case "/library":
                return <MyLibraryPage onNavigate={handleNavigate} onLogout={handleLogout} />;
            case "/categories":
                return <CategoriesPage onNavigate={handleNavigate} onLogout={handleLogout} />;
            case "/home":
            default:
                return <HomePage onNavigate={handleNavigate} onLogout={handleLogout} />;
        }
    };

    return <>{renderProtectedPage()}</>;
}
