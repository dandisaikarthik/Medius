'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-red-600">
              Medius
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex space-x-8">
                <Link href="/about-us" className="text-gray-700 hover:text-red-600">
                  About Us
                </Link>
                <Link href="/mortgage-calculator" className="text-gray-700 hover:text-red-600">
                  Calculator
                </Link>
                <Link href="/buy" className="text-gray-700 hover:text-red-600">
                  Buy
                </Link>
                <Link href="/refinance" className="text-gray-700 hover:text-red-600">
                  Refinance
                </Link>
                <Link href="/heloc" className="text-gray-700 hover:text-red-600">
                  HELOC
                </Link>
                <Link href="/rates" className="text-gray-700 hover:text-red-600">
                  Rates
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
            <Link href="/start">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}