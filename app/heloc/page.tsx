import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet, BadgePercent, LineChart } from 'lucide-react';

export default function HelocPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Access your home equity
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get a flexible line of credit backed by your home's value
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Check your rate <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  icon: Wallet,
                  title: 'Flexible access',
                  description: 'Draw funds as needed for up to 10 years',
                },
                {
                  icon: BadgePercent,
                  title: 'Competitive rates',
                  description: 'Lower rates than credit cards or personal loans',
                },
                {
                  icon: LineChart,
                  title: 'Only pay for what you use',
                  description: 'Interest only on the amount you borrow',
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}