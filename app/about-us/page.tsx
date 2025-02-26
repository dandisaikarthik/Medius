import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Making homeownership simple
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We're on a mission to make homeownership simpler, faster, and more accessible for everyone.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Our Mission
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  We believe the mortgage industry is broken. Complex processes, hidden fees, and outdated technology make getting a mortgage harder than it needs to be. We're here to fix that.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
                  alt="Modern office space"
                  width={500}
                  height={300}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mt-32">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
              Our Values
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                {
                  title: 'Transparency',
                  description: 'No hidden fees, no surprises. Just clear, upfront pricing.',
                },
                {
                  title: 'Innovation',
                  description: 'Using technology to make mortgages faster and easier.',
                },
                {
                  title: 'Customer First',
                  description: 'Every decision we make starts with our customers.',
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="relative bg-white p-8 rounded-2xl shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-32">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {[
                { number: '$100B+', label: 'Loans Funded' },
                { number: '100k+', label: 'Happy Homeowners' },
                { number: '4.6/5', label: 'Customer Rating' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-emerald-600">
                    {stat.number}
                  </div>
                  <div className="mt-2 text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}