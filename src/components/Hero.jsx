import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Plan Your Perfect Event</span>
            <span className="block text-blue-600">All in One Place</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Connect with the best venues, vendors, and services to create unforgettable events. 
            Your vision, our network – seamlessly brought together.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Start Planning
              <ArrowRight className="ml-2 -mr-1 inline-block h-4 w-4" />
            </button>
            <button className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Browse Venues
            </button>
          </div>

          {/* Feature Highlights */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:mt-20">
            <div className="flex flex-col items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Premium Venues</h3>
              <p className="mt-2 text-sm text-gray-600">Curated selection of stunning locations</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Trusted Vendors</h3>
              <p className="mt-2 text-sm text-gray-600">Top-rated service providers</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Easy Planning</h3>
              <p className="mt-2 text-sm text-gray-600">Streamlined booking process</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

