
import { Phone, Calendar, FlaskConical, Mail, MapPin, Clock, Shield, Award, HeartHandshake, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden dark-transition">
      {/* Medical themed animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full opacity-10 animate-floating-particles"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full opacity-10 animate-floating-particles delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full opacity-5 animate-dna-rotate"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="medical-gradient text-white p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 medical-icon-container">
                <FlaskConical className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold medical-gradient bg-clip-text text-transparent medical-heading">
                  The LABs
                </h3>
                <p className="text-blue-300 font-medium">Advanced Diagnostics • Home Collection Only</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              State-of-the-art pathology services delivered to your doorstep in Patna, Bihar. 
              We provide accurate test results with quick turnaround times, complete confidentiality, 
              and medical excellence you can trust.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 medical-card text-gray-900 rounded-lg service-card">
                <Phone className="h-5 w-5 text-blue-600 animate-heartbeat" />
                <span className="font-medium">9693631158</span>
              </div>
              <div className="flex items-center space-x-3 p-3 medical-card text-gray-900 rounded-lg service-card">
                <Mail className="h-5 w-5 text-blue-600 animate-heartbeat" />
                <span className="font-medium text-sm">harshranjan0612@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 p-3 medical-card text-gray-900 rounded-lg service-card">
                <MapPin className="h-5 w-5 text-blue-600 animate-heartbeat" />
                <span className="font-medium">All Patna Areas</span>
              </div>
              <div className="flex items-center space-x-3 p-3 medical-card text-gray-900 rounded-lg service-card">
                <Clock className="h-5 w-5 text-blue-600 animate-heartbeat" />
                <span className="font-medium">24/7 Emergency</span>
              </div>
            </div>

            {/* Floating WhatsApp Button */}
            <div className="mt-6">
              <a 
                href="https://wa.me/919693631158" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse-medical"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">WhatsApp Support</span>
              </a>
            </div>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-semibold mb-6 text-blue-300 medical-subheading flex items-center space-x-2">
              <HeartHandshake className="h-5 w-5 animate-heartbeat" />
              <span>Our Services</span>
            </h4>
            <ul className="space-y-3">
              {[
                "Individual Tests",
                "Health Packages", 
                "Emergency Tests",
                "Home Collection",
                "Digital Reports",
                "Consultation Support",
                "Corporate Packages",
                "Elderly Care Tests"
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer group">
                  <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:bg-blue-300 transition-colors duration-300 animate-pulse"></div>
                  <span className="medical-subheading">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <h4 className="text-lg font-semibold mb-6 text-blue-300 medical-subheading flex items-center space-x-2">
              <Calendar className="h-5 w-5 animate-heartbeat" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "View Tests", path: "/tests" },
                { name: "Health Packages", path: "/packages" },
                { name: "Book Appointment", path: "/booking" },
                { name: "Emergency Tests", path: "/booking" },
                { name: "Contact Us", path: "/contact" },
                { name: "About Us", path: "/about" },
                { name: "Patient Portal", path: "/login" },
                { name: "Download Reports", path: "/reports" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group service-card"
                  >
                    <div className="w-0 group-hover:w-2 h-2 bg-blue-400 rounded-full transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300 medical-subheading">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enhanced Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 The LABs. All rights reserved. | Advanced Pathology Services
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-blue-400 font-medium flex items-center space-x-2 medical-subheading">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <Shield className="h-4 w-4 animate-heartbeat" />
                <span>100% Secure & Confidential</span>
              </span>
              <span className="text-blue-400 font-medium flex items-center space-x-2 medical-subheading">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                <Award className="h-4 w-4 animate-heartbeat" />
                <span>NABL Certified</span>
              </span>
            </div>
          </div>
          
          {/* Medical Certifications */}
          <div className="mt-6 text-center">
            <p className="text-gray-500 text-sm">
              Accredited by National Accreditation Board for Testing and Calibration Laboratories (NABL) 
              | ISO 15189:2012 Certified | HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
