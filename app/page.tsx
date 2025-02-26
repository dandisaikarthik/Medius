import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-red-900">
      <div className="relative">
        {/* Hero Section */}
        <div className="pt-24 pb-16 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-red-200 sm:text-6xl">
                Mortgages
                <br />
                made simple
              </h1>
              <p className="mt-6 text-lg leading-8 text-red-100">
                Get pre-approved in minutes and find your dream home with confidence
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/start">
                  <Button 
                    size="lg"
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Start my approval
                  </Button>
                </Link>
                <div className="text-sm text-red-200 mt-2">
                  3 min | No credit impact
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="mt-16 flow-root sm:mt-24">
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Mortgage App Interface"
                  width={800}
                  height={600}
                  className="mx-auto rounded-xl shadow-xl ring-1 ring-gray-400/10"
                />
                <div className="absolute right-0 top-0 -mt-16 p-6 bg-white rounded-lg shadow-lg transform translate-x-1/3">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-5 w-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.934l-6.18 3.254 1.18-6.875L.083 7.651l6.911-1.004L10 .4l3.006 6.247 6.911 1.004-4.917 4.662 1.18 6.875L10 15.934z"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900">
                      4.6 Stars | 3177 Google reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  title: 'Fast & Easy',
                  description: 'Get pre-approved in as little as 3 minutes',
                },
                {
                  title: 'Save Money',
                  description: 'No commission, no origination fees',
                },
                {
                  title: 'Expert Support',
                  description: '24/7 support from our mortgage experts',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-red-800 p-8 rounded-2xl"
                >
                  <h3 className="text-xl font-semibold text-red-200">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-red-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}