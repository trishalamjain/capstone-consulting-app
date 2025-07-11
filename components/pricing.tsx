"use client"

import { Button } from "@/components/ui/button"
import { Check, Clock, TrendingUp, MessageCircle } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="relative py-16 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tight">
              CHOOSE YOUR
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                SUCCESS PATH
              </span>
            </h2>
            <p className="text-med text-black font-medium max-w-3xl mx-[20%] leading-tight">
              Every transformative journey starts with the right guidance. Choose the mentorship level that matches your
              ambition.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* BASIC PACKAGE */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-black  p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">SPRINT</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-black text-blue-600 mb-1">$500+</div>
                    <p className="text-gray-600 font-medium">1-month intensive</p>
                  </div>
                  <p className="font-light text-black leading-tight text-sm">
                    Perfect for focused summer projects or quick-turnaround initiatives with clear scope and timeline.
                  </p>
                </div>

                <div className="space-y-1 mb-4">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">4 weekly strategy sessions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Project roadmap & milestones</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Resource library access</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Email support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PREMIUM PACKAGE - FEATURED */}
            <div className="group relative lg:scale-110 lg:z-10">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div>

              <div className="relative bg-white border-2 border-black  p-8 transform group-hover:scale-105 transition-all duration-300">
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-bold px-2 py-2 font-bold text-xs rounded-full border-2 border-black">
                    MOST POPULAR
                  </div>
                </div>

                <div className="text-center mb-4 pt-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-black mb-3">
                    TRANSFORM
                  </h3>
                  <div className="mb-4">
                    <div className="text-4xl font-black text-purple-600 mb-1">$2000+</div>
                    <p className="text-gray-600 font-medium">3-6 month journey</p>
                  </div>
                  <p className="text-black font-light leading-tight text-xs">
                    The complete transformation experience for ambitious students ready to build something
                    extraordinary.
                  </p>
                </div>

                <div className="space-y-1 mb-6">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">12+ weekly mentorship calls</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">Network introductions</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">College essay integration</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="font-medium text-sm">Launch & PR strategy</span>
                  </div>
                </div>
                <Button className="w-full mt-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                <a href="https://cal.com/trishala/crato-free-consultation" target="_blank" rel="noopener noreferrer">
                Schedule a Consultation
  </a>
                </Button>
              </div>
              
            </div>

            {/* CUSTOM PACKAGE */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-300"></div>
              <div className="relative bg-white border-2 border-black  p-6 transform group-hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 border-2 border-black rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">BESPOKE</h3>
                  <div className="mb-4">
                    <div className="text-4xl font-black text-blue-600 mb-1">$-$$$</div>
                    <p className="text-gray-600 font-medium">Tailored to you</p>
                  </div>
                  <p className="text-black font-light leading-tight text-sm">
                    Every student is unique. Let&apos;s design a completely custom mentorship experience for your
                    specific goals.
                  </p>
                </div>

                <div className="space-y-1 mb-3">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Personalized timeline</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Flexible meeting schedule</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium">Custom deliverables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
