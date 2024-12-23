import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    console.log("Navigation component mounted");
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      console.log("Scroll position:", window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("Current route:", location.pathname);
    if (!isHomePage) {
      setIsScrolled(true);
    }
  }, [location.pathname, isHomePage]);

  const scrollToSection = (id: string) => {
    console.log("Scrolling to section:", id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  const products = [
    { name: "Chat Agent", link: "https://www.trueagents.ai/chat/", external: true },
    { name: "Wealth Manager", link: "https://www.trueagents.ai/wealth-manager/", external: true },
    { name: "Email Craftsman", link: "https://www.trueagents.ai/emailcraftsman/", external: true },
    { name: "ReNews", link: "/renews", external: false },
    { name: "Lead Evaluator", link: "/lead-evaluator", external: false },
    { name: "Code Reviewer", link: "/code-reviewer", external: false },
    { name: "Rapid Onboarding", link: "/rapid-onboarding", external: false },
    { name: "AI Forms", link: "/ai-forms", external: false },
    { name: "PostPal", link: "/postpal", external: false },
  ];

  const handleProductClick = (link: string, external: boolean) => {
    console.log("Product clicked:", link, "External:", external);
    if (external) {
      window.open(link, '_blank');
    } else {
      navigate(link);
    }
    setIsMobileMenuOpen(false);
  };

  const getContactUrl = () => {
    const baseUrl = "https://www.sparxitsolutions.com/contact-global.shtml";
    const currentPage = location.pathname.replace('/', '') || 'homepage';
    return `${baseUrl}?utm_source=trueagents&utm_medium=website&utm_campaign=${currentPage}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? "bg-gradient-to-br from-primary/90 to-secondary/90 shadow-md" 
          : "bg-gradient-to-br from-primary/90 to-secondary/90"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={"/lovable-uploads/5d5cac74-0cc7-4ddf-8954-65ff18050683.png"}
                alt="TrueAgents.ai"
                className="h-14 w-auto cursor-pointer"
                loading="eager"
                fetchpriority="high"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage && (
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-secondary transition-colors"
              >
                About
              </button>
            )}
            
            <DropdownMenu>
              <DropdownMenuTrigger
                className="text-white hover:text-secondary transition-colors"
              >
                Products
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#8B5CF6] text-white min-w-[200px] p-2 rounded-md shadow-lg">
                {products.map((product, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleProductClick(product.link, product.external)}
                    className="hover:bg-[#7E69AB] rounded px-4 py-2 cursor-pointer transition-colors"
                  >
                    {product.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {isHomePage && (
              <button
                onClick={() => scrollToSection("features")}
                className="text-white hover:text-secondary transition-colors"
              >
                Why Us?
              </button>
            )}
            <Button 
              onClick={() => window.open(getContactUrl(), "_blank")}
            >
              Request a Custom AI Solution
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-primary/90 to-secondary/90 py-4 px-2 shadow-lg rounded-lg mt-2 absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              {isHomePage && (
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-secondary transition-colors px-4 py-2"
                >
                  About
                </button>
              )}
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => handleProductClick(product.link, product.external)}
                  className="text-white hover:text-secondary transition-colors px-4 py-2"
                >
                  {product.name}
                </button>
              ))}
              {isHomePage && (
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-white hover:text-secondary transition-colors px-4 py-2"
                >
                  Why Us?
                </button>
              )}
              <Button
                onClick={() => window.open(getContactUrl(), "_blank")}
                className="w-full"
              >
                Request a Custom AI Solution
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};