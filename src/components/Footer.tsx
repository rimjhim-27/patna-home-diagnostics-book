
import { Phone, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Patna Home Diagnostics</h3>
                <p className="text-gray-400">Home Collection Only</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Convenient and reliable pathology services delivered to your doorstep in Patna, Bihar. 
              We provide accurate test results with quick turnaround times.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>9693631158</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-blue-400" />
                <span>7 Days a Week</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Individual Tests</li>
              <li>Health Packages</li>
              <li>Home Collection</li>
              <li>Report Delivery</li>
              <li>Emergency Tests</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/tests" className="hover:text-white">View Tests</a></li>
              <li><a href="/packages" className="hover:text-white">Health Packages</a></li>
              <li><a href="/booking" className="hover:text-white">Book Appointment</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Patna Home Diagnostics. All rights reserved. | 
            <span className="text-blue-400"> Secure & Confidential</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
