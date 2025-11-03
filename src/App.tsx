import { useState } from "react";
import { HomePage } from "./components/HomePage";
import { UrbanBusinesses } from "./components/UrbanBusinesses";
import { RuralBusinesses } from "./components/RuralBusinesses";
import { MapOfIndia } from "./components/MapOfIndia";
import { ResearchHub } from "./components/ResearchHub";
import { Partnerships } from "./components/Partnerships";
import { Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { motion, AnimatePresence } from "motion/react";

export type Page =
  | "home"
  | "urban"
  | "rural"
  | "map"
  | "research"
  | "partnerships";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: "home", label: "Home" },
    { id: "urban", label: "Urban Businesses" },
    { id: "rural", label: "Rural Businesses" },
    { id: "map", label: "India Map" },
    { id: "research", label: "Research Hub" },
    { id: "partnerships", label: "Partnerships" },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "urban":
        return <UrbanBusinesses />;
      case "rural":
        return <RuralBusinesses />;
      case "map":
        return <MapOfIndia />;
      case "research":
        return <ResearchHub />;
      case "partnerships":
        return <Partnerships />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center">
                <span className="text-white">BD</span>
              </div>
              <span className="text-slate-900">
                Business Demo Platform
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navigation.map((item) => (
                <Button
                  key={item.id}
                  variant={
                    currentPage === item.id
                      ? "default"
                      : "ghost"
                  }
                  onClick={() =>
                    setCurrentPage(item.id as Page)
                  }
                  className={
                    currentPage === item.id
                      ? "bg-purple-600 hover:bg-purple-700"
                      : ""
                  }
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden pb-4"
              >
                {navigation.map((item) => (
                  <Button
                    key={item.id}
                    variant={
                      currentPage === item.id
                        ? "default"
                        : "ghost"
                    }
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full justify-start ${
                      currentPage === item.id
                        ? "bg-purple-600 hover:bg-purple-700"
                        : ""
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}