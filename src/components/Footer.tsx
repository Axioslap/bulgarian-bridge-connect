import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary mr-1">ABTC</span>
              <span className="text-xl font-bold text-secondary">Buia</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-md">
              Connecting U.S.-educated Bulgarians, young professionals, and innovation 
              partners through events, mentorship, and curated opportunities.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-sm text-gray-600 hover:text-primary">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Member Area
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/login" className="text-sm text-gray-600 hover:text-primary">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-sm text-gray-600 hover:text-primary">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} American Business & Tech Club Bulgaria. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-primary mr-4">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;