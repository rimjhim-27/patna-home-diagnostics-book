
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Phone, User } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Full Body Checkup",
      subtitle: "Comprehensive Health Assessment",
      price: "₹2,499",
      originalPrice: "₹3,500",
      tests: "50+ Tests",
      time: "48-72 hours",
      popular: true,
      category: "Comprehensive",
      description: "Complete health screening including all major organ systems",
      includes: [
        "Complete Blood Count (CBC)",
        "Lipid Profile Complete",
        "Liver Function Test (LFT)",
        "Kidney Function Test (KFT)",
        "Thyroid Profile (T3, T4, TSH)",
        "Diabetes Profile (HbA1c, Fasting, PP)",
        "Vitamin D3 & B12",
        "Urine Complete Analysis",
        "ECG & Chest X-Ray consultation",
        "Doctor consultation included"
      ]
    },
    {
      id: 2,
      name: "Diabetes Package",
      subtitle: "Complete Diabetes Monitoring",
      price: "₹799",
      originalPrice: "₹1,200",
      tests: "8 Tests",
      time: "24-48 hours",
      popular: false,
      category: "Specialized",
      description: "Comprehensive diabetes assessment and monitoring",
      includes: [
        "HbA1c (Glycated Hemoglobin)",
        "Fasting Blood Sugar",
        "Post Prandial Blood Sugar",
        "Insulin Fasting",
        "Urine Microalbumin",
        "Lipid Profile",
        "Kidney Function Test",
        "Doctor consultation"
      ]
    },
    {
      id: 3,
      name: "Heart Health Package",
      subtitle: "Cardiac Risk Assessment",
      price: "₹1,299",
      originalPrice: "₹1,800",
      tests: "12 Tests",
      time: "48 hours",
      popular: true,
      category: "Specialized",
      description: "Complete cardiovascular health evaluation",
      includes: [
        "Lipid Profile Complete",
        "Cardiac Risk Markers",
        "C-Reactive Protein (CRP)",
        "Homocysteine",
        "ECG Consultation",
        "Blood Pressure Monitoring",
        "Complete Blood Count",
        "Diabetes Screening",
        "Kidney Function Test",
        "Cardiologist consultation"
      ]
    },
    {
      id: 4,
      name: "Thyroid Package",
      subtitle: "Complete Thyroid Assessment",
      price: "₹999",
      originalPrice: "₹1,400",
      tests: "6 Tests",
      time: "48 hours",
      popular: false,
      category: "Hormone",
      description: "Comprehensive thyroid function evaluation",
      includes: [
        "T3 (Triiodothyronine)",
        "T4 (Thyroxine)",
        "TSH (Thyroid Stimulating Hormone)",
        "Anti-TPO Antibodies",
        "Thyroglobulin",
        "Doctor consultation"
      ]
    },
    {
      id: 5,
      name: "Women's Health Package",
      subtitle: "Comprehensive Women's Wellness",
      price: "₹1,599",
      originalPrice: "₹2,200",
      tests: "25+ Tests",
      time: "48-72 hours",
      popular: true,
      category: "Gender Specific",
      description: "Complete health screening designed for women",
      includes: [
        "Complete Blood Count",
        "Thyroid Profile Complete",
        "Hormone Panel (FSH, LH, Estrogen)",
        "Iron Studies Complete",
        "Vitamin D3 & B12",
        "Cancer Markers (CA 125)",
        "Bone Health Markers",
        "Diabetes Screening",
        "Gynecologist consultation",
        "Nutritionist consultation"
      ]
    },
    {
      id: 6,
      name: "Senior Citizen Package",
      subtitle: "Health Monitoring for 60+ Age",
      price: "₹1,799",
      originalPrice: "₹2,500",
      tests: "30+ Tests",
      time: "48-72 hours",
      popular: false,
      category: "Age Specific",
      description: "Specialized health checkup for senior citizens",
      includes: [
        "Complete Blood Count",
        "Comprehensive Metabolic Panel",
        "Cardiac Risk Assessment",
        "Diabetes Complete Profile",
        "Bone Health Markers",
        "Prostate Markers (for men)",
        "Kidney & Liver Function",
        "Vitamin Deficiency Panel",
        "Geriatrician consultation",
        "Home visit included"
      ]
    }
  ];

  const categories = ["All", "Comprehensive", "Specialized", "Hormone", "Gender Specific", "Age Specific"];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Health Packages</h1>
          <p className="text-xl text-gray-600 mb-6">
            Comprehensive health checkup packages at discounted prices with home collection
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-blue-600" />
              <span>Home Collection Included</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1 text-green-600" />
              <span>Doctor Consultation</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-orange-600" />
              <span>Quick Results</span>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg) => (
            <Card key={pkg.id} className={`relative hover:shadow-xl transition-all duration-300 ${pkg.popular ? 'border-2 border-blue-200 bg-blue-50' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-1">
                    MOST POPULAR
                  </Badge>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl font-bold text-gray-900 mb-1">
                      {pkg.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{pkg.subtitle}</p>
                    <Badge variant="outline" className="mt-2">
                      {pkg.category}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                    <div className="text-gray-500 line-through text-sm">{pkg.originalPrice}</div>
                    <div className="text-green-600 text-sm font-semibold">
                      Save {Math.round(((parseInt(pkg.originalPrice.slice(1)) - parseInt(pkg.price.slice(1))) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    {pkg.tests}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.time}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Package Includes:</h4>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto">
                    {pkg.includes.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to="/booking" state={{ selectedPackage: pkg }}>
                  <Button className={`w-full ${pkg.popular ? 'bg-orange-600 hover:bg-orange-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
                    Book This Package
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Health Packages?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Testing</h3>
              <p className="text-gray-600 text-sm">
                All packages include essential tests for complete health assessment
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Consultation</h3>
              <p className="text-gray-600 text-sm">
                Doctor consultation included with every package
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Home Collection</h3>
              <p className="text-gray-600 text-sm">
                Convenient sample collection at your preferred time
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Health Package?</h2>
          <p className="text-lg mb-6">
            Get comprehensive health assessment with significant savings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Book Package Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Need Guidance? Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
