import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src="/lovable-uploads/6733d5ee-78db-4292-8521-02fb2410e0da.png"
              alt="TrueAgents.ai"
              className="h-8"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-primary hover:text-secondary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-primary hover:text-secondary transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-primary hover:text-secondary transition-colors"
            >
              Features
            </button>
            <Button onClick={() => scrollToSection("products")}>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-lg mt-2 absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-primary hover:text-secondary transition-colors px-4 py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-primary hover:text-secondary transition-colors px-4 py-2"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-primary hover:text-secondary transition-colors px-4 py-2"
              >
                Features
              </button>
              <Button
                onClick={() => scrollToSection("products")}
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};