
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Phone, User, Shield, CreditCard } from "lucide-react";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const selectedTest = location.state?.selectedTest;
  const selectedPackage = location.state?.selectedPackage;
  
  const [bookingData, setBookingData] = useState({
    patientName: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    city: "Patna",
    pincode: "",
    preferredDate: "",
    preferredTime: "",
    testType: selectedTest ? "individual" : selectedPackage ? "package" : "",
    selectedItem: selectedTest?.name || selectedPackage?.name || "",
    specialInstructions: "",
    paymentMethod: "online"
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [totalAmount, setTotalAmount] = useState(
    selectedTest ? parseInt(selectedTest.price.slice(1)) : 
    selectedPackage ? parseInt(selectedPackage.price.slice(1)) : 0
  );

  const timeSlots = [
    "7:00 AM - 9:00 AM",
    "9:00 AM - 11:00 AM", 
    "11:00 AM - 1:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM"
  ];

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    alert("Redirecting to secure payment gateway...\n\nNote: This is a demo. In production, this would integrate with a real payment processor like Razorpay or Stripe.");
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="patientName">Full Name *</Label>
            <Input
              id="patientName"
              value={bookingData.patientName}
              onChange={(e) => handleInputChange("patientName", e.target.value)}
              placeholder="Enter patient's full name"
              required
            />
          </div>
          <div>
            <Label htmlFor="age">Age *</Label>
            <Input
              id="age"
              type="number"
              value={bookingData.age}
              onChange={(e) => handleInputChange("age", e.target.value)}
              placeholder="Enter age"
              required
            />
          </div>
          <div>
            <Label htmlFor="gender">Gender *</Label>
            <Select onValueChange={(value) => handleInputChange("gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={bookingData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Enter 10-digit mobile number"
              required
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              value={bookingData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter email for reports"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Address Information</h3>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <Label htmlFor="address">Complete Address *</Label>
            <Textarea
              id="address"
              value={bookingData.address}
              onChange={(e) => handleInputChange("address", e.target.value)}
              placeholder="Enter complete address for home collection"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                value={bookingData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                placeholder="Patna"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="pincode">Pincode *</Label>
              <Input
                id="pincode"
                value={bookingData.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                placeholder="Enter 6-digit pincode"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Test Selection & Appointment</h3>
        
        {!selectedTest && !selectedPackage && (
          <div className="mb-6">
            <Label>Test Type *</Label>
            <Select onValueChange={(value) => handleInputChange("testType", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select test type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual Test</SelectItem>
                <SelectItem value="package">Health Package</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}

        {(selectedTest || selectedPackage) && (
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900">Selected {selectedTest ? 'Test' : 'Package'}:</h4>
            <p className="text-blue-800">{selectedTest?.name || selectedPackage?.name}</p>
            <p className="text-blue-600 font-bold text-lg">
              {selectedTest?.price || selectedPackage?.price}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="preferredDate">Preferred Date *</Label>
            <Input
              id="preferredDate"
              type="date"
              value={bookingData.preferredDate}
              onChange={(e) => handleInputChange("preferredDate", e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div>
            <Label htmlFor="preferredTime">Preferred Time Slot *</Label>
            <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent>
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="specialInstructions">Special Instructions (Optional)</Label>
          <Textarea
            id="specialInstructions"
            value={bookingData.specialInstructions}
            onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
            placeholder="Any special requirements or medical conditions to note..."
          />
        </div>
      </div>

      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-800 mb-2">Important Collection Guidelines:</h4>
        <ul className="text-yellow-700 text-sm space-y-1">
          <li>• Fasting tests require 10-12 hours of fasting</li>
          <li>• Please inform if you're taking any medications</li>
          <li>• Ensure someone is available at the collection address</li>
          <li>• Have a valid ID proof ready</li>
        </ul>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment & Confirmation</h3>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-4">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Patient Name:</span>
              <span className="font-medium">{bookingData.patientName}</span>
            </div>
            <div className="flex justify-between">
              <span>Contact:</span>
              <span className="font-medium">{bookingData.phone}</span>
            </div>
            <div className="flex justify-between">
              <span>Collection Date:</span>
              <span className="font-medium">{bookingData.preferredDate}</span>
            </div>
            <div className="flex justify-between">
              <span>Time Slot:</span>
              <span className="font-medium">{bookingData.preferredTime}</span>
            </div>
            <div className="flex justify-between">
              <span>{selectedTest ? 'Test' : 'Package'}:</span>
              <span className="font-medium">{bookingData.selectedItem}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between text-lg font-bold">
                <span>Total Amount:</span>
                <span className="text-blue-600">₹{totalAmount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="h-5 w-5 text-green-600" />
            <h4 className="font-semibold text-green-800">Secure Payment</h4>
          </div>
          <p className="text-green-700 text-sm">
            Your payment is processed through encrypted, secure channels. We accept UPI, 
            credit/debit cards, and net banking.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Payment confirmation via SMS and email</li>
            <li>• Sample collection team will contact you 1 hour before</li>
            <li>• Reports delivered via email within specified time</li>
            <li>• SMS alerts for report availability</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-gray-600">
            Secure online booking with home sample collection
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step}
                </div>
                <span className={`ml-2 ${currentStep >= step ? 'text-blue-600' : 'text-gray-500'}`}>
                  {step === 1 ? 'Patient Info' : step === 2 ? 'Appointment' : 'Payment'}
                </span>
                {step < 3 && <div className="w-8 h-0.5 bg-gray-300 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {currentStep === 1 && <User className="h-5 w-5" />}
              {currentStep === 2 && <Calendar className="h-5 w-5" />}
              {currentStep === 3 && <CreditCard className="h-5 w-5" />}
              <span>
                Step {currentStep}: {currentStep === 1 ? 'Patient Information' : 
                                  currentStep === 2 ? 'Appointment Details' : 'Payment & Confirmation'}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < 3 ? (
                <Button 
                  onClick={handleNext}
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={
                    (currentStep === 1 && (!bookingData.patientName || !bookingData.phone || !bookingData.address)) ||
                    (currentStep === 2 && (!bookingData.preferredDate || !bookingData.preferredTime))
                  }
                >
                  Next
                </Button>
              ) : (
                <Button 
                  onClick={handlePayment}
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!bookingData.patientName || !bookingData.phone}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pay ₹{totalAmount} & Confirm
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Need help with booking?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Call: 9693631158
            </Button>
            <Button variant="outline">
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
