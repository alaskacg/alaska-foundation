import { SEO } from '../components/SEO';
import { Trees, Mountain, HandHeart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProgramsPage() {
  return (
    <>
      <SEO 
        title="Conservation Programs"
        description="Explore The Alaska Foundation's conservation programs including Tongass Forest Preservation, Chugach Forest Preservation, and Land Donation Program to protect Alaska's wilderness."
        keywords="Tongass forest protection, Chugach conservation, Alaska land donation, forest preservation programs, Alaska conservation initiatives"
        path="/programs"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1518558461921-34a0f1845f7a?q=80&w=2070)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Programs</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Strategic conservation initiatives protecting Alaska's forest ecosystems
          </p>
        </div>
      </section>

      {/* Tongass Program */}
      <section id="tongass" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Trees className="h-8 w-8 text-forest-700" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Tongass Forest Preservation</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                The Tongass National Forest in Southeast Alaska is America's largest temperate rainforest, 
                encompassing 16.7 million acres of pristine wilderness. This ancient ecosystem supports 
                incredible biodiversity, stores massive amounts of carbon, and provides critical habitat 
                for salmon, bears, eagles, and countless other species.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our Tongass program focuses on protecting old-growth forest stands, maintaining intact 
                watershed systems, and working with indigenous communities to preserve culturally 
                significant areas. Through strategic land acquisitions and conservation easements, 
                we've protected over 250,000 acres from logging and development.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Protection of old-growth forest corridors</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Salmon stream habitat conservation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Partnership with Tlingit and Haida communities</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Climate change mitigation through carbon storage</p>
                </div>
              </div>
              <Link 
                to="/donate" 
                className="inline-flex items-center text-forest-700 font-semibold hover:text-forest-800"
              >
                Support Tongass Conservation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div 
              className="h-[500px] rounded-lg bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Chugach Program */}
      <section id="chugach" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div 
              className="h-[500px] rounded-lg bg-cover bg-center shadow-xl order-2 md:order-1"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2089)'
              }}
            />
            <div className="order-1 md:order-2">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Mountain className="h-8 w-8 text-forest-700" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Chugach Forest Preservation</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                The Chugach National Forest spans 5.4 million acres of coastal forests, alpine tundra, 
                and rugged mountains in Southcentral Alaska. As the second-largest national forest in 
                the United States, it surrounds Prince William Sound and provides essential habitat for 
                marine mammals, seabirds, and terrestrial wildlife.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our Chugach program emphasizes protecting critical wildlife corridors, maintaining healthy 
                coastal forest ecosystems, and preserving mountain wilderness areas. We work closely with 
                local communities to balance conservation with sustainable recreation and traditional uses.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Coastal forest and wetland protection</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Wildlife corridor establishment and monitoring</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Alpine and subalpine ecosystem conservation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <p className="text-gray-700">Recreational access planning and management</p>
                </div>
              </div>
              <Link 
                to="/donate" 
                className="inline-flex items-center text-forest-700 font-semibold hover:text-forest-800"
              >
                Support Chugach Conservation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Land Donation Program */}
      <section id="land-donation" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HandHeart className="h-8 w-8 text-forest-700" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Land Donation Program</h2>
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Many Alaskan landowners share our commitment to conservation and wish to ensure their 
                property remains protected in perpetuity. Our Land Donation Program provides a way for 
                landowners to create a lasting conservation legacy while potentially receiving significant 
                tax benefits.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Whether you own forested property, wetlands, wildlife habitat, or scenic lands, donating 
                your land or a conservation easement to The Alaska Foundation ensures it will be protected 
                forever. We work closely with landowners, legal experts, and appraisers to make the donation 
                process smooth and beneficial for all parties.
              </p>

              <div className="bg-forest-50 border-l-4 border-forest-600 p-6 mb-6">
                <h3 className="font-semibold text-lg mb-3">Benefits of Land Donation</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Federal and state income tax deductions</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Estate tax benefits for heirs</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Permanent protection of your land</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Professional land stewardship</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-forest-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Legacy recognition opportunities</p>
                  </div>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="inline-flex items-center bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn About Donating Land
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div 
              className="h-[500px] rounded-lg bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-forest-700 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Conservation Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500K+</div>
              <div className="text-forest-100">Acres Protected</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">150+</div>
              <div className="text-forest-100">Conservation Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">85</div>
              <div className="text-forest-100">Land Donations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2.5M</div>
              <div className="text-forest-100">Tons of CO₂ Stored</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
