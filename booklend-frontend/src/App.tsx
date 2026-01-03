import { useState } from "react";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { HomePage } from "./components/HomePage";
import { BrowseBooksPage } from "./components/BrowseBooksPage";
import { MyLibraryPage } from "./components/MyLibraryPage";
import { CategoriesPage } from "./components/CategoriesPage";

type PageType = "login" | "register" | "home" | "browse" | "library" | "categories";

export default function App() {
    const [currentPage, setCurrentPage] = useState<PageType>("home");

    const handleNavigate = (page: string) => {
        setCurrentPage(page as PageType);
    };

    return (
        <>
            {currentPage === "login" ? (
                <LoginPage onSwitchToRegister={() => setCurrentPage("register")} />
            ) : currentPage === "register" ? (
                <RegisterPage onSwitchToLogin={() => setCurrentPage("login")} />
            ) : currentPage === "browse" ? (
                <BrowseBooksPage onNavigate={handleNavigate} />
            ) : currentPage === "library" ? (
                <MyLibraryPage onNavigate={handleNavigate} />
            ) : currentPage === "categories" ? (
                <CategoriesPage onNavigate={handleNavigate} />
            ) : (
                <HomePage onNavigate={handleNavigate} />
            )}
        </>
    );
}
