import { Trees, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Trees className="h-8 w-8 text-forest-300" />
              <span className="text-xl font-bold">The Alaska Foundation</span>
            </div>
            <p className="text-gray-300 mb-4">
              Dedicated to preserving Alaska's pristine forests and wilderness for future generations through conservation, land protection, and community engagement.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Alaska, United States</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@alaskafoundation.org" className="text-sm hover:text-forest-300 transition-colors">
                  info@alaskafoundation.org
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-forest-300 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-forest-300 transition-colors text-sm">Programs</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-forest-300 transition-colors text-sm">Donate</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-forest-300 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">Tongass Forest Preservation</li>
              <li className="text-gray-300 text-sm">Chugach Forest Preservation</li>
              <li className="text-gray-300 text-sm">Land Donation Program</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The Alaska Foundation. All rights reserved. 501(c)(3) Nonprofit Organization.
          </p>
        </div>
      </div>
    </footer>
  );
}
