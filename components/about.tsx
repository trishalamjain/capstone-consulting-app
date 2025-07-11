"use client"

import { Star, Briefcase, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-white">

      <div className=" mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-6 items-start px-24"> {/* Reduced gap from 12 to 6 */}
            {/* Image Column */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl transform rotate-3 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative">
                  <Image
                    src="/headshot.jpeg"
                    alt="Trishala Jain Headshot"
                    width={200} // Default width
                    height={200} // Default height
                    className="w-48 h-48 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover border-2 border-black shadow-lg transform group-hover:scale-105 transition-all duration-300 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Title and Description */}
            <div className="lg:col-span-3 -mt-4"> {/* Decreased space with -mt-4 */}
              <div className="text-left">
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
                  HI, I&apos;M 
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    TRISHALA!
                  </span>
                </h2>
                <p className="text-med text-black font-med max-w-3xl leading-tight">
                  I&apos;m dedicated to empowering students and families on their journey to top universities through
                  transformative capstone projects.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid lg:grid-cols-3 gap-6 mt-12 px-12">
            {/* UC Berkeley Card */}
            <div className="group relative flex flex-col h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div> {/* Adjusted inset */}
              <div className="relative bg-white border-2 border-black rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 border-2 border-black rounded-xs flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">UC Berkeley MET Alum</h3>
                    <Badge className="bg-blue-200 text-blue-800 border border-blue-300 font-bold mb-2">
                      EDUCATION
                    </Badge>
                  </div>
                </div>
                <p className="text-black font-light text-sm leading-tight mt-auto align-center">
                  Proud graduate of UC Berkeley&apos;s prestigious MET Program, where I served as{" "}
                  <span className="font-bold text-blue-600">Student Board President (2023-2024)</span> and VP of
                  Admissions & Marketing (2022-2023).
                </p>
              </div>
            </div>

            {/* Google Card */}
            <div className="group relative flex flex-col h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-200 to-purple-300 rounded-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"></div> {/* Adjusted inset */}
              <div className="relative bg-white border-2 border-black rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">Associate PM at Google</h3>
                    <Badge className="bg-purple-200 text-purple-800 border border-purple-300 font-bold mb-2">
                      CAREER
                    </Badge>
                  </div>
                </div>
                <p className="text-black text-sm font-light leading-tight align-middle">
                  Bringing real-world tech leadership and{" "}
                  <span className="font-bold text-purple-600">product development insights</span> directly to my
                  mentorship approach.
                </p>
              </div>
            </div>

            {/* Startup Card */}
            <div className="group relative flex flex-col h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-200 to-green-300 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"></div> {/* Adjusted inset */}
              <div className="relative bg-white border-2 border-black rounded-xl p-6 transform group-hover:scale-105 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 border-2 border-black flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-gray-900 mb-2 leading-tight">AI Startup Co-Founder</h3>
                    <Badge className="bg-green-200 text-green-800 border border-green-300 font-bold mb-2">
                      ENTREPRENEURSHIP
                    </Badge>
                  </div>
                </div>
                <p className="text-black text-sm font-light leading-tight align-middle">
                  Built an AI-first enterprise L&D platform backed by{" "}
                  <span className="font-bold text-green-600">Mayfield Fund & Unusual Ventures</span>. I&apos;ve
                  taken ventures from concept to funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
