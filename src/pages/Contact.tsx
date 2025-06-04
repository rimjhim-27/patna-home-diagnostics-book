
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Clock, MapPin, Shield } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch for appointments, queries, or support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>Quick Contact</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">9693631158</p>
                  <p className="text-sm text-gray-500">Available 7 days a week</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">harshranjan0612@gmail.com</p>
                  <p className="text-sm text-gray-500">For general inquiries and support</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Service Area</h4>
                  <p className="text-gray-600">Patna, Bihar</p>
                  <p className="text-sm text-gray-500">Home collection only</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Service Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold">8:00 AM - 4:00 PM</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <Calendar className="inline h-4 w-4 mr-1" />
                    Emergency sample collection available on request
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span>Privacy & Security</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• All patient data is encrypted and secure</li>
                  <li>• HIPAA compliant data handling</li>
                  <li>• Confidential report delivery</li>
                  <li>• Secure online payment processing</li>
                  <li>• No data sharing with third parties</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <p className="text-gray-600">
                  Have questions about our services? Send us a message and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="What is this regarding?" required />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..."
                      className="min-h-[120px]"
                      required 
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" id="privacy" className="mt-1" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      I agree to the privacy policy and consent to the processing of my personal data for the purpose of responding to my inquiry. *
                    </label>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How do I book a home collection?</h4>
                    <p className="text-gray-600 text-sm">
                      You can book online through our website, call us at 9693631158, or send us a WhatsApp message. 
                      Our team will confirm your appointment and visit your address at the scheduled time.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How quickly will I get my reports?</h4>
                    <p className="text-gray-600 text-sm">
                      Most routine tests are completed within 24-48 hours. Specialized tests may take 48-72 hours. 
                      You'll receive your reports via email and SMS notification when they're ready.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Is online payment secure?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we use industry-standard encryption and secure payment gateways. Your financial information 
                      is never stored on our servers and all transactions are processed through certified payment processors.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Do you provide consultation with reports?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, our health packages include doctor consultation. For individual tests, consultation can be 
                      arranged for an additional fee. We also provide basic interpretation notes with all reports.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Sample Collection</h3>
          <p className="text-red-700 mb-4">
            For urgent sample collection requirements outside normal hours
          </p>
          <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
            <Phone className="mr-2 h-4 w-4" />
            Emergency Contact: 9693631158
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
