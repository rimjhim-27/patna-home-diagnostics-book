
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
      bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: <Clock className="h-8 w-8 text-emerald-600" />,
      title: "Quick Reports",
      description: "Fast turnaround times with digital report delivery",
      color: "emerald",
      bgPattern: "bg-gradient-to-br from-emerald-50 to-emerald-100"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure & Private",
      description: "Complete patient data privacy and encrypted transactions",
      color: "purple",
      bgPattern: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring precise test results",
      color: "orange",
      bgPattern: "bg-gradient-to-br from-orange-50 to-orange-100"
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
    <div className="min-h-screen dark-transition">
      {/* Clean Professional Hero Section */}
      <section className="relative bg-white py-24 overflow-hidden">
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute top-32 left-20">
            <Microscope className="w-8 h-8 text-blue-300 opacity-20 animate-floating-particles" />
          </div>
          <div className="absolute bottom-32 right-20">
            <TestTube className="w-6 h-6 text-teal-300 opacity-30 animate-floating-particles" />
          </div>
          <div className="absolute top-1/2 right-1/4">
            <FlaskConical className="w-10 h-10 text-purple-300 opacity-15 animate-floating-particles" />
          </div>
          <div className="absolute bottom-1/4 left-1/3">
            <Activity className="w-12 h-12 text-emerald-300 opacity-20 animate-heartbeat" />
          </div>
          
          {/* Animated pulse line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent animate-blood-flow"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up-fade">
              <div className="flex items-center space-x-3 mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
                  Patna's #1 Home Collection Service
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight medical-heading">
                Advanced Pathology Tests at Your 
                <span className="text-blue-600 block mt-2"> Doorstep</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                Professional home collection service in Patna, Bihar. Book your tests online 
                and get accurate results delivered digitally with complete privacy and medical excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 mb-10">
                <Link to="/booking">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-4">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Home Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 px-8 py-4">
                  <Phone className="mr-2 h-5 w-5" />
                  Emergency: 9693631158
                </Button>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">All Patna Areas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-emerald-600" />
                  <span className="font-medium">24/7 Emergency</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up-fade">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 medical-heading">Why Choose The LABs?</h3>
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className={`flex items-start space-x-4 p-4 rounded-xl ${feature.bgPattern} hover:bg-opacity-80 transition-all duration-300 cursor-pointer group`}>
                      <div className="group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <div className="flex justify-center mb-4">
              <TestTube className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 medical-heading">Popular Individual Tests</h2>
            <p className="text-xl text-gray-600">Most commonly booked pathology tests with quick results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularTests.map((test, index) => (
              <Card key={index} className="bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-105 group relative overflow-hidden">
                {test.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    POPULAR
                  </div>
                )}
                {test.urgent && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-heartbeat">
                    URGENT
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 leading-tight medical-subheading">{test.name}</h3>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold text-blue-600 medical-heading">{test.price}</span>
                    <div className="flex items-center text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <Clock className={`h-3 w-3 mr-1 ${test.urgent ? 'animate-heartbeat text-red-500' : ''}`} />
                      {test.time}
                    </div>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
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
              <Button variant="outline" size="lg" className="border-2 border-blue-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                View All Tests
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Health Packages Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <div className="flex justify-center mb-4">
              <Heart className="h-12 w-12 text-white animate-heartbeat" />
            </div>
            <h2 className="text-4xl font-bold mb-4 medical-heading">Comprehensive Health Packages</h2>
            <p className="text-xl text-blue-100">Complete health checkups at discounted prices with advanced diagnostics</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="relative bg-white text-gray-900 hover:scale-105 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
                <CardContent className="p-8 text-center relative">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {pkg.badge}
                  </div>
                  
                  <div className="mb-6">
                    <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 medical-heading">{pkg.name}</h3>
                    <p className="text-gray-600 font-medium medical-subheading">{pkg.tests}</p>
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-bold text-blue-600 medical-heading">{pkg.price}</span>
                    <span className="text-gray-500 line-through ml-3 text-lg">{pkg.originalPrice}</span>
                    <div className="text-emerald-600 font-semibold mt-2">
                      Save {pkg.savings}% • ₹{parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))}
                    </div>
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 text-lg py-3">
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
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-300">
                View All Packages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 medical-heading">What Our Patients Say</h2>
            <p className="text-xl text-gray-600">Trusted by thousands of patients across Patna</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up-fade">
            <Activity className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-heartbeat" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 medical-heading">How It Works</h2>
            <p className="text-xl text-gray-600">Simple 4-step process for your convenience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online", desc: "Select tests and schedule appointment", icon: "🔍", bgColor: "bg-blue-100" },
              { step: "2", title: "Pay Securely", desc: "Make secure online payment", icon: "💳", bgColor: "bg-emerald-100" },
              { step: "3", title: "Sample Collection", desc: "Our trained staff visits your home", icon: "🏠", bgColor: "bg-purple-100" },
              { step: "4", title: "Get Results", desc: "Digital reports delivered via email", icon: "📧", bgColor: "bg-orange-100" }
            ].map((item, index) => (
              <div key={index} className="text-center group animate-slide-up-fade">
                <div className="relative mb-6">
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 medical-heading">
                    {item.step}
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl animate-floating-particles">{item.icon}</div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-gray-300"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 medical-subheading">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full opacity-5 animate-floating-particles"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full opacity-5 animate-floating-particles"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Activity className="w-32 h-32 text-white opacity-5 animate-heartbeat" />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slide-up-fade">
          <FlaskConical className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4 medical-heading">Ready for Your Health Checkup?</h2>
          <p className="text-xl mb-8 text-blue-100">Professional home collection service with secure online booking and advanced diagnostics</p>
          
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
              Emergency: 9693631158
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-gray-900 p-6 rounded-xl">
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 medical-subheading">100% Secure</h4>
              <p className="text-sm">HIPAA compliant data protection</p>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-xl">
              <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h4 className="font-semibold mb-2 medical-subheading">NABL Certified</h4>
              <p className="text-sm">Accredited laboratory standards</p>
            </div>
            <div className="bg-white text-gray-900 p-6 rounded-xl">
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
