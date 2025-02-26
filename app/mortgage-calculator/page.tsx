'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [propertyTax, setPropertyTax] = useState(265);
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    calculateMortgage();
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax]);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyMortgage =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyTax = propertyTax;
    const totalMonthlyPayment = monthlyMortgage + monthlyTax;

    setMonthlyPayment(Math.round(totalMonthlyPayment));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Mortgage Calculator
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Estimate your monthly mortgage payments
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Calculator Inputs */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>
                  Adjust the values to calculate your estimated monthly payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Home Price: ${homePrice.toLocaleString()}</Label>
                  <Slider
                    value={[homePrice]}
                    onValueChange={(value) => setHomePrice(value[0])}
                    max={1000000}
                    step={1000}
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    Down Payment: ${downPayment.toLocaleString()} (
                    {Math.round((downPayment / homePrice) * 100)}%)
                  </Label>
                  <Slider
                    value={[downPayment]}
                    onValueChange={(value) => setDownPayment(value[0])}
                    max={homePrice}
                    step={1000}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Loan Term: {loanTerm} years</Label>
                  <Slider
                    value={[loanTerm]}
                    onValueChange={(value) => setLoanTerm(value[0])}
                    max={30}
                    min={15}
                    step={15}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Interest Rate: {interestRate}%</Label>
                  <Slider
                    value={[interestRate]}
                    onValueChange={(value) => setInterestRate(value[0])}
                    max={10}
                    min={2}
                    step={0.1}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Property Tax</Label>
                    <Input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>ZIP Code</Label>
                    <Input
                      type="text"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Enter ZIP code"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Payment</CardTitle>
                <CardDescription>
                  Your estimated monthly mortgage payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-red-600">
                  ${monthlyPayment.toLocaleString()}
                </div>
                <div className="mt-8 space-y-4">
                  <div className="flex justify-between">
                    <span>Principal & Interest</span>
                    <span>
                      $
                      {Math.round(
                        monthlyPayment - propertyTax
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Tax</span>
                    <span>${propertyTax}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-semibold">
                      <span>Total Monthly Payment</span>
                      <span>${monthlyPayment.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}