'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function StartPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: '',
    propertyType: '',
    location: '',
    price: '',
    creditScore: '',
    email: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-24 pb-16 sm:pt-32">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i <= step ? 'bg-red-600' : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600">
              Step {step} of 3
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Let's get started"}
                {step === 2 && 'Property Details'}
                {step === 3 && 'Almost there!'}
              </CardTitle>
              <CardDescription>
                {step === 1 && 'Tell us about your goals'}
                {step === 2 && 'Tell us about the property'}
                {step === 3 && 'Final details needed'}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>What's your goal?</Label>
                    <Select
                      value={formData.purpose}
                      onValueChange={(value) =>
                        handleInputChange('purpose', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your goal" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Buy a home</SelectItem>
                        <SelectItem value="refinance">
                          Refinance existing mortgage
                        </SelectItem>
                        <SelectItem value="heloc">Get a HELOC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Property Type</Label>
                    <Select
                      value={formData.propertyType}
                      onValueChange={(value) =>
                        handleInputChange('propertyType', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="single">Single Family</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="multi">Multi Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Property Location</Label>
                    <Input
                      placeholder="Enter ZIP code"
                      value={formData.location}
                      onChange={(e) =>
                        handleInputChange('location', e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Estimated Property Value</Label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={formData.price}
                      onChange={(e) =>
                        handleInputChange('price', e.target.value)
                      }
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Estimated Credit Score</Label>
                    <Select
                      value={formData.creditScore}
                      onValueChange={(value) =>
                        handleInputChange('creditScore', value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select credit score range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">740+</SelectItem>
                        <SelectItem value="good">700-739</SelectItem>
                        <SelectItem value="fair">660-699</SelectItem>
                        <SelectItem value="poor">Below 660</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Email Address</Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange('email', e.target.value)
                      }
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex justify-between">
                {step > 1 && (
                  <Button variant="outline" onClick={prevStep}>
                    Back
                  </Button>
                )}
                <Button
                  className={`bg-red-600 hover:bg-red-700 text-white ${
                    step === 1 ? 'w-full' : ''
                  }`}
                  onClick={step === 3 ? () => {} : nextStep}
                >
                  {step === 3 ? 'Get Pre-approved' : 'Continue'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}