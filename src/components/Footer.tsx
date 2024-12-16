import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><a href="#" className="hover:text-secondary">Lead Evaluator</a></li>
              <li><a href="#" className="hover:text-secondary">Code Reviewer</a></li>
              <li><a href="#" className="hover:text-secondary">Wealth Manager</a></li>
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm">Sign up for updates on new AI agents!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:border-secondary"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TrueAgents.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};