import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">About Us</a></li>
              <li><a href="#" className="hover:text-secondary">Contact</a></li>
              <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Chat Agent</a></li>
              <li><a href="#" className="hover:text-secondary">Lead Evaluator Agent</a></li>
              <li><a href="#" className="hover:text-secondary">Code Reviewer Agent</a></li>
              <li><a href="#" className="hover:text-secondary">Wealth Manager</a></li>
              <li><a href="#" className="hover:text-secondary">Rapid Onboarding (KYC Agent)</a></li>
              <li><a href="#" className="hover:text-secondary">AI Powered Forms</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-secondary">Twitter</a></li>
              <li><a href="#" className="hover:text-secondary">LinkedIn</a></li>
              <li><a href="#" className="hover:text-secondary">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TrueAgents.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};