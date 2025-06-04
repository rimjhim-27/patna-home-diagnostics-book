
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Phone, Calendar, User, CheckCircle, Clock, Shield, MapPin } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Phone className="h-8 w-8 text-blue-600" />,
      title: "Home Collection",
      description: "Convenient sample collection from your home at your preferred time"
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Quick Reports",
      description: "Fast turnaround times with digital report delivery"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      title: "Secure & Private",
      description: "Complete patient data privacy and encrypted transactions"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Accurate Results",
      description: "State-of-the-art equipment ensuring precise test results"
    }
  ];

  const popularTests = [
    { name: "Complete Blood Count (CBC)", price: "₹300", time: "24 hours" },
    { name: "Lipid Profile", price: "₹500", time: "24 hours" },
    { name: "Thyroid Profile (T3, T4, TSH)", price: "₹600", time: "48 hours" },
    { name: "Diabetes Panel (HbA1c)", price: "₹400", time: "24 hours" },
  ];

  const healthPackages = [
    { name: "Full Body Checkup", tests: "50+ Tests", price: "₹2,499", originalPrice: "₹3,500" },
    { name: "Diabetes Package", tests: "8 Tests", price: "₹799", originalPrice: "₹1,200" },
    { name: "Heart Health Package", tests: "12 Tests", price: "₹1,299", originalPrice: "₹1,800" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pathology Tests at Your 
                <span className="text-blue-600"> Doorstep</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional home collection service in Patna, Bihar. Book your tests online 
                and get accurate results delivered digitally with complete privacy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Home Collection
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 9693631158
                </Button>
              </div>
              <div className="flex items-center space-x-4 mt-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-blue-600" />
                  Serving all Patna
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-green-600" />
                  7 Days a Week
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      {feature.icon}
                      <div>
                        <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Individual Tests</h2>
            <p className="text-gray-600">Most commonly booked pathology tests with quick results</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularTests.map((test, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{test.name}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">{test.price}</span>
                    <span className="text-sm text-gray-500">{test.time}</span>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/tests">
              <Button variant="outline" size="lg">
                View All Tests
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Health Packages Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Health Packages</h2>
            <p className="text-gray-600">Comprehensive health checkups at discounted prices</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {healthPackages.map((pkg, index) => (
              <Card key={index} className="relative hover:shadow-xl transition-shadow border-2 hover:border-blue-200">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                    SAVE {Math.round(((parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.tests}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-600">{pkg.price}</span>
                    <span className="text-gray-500 line-through ml-2">{pkg.originalPrice}</span>
                  </div>
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Book Package
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/packages">
              <Button variant="outline" size="lg">
                View All Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-gray-600">Simple 4-step process for your convenience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book Online", desc: "Select tests and schedule appointment" },
              { step: "2", title: "Pay Securely", desc: "Make secure online payment" },
              { step: "3", title: "Sample Collection", desc: "Our trained staff visits your home" },
              { step: "4", title: "Get Results", desc: "Digital reports delivered via email" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Test?</h2>
          <p className="text-xl mb-8">Professional home collection service with secure online booking</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Appointment Now
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
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
