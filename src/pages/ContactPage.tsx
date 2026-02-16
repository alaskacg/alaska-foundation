import { SEO } from '../components/SEO';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We will contact you soon.\n\nNote: This is a demo form. Form submission functionality will be added when the backend is implemented.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with The Alaska Foundation. Contact us about conservation programs, land donations, volunteer opportunities, or general inquiries."
        path="/contact"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with questions or to learn more about our work.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 text-lg mb-8">
                Whether you're interested in supporting our conservation efforts, learning about land donation, 
                volunteering, or simply want to know more about our work, we're here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-forest-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      The Alaska Foundation<br />
                      123 Forest Avenue<br />
                      Juneau, AK 99801
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:info@alaskafoundation.org" className="text-forest-700 hover:text-forest-800">
                      info@alaskafoundation.org
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-forest-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6 text-forest-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+19075551234" className="text-forest-700 hover:text-forest-800">
                      (907) 555-1234
                    </a>
                    <p className="text-gray-600 text-sm mt-1">
                      Monday - Friday, 9am - 5pm AKST
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-forest-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                    placeholder="(907) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation Information</option>
                    <option value="land-donation">Land Donation</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="programs">Conservation Programs</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700 text-white py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">How can I donate land?</h3>
              <p className="text-gray-600">
                We work with landowners to facilitate land donations and conservation easements. 
                Contact our Land Donation Program coordinator at landdonation@alaskafoundation.org 
                or call (907) 555-1235 to discuss your property and conservation goals.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">Do you offer volunteer opportunities?</h3>
              <p className="text-gray-600">
                Yes! We have various volunteer opportunities including trail maintenance, habitat monitoring, 
                educational events, and office support. Email volunteer@alaskafoundation.org to learn more.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">Can I visit protected lands?</h3>
              <p className="text-gray-600">
                Many of our protected areas are open for low-impact recreation. Some properties have restricted 
                access to protect sensitive habitats. Contact us to learn about visiting specific conservation areas.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow">
              <h3 className="text-xl font-semibold mb-2">How is my donation used?</h3>
              <p className="text-gray-600">
                98% of donations go directly to conservation programs including land acquisition, habitat restoration, 
                and stewardship. Only 2% supports essential administrative costs. We provide detailed annual reports 
                to all donors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
