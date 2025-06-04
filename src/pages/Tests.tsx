
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Clock, Phone } from "lucide-react";

const Tests = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Blood Tests", "Urine Tests", "Hormone Tests", "Cardiac Tests", "Diabetes Tests", "Liver Tests", "Kidney Tests"];

  const tests = [
    { name: "Complete Blood Count (CBC)", category: "Blood Tests", price: "₹300", time: "24 hours", description: "Complete blood analysis including RBC, WBC, Platelets" },
    { name: "Lipid Profile", category: "Blood Tests", price: "₹500", time: "24 hours", description: "Cholesterol, HDL, LDL, Triglycerides analysis" },
    { name: "Thyroid Profile (T3, T4, TSH)", category: "Hormone Tests", price: "₹600", time: "48 hours", description: "Complete thyroid function assessment" },
    { name: "HbA1c (Diabetes)", category: "Diabetes Tests", price: "₹400", time: "24 hours", description: "3-month average blood sugar levels" },
    { name: "Liver Function Test (LFT)", category: "Liver Tests", price: "₹450", time: "24 hours", description: "Complete liver health assessment" },
    { name: "Kidney Function Test (KFT)", category: "Kidney Tests", price: "₹400", time: "24 hours", description: "Kidney health and function evaluation" },
    { name: "Urine Complete Analysis", category: "Urine Tests", price: "₹200", time: "12 hours", description: "Complete urine examination" },
    { name: "Cardiac Profile", category: "Cardiac Tests", price: "₹800", time: "48 hours", description: "Heart health assessment including ECG markers" },
    { name: "Vitamin D3", category: "Hormone Tests", price: "₹700", time: "72 hours", description: "Vitamin D deficiency assessment" },
    { name: "Vitamin B12", category: "Hormone Tests", price: "₹600", time: "48 hours", description: "B12 deficiency evaluation" },
    { name: "Iron Studies", category: "Blood Tests", price: "₹550", time: "24 hours", description: "Iron, TIBC, Ferritin analysis" },
    { name: "ESR (Erythrocyte Sedimentation Rate)", category: "Blood Tests", price: "₹150", time: "12 hours", description: "Inflammation marker test" },
    { name: "C-Reactive Protein (CRP)", category: "Blood Tests", price: "₹300", time: "24 hours", description: "Inflammation and infection marker" },
    { name: "Dengue Test", category: "Blood Tests", price: "₹500", time: "24 hours", description: "Dengue fever detection" },
    { name: "Malaria Test", category: "Blood Tests", price: "₹250", time: "12 hours", description: "Malaria parasite detection" },
    { name: "Hepatitis B Surface Antigen", category: "Blood Tests", price: "₹300", time: "24 hours", description: "Hepatitis B virus detection" },
  ];

  const filteredTests = tests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Individual Pathology Tests</h1>
          <p className="text-xl text-gray-600 mb-6">
            Choose from our comprehensive range of pathology tests with home collection service
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-blue-600" />
              <span>Home Collection Available</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1 text-green-600" />
              <span>Quick Results</span>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search tests by name or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredTests.length} test{filteredTests.length !== 1 ? 's' : ''} 
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTests.map((test, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {test.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{test.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{test.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">{test.price}</span>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {test.time}
                  </div>
                </div>
                <Link to="/booking" state={{ selectedTest: test }}>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Book This Test
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTests.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tests found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or category filter
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing Tests?</h2>
          <p className="text-lg mb-6">
            Our healthcare experts are available to help you select the right tests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Our Experts
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Phone className="mr-2 h-5 w-5" />
              Call: 9693631158
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tests;
