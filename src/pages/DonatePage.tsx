import { SEO } from '../components/SEO';
import { Heart, Shield, Users, Leaf, DollarSign, CreditCard } from 'lucide-react';

export function DonatePage() {
  return (
    <>
      <SEO 
        title="Donate"
        description="Support The Alaska Foundation's mission to protect Alaska's forests. Your donation helps preserve pristine wilderness and wildlife habitat for future generations."
        keywords="donate Alaska conservation, support forest preservation, Alaska charitable giving, nonprofit donation, conservation fundraising"
        path="/donate"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Support Our Mission</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Your generosity helps protect Alaska's forests for future generations
          </p>
        </div>
      </section>

      {/* Impact Message */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Every Gift Makes a Difference</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            When you donate to The Alaska Foundation, you're investing in the permanent protection of 
            Alaska's magnificent forests and wilderness. Your support enables us to acquire critical habitat, 
            establish conservation easements, and ensure these irreplaceable ecosystems remain wild forever.
          </p>
          <p className="text-lg text-gray-600">
            We are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to 
            the fullest extent allowed by law.
          </p>
        </div>
      </section>

      {/* Donation Levels */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Ways to Give</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-forest-600">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Forest Guardian</h3>
              <p className="text-3xl font-bold text-forest-700 text-center mb-4">$50-$249</p>
              <p className="text-gray-600 text-center mb-6">
                Protects approximately 2 acres of forest habitat
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Quarterly newsletter</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Conservation updates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Digital certificate</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-forest-700 transform md:scale-105">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Wilderness Protector</h3>
              <p className="text-3xl font-bold text-forest-700 text-center mb-4">$250-$999</p>
              <p className="text-gray-600 text-center mb-6">
                Protects approximately 10 acres of pristine wilderness
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All Guardian benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Annual impact report</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Invitation to events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Name recognition</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-forest-800">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">Legacy Circle</h3>
              <p className="text-3xl font-bold text-forest-700 text-center mb-4">$1,000+</p>
              <p className="text-gray-600 text-center mb-6">
                Protects 40+ acres and creates lasting impact
              </p>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All Protector benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Private site tours</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Board updates</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Legacy recognition</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Donation Form Placeholder */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Make Your Gift Today</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Donation Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    $50
                  </button>
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    $100
                  </button>
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    $250
                  </button>
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    $500
                  </button>
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    $1,000
                  </button>
                  <button className="border-2 border-forest-600 text-forest-700 hover:bg-forest-50 py-2 px-4 rounded-lg font-semibold transition-colors">
                    Custom
                  </button>
                </div>
                <input 
                  type="number" 
                  placeholder="Enter custom amount"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-forest-600 focus:border-transparent"
                />
              </div>

              <div>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 h-4 w-4 text-forest-600 focus:ring-forest-600 border-gray-300 rounded" />
                  <span className="text-sm text-gray-700">Make this a monthly recurring donation</span>
                </label>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CreditCard className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 mb-1">Payment Integration Coming Soon</p>
                    <p className="text-sm text-blue-800">
                      We are currently setting up secure payment processing. For immediate donations, 
                      please contact us directly or send a check to our mailing address.
                    </p>
                  </div>
                </div>
              </div>

              <button 
                disabled
                className="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed"
              >
                Payment Processing Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Other Ways to Support</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <DollarSign className="h-12 w-12 text-forest-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Corporate Matching</h3>
              <p className="text-gray-600 mb-4">
                Many employers will match your donation, doubling your impact. Check if your company 
                participates in matching gift programs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Users className="h-12 w-12 text-forest-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Planned Giving</h3>
              <p className="text-gray-600 mb-4">
                Include The Alaska Foundation in your estate plans through bequests, trusts, or 
                beneficiary designations to create a lasting legacy.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <Leaf className="h-12 w-12 text-forest-700 mb-4" />
              <h3 className="text-xl font-bold mb-3">Land Donation</h3>
              <p className="text-gray-600 mb-4">
                Donate your Alaska property or conservation easement for permanent protection 
                and potential tax benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Info */}
      <section className="py-20 bg-forest-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Your Donation is Tax-Deductible</h2>
          <p className="text-lg mb-4">
            The Alaska Foundation is a registered 501(c)(3) nonprofit organization. 
            Tax ID: 12-3456789
          </p>
          <p className="text-forest-100">
            All donations are tax-deductible to the fullest extent allowed by law. 
            You will receive a receipt for your records.
          </p>
        </div>
      </section>
    </>
  );
}
