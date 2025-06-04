
import { Phone, Calendar, FlaskConical, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <FlaskConical className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                  The LABs
                </h3>
                <p className="text-blue-300 font-medium">Home Collection Only</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Convenient and reliable pathology services delivered to your doorstep in Patna, Bihar. 
              We provide accurate test results with quick turnaround times and complete confidentiality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="font-medium">9693631158</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="font-medium text-sm">harshranjan0612@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="font-medium">All Patna Areas</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="font-medium">7 Days a Week</span>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Individual Tests",
                "Health Packages", 
                "Home Collection",
                "Digital Reports",
                "Emergency Tests",
                "Consultation Support"
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "View Tests", path: "/tests" },
                { name: "Health Packages", path: "/packages" },
                { name: "Book Appointment", path: "/booking" },
                { name: "Contact Us", path: "/contact" },
                { name: "About Us", path: "/about" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-0 group-hover:w-2 h-2 bg-blue-400 rounded-full transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 The LABs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-blue-400 font-medium flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Secure & Confidential</span>
              </span>
              <span className="text-blue-400 font-medium flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <span>NABL Certified</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
