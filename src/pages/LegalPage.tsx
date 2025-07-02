
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Shield, FileText, Clock, Database, Truck, Copyright } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Legal Information
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important policies, terms, and compliance information for PTV Global Services
            </p>
            <div className="mt-6 p-4 bg-white rounded-lg shadow-sm border border-blue-100">
              <p className="text-sm text-gray-500">Last updated: January 2025</p>
            </div>
          </div>

          {/* Company Details */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                Company Details
              </CardTitle>
              <CardDescription>
                Basic identity and contact information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Information</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><strong>Business Name:</strong> PTV GLOBAL SERVICES</li>
                    <li><strong>Registration:</strong> Nigeria (BN2339097)</li>
                    <li><strong>Location:</strong> Surulere, Lagos, Nigeria</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Contact Information</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li><strong>Phone:</strong> 07025158265</li>
                    <li><strong>Email:</strong> ptvglobalservices@gmail.com</li>
                    <li><strong>Hours:</strong> Mon–Sat, 9am–6pm</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund & Cancellation Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-green-600" />
                Refund & Cancellation Policy
              </CardTitle>
              <CardDescription>
                How clients can cancel bookings and eligibility for refunds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cancellation Timeline</h4>
                  <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-green-800">14+ Days Before Event</span>
                      </div>
                      <p className="text-green-700">Full refund available</p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="font-medium text-yellow-800">7-13 Days Before Event</span>
                      </div>
                      <p className="text-yellow-700">30% cancellation fee applies</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="font-medium text-red-800">Within 7 Days</span>
                      </div>
                      <p className="text-red-700">No refund available</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Non-Refundable Items</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Custom materials and personalized equipment</li>
                    <li>Delivery and transportation costs</li>
                    <li>Setup fees for cancelled events</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Postponements</h4>
                  <p className="text-gray-600">Event postponements must be requested in writing and are subject to equipment availability. Additional fees may apply for rescheduling.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-purple-600" />
                Terms & Conditions
              </CardTitle>
              <CardDescription>
                Conditions for booking and using our services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Payment Terms</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>50% deposit required to secure any booking</li>
                    <li>Full payment due at least 48 hours before the event</li>
                    <li>Late payment may result in service cancellation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Client Responsibilities</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Securing necessary venue permits and permissions</li>
                    <li>Providing accurate event details and requirements</li>
                    <li>Ensuring safe access to setup locations</li>
                    <li>Supervision of rented equipment during events</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Standards</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>We reserve the right to refuse service in cases of misconduct</li>
                    <li>Equipment substitutions may occur based on availability</li>
                    <li>Professional conduct expected from all parties</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Force Majeure & Liability</h4>
                  <p className="text-gray-600 mb-2">
                    PTV Global Services is not liable for delays or cancellations due to uncontrollable circumstances including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Natural disasters, severe weather conditions</li>
                    <li>Government restrictions or policy changes</li>
                    <li>Acts of terrorism or civil unrest</li>
                  </ul>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Equipment Damage Policy</h4>
                  <p className="text-red-700">
                    Clients are fully liable for any damage to rented equipment during the event period. 
                    Replacement costs will be charged at current market rates.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology & Data Use */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Database className="w-6 h-6 text-indigo-600" />
                Technology & Data Protection
              </CardTitle>
              <CardDescription>
                How we collect, use, and protect your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Security</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>All data collection via SSL-encrypted forms</li>
                    <li>Secure server infrastructure with regular backups</li>
                    <li>Access restricted to authorized personnel only</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Compliance Standards</h4>
                  <p className="text-gray-600 mb-2">
                    We fully comply with Nigeria's Data Protection Regulation (NDPR) and maintain:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Transparent data collection practices</li>
                    <li>Clear consent mechanisms for data use</li>
                    <li>Regular privacy policy reviews and updates</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Privacy Guarantee</h4>
                  <p className="text-blue-700">
                    We never sell, share, or distribute client data to third parties. 
                    Your information is used solely for service delivery and communication.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Website Content Protection</h4>
                  <p className="text-gray-600">
                    All website content, images, and materials are protected by copyright law. 
                    Unauthorized reproduction or distribution is strictly prohibited.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery & Setup Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-orange-600" />
                Delivery & Setup Terms
              </CardTitle>
              <CardDescription>
                Rules and conditions for equipment delivery and event setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Standard Services</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Professional setup and teardown included in all packages</li>
                    <li>Equipment delivery within Lagos metropolitan area</li>
                    <li>Standard setup time: 2-4 hours depending on event size</li>
                    <li>Post-event cleanup and equipment collection</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Additional Charges</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="font-medium text-yellow-800">Urgent Dismantling:</span>
                      <span className="text-yellow-700 ml-2">Extra charges apply for same-day teardown requests</span>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="font-medium text-yellow-800">Night Operations:</span>
                      <span className="text-yellow-700 ml-2">Additional fees for setup/teardown after 8 PM</span>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <span className="font-medium text-yellow-800">Outside Lagos:</span>
                      <span className="text-yellow-700 ml-2">Transportation costs calculated based on distance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Site Requirements</h4>
                  <p className="text-gray-600 mb-2">
                    For complex setups, our team may require pre-event site inspections to ensure:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Adequate space and access for equipment installation</li>
                    <li>Proper electrical connections and power supply</li>
                    <li>Ground conditions suitable for tent and stage setup</li>
                    <li>Safety compliance with local regulations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Copyright className="w-6 h-6 text-pink-600" />
                Intellectual Property Rights
              </CardTitle>
              <CardDescription>
                Protection of creative materials and proprietary designs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Creative Content Ownership</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>All event designs, layouts, and visual concepts are copyrighted</li>
                    <li>Custom decorations and branded materials remain our intellectual property</li>
                    <li>Photography and videography of our setups require permission</li>
                  </ul>
                </div>

                <div className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-pink-800 mb-2">Usage Restrictions</h4>
                  <p className="text-pink-700">
                    Reuse, reproduction, or distribution of our designs without written permission is strictly prohibited. 
                    This includes sharing setup photos for commercial purposes by other event planners.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Client Rights</h4>
                  <p className="text-gray-600">
                    Clients may use photos of their events for personal purposes. 
                    Commercial use or resale of our design concepts requires separate licensing agreements.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact for Legal Matters */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Legal Inquiries</CardTitle>
              <CardDescription>
                Questions about these policies or legal matters
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">
                  For questions regarding these terms, policies, or legal compliance matters, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> ptvglobalservices@gmail.com</p>
                  <p><strong>Phone:</strong> 07025158265</p>
                  <p><strong>Business Hours:</strong> Monday to Saturday, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Disclaimer:</strong> This legal page ensures clear communication of policies, builds trust, and complies with local regulations. 
              These terms are subject to periodic review and updates. Continued use of our services constitutes acceptance of any modifications.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
