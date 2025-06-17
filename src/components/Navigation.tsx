
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-surface-light/95 backdrop-blur-md shadow-lg border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">xN</span>
            </div>
            <span className={`font-heading font-bold text-xl transition-colors duration-200 ${
              isScrolled ? "text-surface-dark" : "text-white"
            }`}>
              xNerds Solutions
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : isScrolled 
                      ? "text-slate-dark hover:text-primary" 
                      : "text-slate-light hover:text-primary-light"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact">Let's Talk</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden transition-colors duration-200 ${
              isScrolled ? "text-surface-dark hover:text-primary" : "text-white hover:text-primary-light"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-surface-light/95 backdrop-blur-md border-t border-primary/10 animate-fade-in rounded-b-2xl shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-medium transition-colors duration-200 hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-slate-dark"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary/90 hover:to-primary-light/90 text-white rounded-full shadow-lg"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
