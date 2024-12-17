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
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img
              src={isScrolled ? "/lovable-uploads/7219978a-4d2f-48d2-be5a-451a70e07f1a.png" : "/lovable-uploads/5d5cac74-0cc7-4ddf-8954-65ff18050683.png"}
              alt="TrueAgents.ai"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-secondary transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-secondary transition-colors`}
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className={`${
                isScrolled ? "text-primary" : "text-white"
              } hover:text-secondary transition-colors`}
            >
              Why Us?
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
                Why Us?
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