import { SEO } from '../components/SEO';
import { ArrowRight, Trees, Users, Heart, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <>
      <SEO path="/" />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Protecting Alaska's Wild Heart
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Preserving pristine forests and wilderness for future generations through conservation, protection, and community stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/donate" 
              className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Support Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/programs" 
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/30"
            >
              Our Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-forest-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-forest-700 mb-2">500K+</div>
              <div className="text-gray-600">Acres Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-700 mb-2">25+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-700 mb-2">15K+</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-forest-700 mb-2">98%</div>
              <div className="text-gray-600">To Conservation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">
              The Alaska Foundation is dedicated to the permanent protection and stewardship of Alaska's magnificent forests, 
              ensuring these irreplaceable ecosystems remain wild and intact for generations to come.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trees className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Conservation</h3>
              <p className="text-gray-600">Protecting critical forest ecosystems and wildlife habitats</p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Preservation</h3>
              <p className="text-gray-600">Securing land through acquisition and conservation easements</p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">Engaging Alaskans in conservation and education</p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Stewardship</h3>
              <p className="text-gray-600">Long-term care and monitoring of protected lands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2071)'
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Tongass Forest Preservation</h3>
                <p className="text-gray-600 mb-4">
                  Protecting America's largest temperate rainforest through strategic land acquisition and conservation partnerships.
                </p>
                <Link to="/programs#tongass" className="text-forest-700 font-semibold inline-flex items-center hover:text-forest-800">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2089)'
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Chugach Forest Preservation</h3>
                <p className="text-gray-600 mb-4">
                  Safeguarding coastal forests and mountain wilderness areas vital to Alaska's ecosystem and heritage.
                </p>
                <Link to="/programs#chugach" className="text-forest-700 font-semibold inline-flex items-center hover:text-forest-800">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div 
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2074)'
                }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">Land Donation Program</h3>
                <p className="text-gray-600 mb-4">
                  Supporting landowners who wish to permanently protect their Alaska property for conservation.
                </p>
                <Link to="/programs#land-donation" className="text-forest-700 font-semibold inline-flex items-center hover:text-forest-800">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-forest-700 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Protecting Alaska's Forests</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your support helps us preserve Alaska's pristine wilderness for future generations. 
            Every contribution makes a lasting impact.
          </p>
          <Link 
            to="/donate" 
            className="bg-white text-forest-700 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
          >
            Make a Difference Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
