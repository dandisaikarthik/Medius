import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function RatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Today's mortgage rates
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Check personalized rates in minutes
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Check your rate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x">
                {[
                  { term: '30-year fixed', rate: '6.75%' },
                  { term: '20-year fixed', rate: '6.50%' },
                  { term: '15-year fixed', rate: '6.00%' },
                  { term: '7/1 ARM', rate: '6.25%' },
                ].map((product, index) => (
                  <div key={index} className="p-8 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.term}
                    </h3>
                    <p className="mt-4 text-4xl font-bold text-emerald-600">
                      {product.rate}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">APR</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}