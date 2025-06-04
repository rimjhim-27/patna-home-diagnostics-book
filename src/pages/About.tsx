
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Clock, User, Award, Phone, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Secure & Confidential",
      description: "Complete patient data privacy with encrypted transactions and HIPAA-compliant handling"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Quick Turnaround",
      description: "Fast processing with most results available within 24-48 hours"
    },
    {
      icon: <User className="h-8 w-8 text-purple-600" />,
      title: "Professional Staff",
      description: "Trained phlebotomists and healthcare professionals ensuring quality service"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Quality Assured",
      description: "State-of-the-art laboratory equipment ensuring accurate and reliable results"
    }
  ];

  const services = [
    "Complete Blood Count (CBC)",
    "Lipid Profile Analysis",
    "Diabetes Monitoring",
    "Thyroid Function Tests",
    "Liver & Kidney Function",
    "Cardiac Risk Assessment",
    "Hormone Level Testing",
    "Vitamin Deficiency Screening",
    "Infectious Disease Testing",
    "Cancer Marker Screening"
  ];

  const process = [
    {
      step: "1",
      title: "Easy Online Booking",
      description: "Book your tests online or call us. Choose your preferred date and time slot for home collection."
    },
    {
      step: "2", 
      title: "Secure Payment",
      description: "Pay securely through our encrypted payment gateway using UPI, cards, or net banking."
    },
    {
      step: "3",
      title: "Home Collection",
      description: "Our trained staff visits your home at the scheduled time with proper safety protocols."
    },
    {
      step: "4",
      title: "Digital Reports",
      description: "Receive your reports via email with SMS alerts. Consultation available if needed."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Patna Home Diagnostics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for convenient, accurate, and secure pathology services 
            delivered right to your doorstep in Patna, Bihar.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To provide convenient, reliable, and affordable pathology services through our 
              home collection model, ensuring that quality healthcare diagnostics are accessible 
              to everyone in Patna without the hassle of visiting laboratories.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-gray-600 mb-6">
              We offer a comprehensive range of pathology tests and health packages, 
              all available with convenient home sample collection throughout Patna.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link to="/tests">
                <Button className="bg-blue-600 hover:bg-blue-700 mr-4">
                  View All Tests
                </Button>
              </Link>
              <Link to="/packages">
                <Button variant="outline">
                  Health Packages
                </Button>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How It Works</h2>
            <div className="space-y-6">
              {process.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Safety & Privacy */}
        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Safety & Privacy First</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Your health information is precious. We follow strict protocols to ensure 
              complete safety and confidentiality throughout your diagnostic journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Encryption</h3>
              <p className="text-gray-600 text-sm">
                All patient data is encrypted and stored securely with no unauthorized access
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Protocols</h3>
              <p className="text-gray-600 text-sm">
                Trained staff follow strict safety and hygiene protocols during collection
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Confidentiality</h3>
              <p className="text-gray-600 text-sm">
                Reports are delivered securely only to authorized individuals
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Book your pathology tests today and experience the convenience of home collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700">
                Book Appointment
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="mt-6 text-gray-400">
            <p>Phone: 9693631158 | Email: harshranjan0612@gmail.com</p>
            <p>Serving Patna, Bihar | Home Collection Only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
