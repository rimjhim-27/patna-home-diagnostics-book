
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Calendar, User, CheckCircle, Clock, Shield, MapPin, ArrowRight, Star, Zap, Heart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Home Collection",
      description: "Convenient sample collection from your home at your preferred time",
      color: "blue"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Quick Reports",
      description: "Fast turnaround times with digital report delivery",
      color: "green"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure & Private",
      description: "Complete patient data privacy and encrypted transactions",
      color: "purple"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring precise test results",
      color: "orange"
    }
  ];

  const popularTests = [
    { name: "Complete Blood Count (CBC)", price: "₹300", time: "24 hours", popular: true },
    { name: "Lipid Profile", price: "₹500", time: "24 hours", popular: false },
    { name: "Thyroid Profile (T3, T4, TSH)", price: "₹600", time: "48 hours", popular: true },
    { name: "Diabetes Panel (HbA1c)", price: "₹400", time: "24 hours", popular: false },
  ];

  const healthPackages = [
    { name: "Full Body Checkup", tests: "50+ Tests", price: "₹2,499", originalPrice: "₹3,500", badge: "Most Popular" },
    { name: "Diabetes Package", tests: "8 Tests", price: "₹799", originalPrice: "₹1,200", badge: "Essential" },
    { name: "Heart Health Package", tests: "12 Tests", price: "₹1,299", originalPrice: "₹1,800", badge: "Recommended" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-500 animate-pulse" />
                <span className="text-sm font-medium text-blue-600">Patna's #1 Home Collection Service</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Pathology Tests at Your 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Doorstep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional home collection service in Patna, Bihar. Book your tests online 
                and get accurate results delivered digitally with complete privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Home Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9693631158
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span>All Patna Areas</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-3 py-2 rounded-full shadow-sm">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>7 Days a Week</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 hover:shadow-3xl transition-all duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose The LABs?</h3>
                  <Zap className="h-6 w-6 text-yellow-500 animate-pulse" />
                </div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 cursor-pointer group">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tests Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Individual Tests</h2>
            <p className="text-xl text-gray-600">Most commonly booked pathology tests with quick results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularTests.map((test, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 group relative overflow-hidden">
                {test.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    POPULAR
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="font-semibold text-gray-900 mb-3 leading-tight">{test.name}</h3>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-3xl font-bold text-blue-600">{test.price}</span>
                      <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Clock className="h-3 w-3 mr-1" />
                        {test.time}
                      </div>
                    </div>
                    <Link to="/booking">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/tests">
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50">
                View All Tests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trending Health Packages</h2>
            <p className="text-xl text-blue-100">Comprehensive health checkups at discounted prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="relative hover:shadow-2xl transition-all duration-500 border-0 bg-white text-gray-900 hover:scale-105 group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.badge}
                  </div>
                  <div className="mb-6">
                    <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 font-medium">{pkg.tests}</p>
                  </div>
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-500 line-through ml-3 text-lg">{pkg.originalPrice}</span>
                    <div className="text-green-600 font-semibold mt-1">
                      Save {Math.round(((parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
                    </div>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg group-hover:shadow-xl transition-all duration-300 text-lg py-3">
                      Book Package
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process for your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online", desc: "Select tests and schedule appointment", icon: "🔍" },
              { step: "2", title: "Pay Securely", desc: "Make secure online payment", icon: "💳" },
              { step: "3", title: "Sample Collection", desc: "Our trained staff visits your home", icon: "🏠" },
              { step: "4", title: "Get Results", desc: "Digital reports delivered via email", icon: "📧" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{item.icon}</div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-gray-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-blue-800/90"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-10 animate-pulse delay-1000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Test?</h2>
          <p className="text-xl mb-8 text-blue-100">Professional home collection service with secure online booking</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
              <Phone className="mr-2 h-5 w-5" />
              Call: 9693631158
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
