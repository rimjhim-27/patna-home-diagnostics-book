
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Calendar, User, CheckCircle, Clock, Shield, MapPin, ArrowRight, Star, Zap, Heart, Activity, Microscope, FlaskConical, Stethoscope, TestTube, CircuitBoard } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Home Collection",
      description: "Convenient sample collection from your home at your preferred time",
      color: "blue",
      bgPattern: "bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200"
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Quick Reports",
      description: "Fast turnaround times with digital report delivery",
      color: "emerald",
      bgPattern: "bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-200"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure & Private",
      description: "Complete patient data privacy and encrypted transactions",
      color: "purple",
      bgPattern: "bg-gradient-to-br from-purple-50 via-purple-100 to-purple-200"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring precise test results",
      color: "orange",
      bgPattern: "bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200"
    }
  ];

  const popularTests = [
    { name: "Complete Blood Count (CBC)", price: "₹300", time: "24 hours", popular: true, urgent: false },
    { name: "Lipid Profile", price: "₹500", time: "24 hours", popular: false, urgent: false },
    { name: "Thyroid Profile (T3, T4, TSH)", price: "₹600", time: "48 hours", popular: true, urgent: false },
    { name: "Emergency COVID-19 RT-PCR", price: "₹400", time: "4 hours", popular: false, urgent: true },
  ];

  const healthPackages = [
    { name: "Full Body Checkup", tests: "50+ Tests", price: "₹2,499", originalPrice: "₹3,500", badge: "Most Popular", savings: 29 },
    { name: "Diabetes Package", tests: "8 Tests", price: "₹799", originalPrice: "₹1,200", badge: "Essential", savings: 33 },
    { name: "Heart Health Package", tests: "12 Tests", price: "₹1,299", originalPrice: "₹1,800", badge: "Recommended", savings: 28 },
  ];

  const testimonials = [
    { name: "Priya Sharma", rating: 5, text: "Excellent home collection service. Very professional and quick results!", location: "Boring Road, Patna" },
    { name: "Raj Kumar", rating: 5, text: "Timely service and accurate reports. Highly recommended for busy professionals.", location: "Kankarbagh, Patna" },
    { name: "Meera Singh", rating: 5, text: "Best pathology service in Patna. Home collection made it so convenient.", location: "Patliputra Colony, Patna" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Hero Section with Gradient Background */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating-particles"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-floating-particles"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-floating-particles"></div>
          
          {/* Medical Icons */}
          <div className="absolute top-32 left-20">
            <Microscope className="w-8 h-8 text-white opacity-30 animate-floating-particles" />
          </div>
          <div className="absolute bottom-32 right-20">
            <TestTube className="w-6 h-6 text-cyan-300 opacity-40 animate-floating-particles" />
          </div>
          <div className="absolute top-1/2 right-1/4">
            <FlaskConical className="w-10 h-10 text-purple-300 opacity-25 animate-floating-particles" />
          </div>
          <div className="absolute bottom-1/4 left-1/3">
            <Activity className="w-12 h-12 text-emerald-300 opacity-30 animate-heartbeat" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up-fade text-white">
              <div className="flex items-center space-x-3 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-4 py-2 rounded-full border border-yellow-300 shadow-lg">
                  Patna's #1 Home Collection Service
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight medical-heading">
                <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Advanced Pathology Tests at Your
                </span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Doorstep
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
                Professional home collection service in Patna, Bihar. Book your tests online 
                and get accurate results delivered digitally with complete privacy and medical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <Link to="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full sm:w-auto shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-8 py-4 border-0">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Home Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300 px-8 py-4 backdrop-blur-sm">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 9693631158
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-blue-200">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span className="font-medium">All Patna Areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span className="font-medium">24/7 Emergency</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up-fade">
              <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent medical-heading">Why Choose The LABs?</h3>
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl ${feature.bgPattern} hover:shadow-lg transition-all duration-300 cursor-pointer group border border-white/30`}>
                      <div className="group-hover:scale-110 transition-transform duration-300 p-2 bg-white rounded-lg shadow-sm">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 medical-subheading">
                          {feature.title}
                        </h4>
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

      {/* Enhanced Popular Tests Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
                <TestTube className="h-12 w-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-4 medical-heading">Popular Individual Tests</h2>
            <p className="text-xl text-gray-600">Most commonly booked pathology tests with quick results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularTests.map((test, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-blue-50 hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 group relative overflow-hidden backdrop-blur-sm">
                {test.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                    POPULAR
                  </div>
                )}
                {test.urgent && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-heartbeat shadow-lg">
                    URGENT
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 leading-tight medical-subheading">{test.name}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent medical-heading">{test.price}</span>
                    <div className="flex items-center text-sm text-gray-500 bg-gradient-to-r from-gray-100 to-blue-100 px-3 py-1 rounded-full border border-gray-200">
                      <Clock className={`h-3 w-3 mr-1 ${test.urgent ? 'animate-heartbeat text-red-500' : ''}`} />
                      {test.time}
                    </div>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-slide-up-fade">
            <Link to="/tests">
              <Button variant="outline" size="lg" className="border-2 border-blue-300 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 px-8 py-3">
                View All Tests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Health Packages Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-floating-particles"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-floating-particles"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl shadow-lg">
                <Heart className="h-12 w-12 text-white animate-heartbeat" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4 medical-heading">Comprehensive Health Packages</h2>
            <p className="text-xl text-blue-100">Complete health checkups at discounted prices with advanced diagnostics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="relative bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-900 hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {pkg.badge}
                  </div>
                  
                  <div className="mb-6">
                    <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-2 medical-heading">{pkg.name}</h3>
                    <p className="text-gray-600 font-medium medical-subheading">{pkg.tests}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent medical-heading">{pkg.price}</span>
                    <span className="text-gray-500 line-through ml-3 text-lg">{pkg.originalPrice}</span>
                    <div className="text-emerald-600 font-semibold mt-2 bg-gradient-to-r from-emerald-50 to-green-50 px-3 py-1 rounded-full inline-block">
                      Save {pkg.savings}% • ₹{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
                    </div>
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 text-lg py-3">
                      Book Package
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 animate-slide-up-fade">
            <Link to="/packages">
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300 backdrop-blur-sm">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Patient Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-4 medical-heading">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of patients across Patna</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-blue-50 hover:shadow-xl transition-all duration-300 border border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900 medical-subheading">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-20 bg-gradient-to-r from-white via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl shadow-lg w-fit mx-auto mb-4">
              <Activity className="h-12 w-12 text-white animate-heartbeat" />
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-4 medical-heading">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process for your convenience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online", desc: "Select tests and schedule appointment", icon: "🔍", bgColor: "from-blue-500 to-cyan-500" },
              { step: "2", title: "Pay Securely", desc: "Make secure online payment", icon: "💳", bgColor: "from-emerald-500 to-green-500" },
              { step: "3", title: "Sample Collection", desc: "Our trained staff visits your home", icon: "🏠", bgColor: "from-purple-500 to-pink-500" },
              { step: "4", title: "Get Results", desc: "Digital reports delivered via email", icon: "📧", bgColor: "from-orange-500 to-red-500" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-slide-up-fade">
                <div className="relative mb-6">
                  <div className={`bg-gradient-to-r ${item.bgColor} text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 medical-heading`}>
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-floating-particles">{item.icon}</div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 medical-subheading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-20 animate-floating-particles"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-20 animate-floating-particles"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Activity className="w-32 h-32 text-white opacity-10 animate-heartbeat" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up-fade">
          <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg w-fit mx-auto mb-6">
            <FlaskConical className="h-16 w-16 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 medical-heading">Ready for Your Health Checkup?</h2>
          <p className="text-xl mb-8 text-blue-100">Professional home collection service with secure online booking and advanced diagnostics</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
              <Phone className="mr-2 h-5 w-5" />
              Emergency: 9693631158
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-blue-50 text-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 medical-subheading">100% Secure</h4>
              <p className="text-sm">HIPAA compliant data protection</p>
            </div>
            <div className="bg-gradient-to-br from-white to-emerald-50 text-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 medical-subheading">NABL Certified</h4>
              <p className="text-sm">Accredited laboratory standards</p>
            </div>
            <div className="bg-gradient-to-br from-white to-purple-50 text-gray-900 p-6 rounded-xl shadow-lg backdrop-blur-sm">
              <Clock className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 medical-subheading">24/7 Support</h4>
              <p className="text-sm">Round-the-clock assistance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
