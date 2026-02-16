import { SEO } from '../components/SEO';
import { Users, Target, Award, Leaf } from 'lucide-react';

export function AboutPage() {
  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about The Alaska Foundation's mission to preserve Alaska's pristine forests and wilderness through conservation, land protection, and community engagement."
        path="/about"
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=2076)',
            filter: 'brightness(0.5)'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">About The Alaska Foundation</h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Dedicated stewards of Alaska's wilderness since 1999
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-forest-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The Alaska Foundation works to permanently protect and steward Alaska's magnificent forests and wild lands. 
                Through strategic conservation, community partnerships, and sustainable land management, we ensure these 
                irreplaceable ecosystems remain wild and intact for future generations.
              </p>
            </div>
            <div>
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-forest-700" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We envision an Alaska where vast, interconnected forests and wilderness areas remain forever wild—
                serving as refuges for wildlife, sources of clean water and air, and places of solace and inspiration 
                for all Alaskans and visitors who cherish our state's natural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our History</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              Founded in 1999 by a coalition of conservationists, scientists, and Alaskan residents, The Alaska Foundation 
              emerged from a deep commitment to protecting the state's unique and threatened forest ecosystems.
            </p>
            <p>
              Over the past 25 years, we have grown from a small grassroots organization to a leading conservation force 
              in Alaska, protecting over 500,000 acres of critical forest habitat through land acquisition, conservation 
              easements, and strategic partnerships with indigenous communities, government agencies, and private landowners.
            </p>
            <p>
              Our work has focused primarily on the Tongass National Forest—America's largest temperate rainforest—and 
              the Chugach National Forest, both of which face ongoing threats from industrial development, climate change, 
              and habitat fragmentation. Through careful stewardship and community engagement, we continue to expand 
              protections for these irreplaceable wild places.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We operate with transparency, accountability, and the highest ethical standards in all our conservation work.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We build strong partnerships with communities, landowners, and organizations to achieve lasting conservation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We prioritize long-term ecological health and resilience in all our preservation and stewardship efforts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-forest-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-forest-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Impact</h3>
              <p className="text-gray-600">
                We focus on strategic, science-based conservation that delivers measurable results for Alaska's wilderness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-forest-50">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Led by experienced conservation professionals, scientists, and community advocates dedicated to protecting Alaska's natural heritage.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-forest-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">Dr. Sarah Mitchell</h3>
              <p className="text-forest-700 mb-3">Executive Director</p>
              <p className="text-gray-600 text-sm">
                25 years of experience in forest ecology and conservation policy
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-forest-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">James Kawagley</h3>
              <p className="text-forest-700 mb-3">Conservation Director</p>
              <p className="text-gray-600 text-sm">
                Indigenous knowledge expert and land protection specialist
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <div className="w-32 h-32 bg-forest-200 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-1">Emily Chen</h3>
              <p className="text-forest-700 mb-3">Development Director</p>
              <p className="text-gray-600 text-sm">
                Fundraising and community engagement professional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conservation Goals */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Conservation Goals</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-forest-600 pl-6">
              <h3 className="text-2xl font-semibold mb-2">Protect 1 Million Acres by 2030</h3>
              <p className="text-gray-600 text-lg">
                Expand our conservation footprint to over one million acres of protected forest and wilderness areas 
                through strategic acquisitions and partnerships.
              </p>
            </div>
            <div className="border-l-4 border-forest-600 pl-6">
              <h3 className="text-2xl font-semibold mb-2">Establish Wildlife Corridors</h3>
              <p className="text-gray-600 text-lg">
                Create connected networks of protected lands that allow wildlife to move freely and maintain 
                genetic diversity across Alaska's landscape.
              </p>
            </div>
            <div className="border-l-4 border-forest-600 pl-6">
              <h3 className="text-2xl font-semibold mb-2">Engage 50,000 Alaskans</h3>
              <p className="text-gray-600 text-lg">
                Build a movement of conservation supporters through education, volunteer programs, and 
                community-based stewardship initiatives.
              </p>
            </div>
            <div className="border-l-4 border-forest-600 pl-6">
              <h3 className="text-2xl font-semibold mb-2">Climate Resilience</h3>
              <p className="text-gray-600 text-lg">
                Protect forests that serve as critical carbon sinks and help buffer Alaska's ecosystems 
                against the impacts of climate change.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
