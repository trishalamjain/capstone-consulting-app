"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lightbulb, Target, Users, Zap, ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Component2() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projectCategories = [
    {
      title: "STEM & ENGINEERING",
      color: "blue",
      projects: [
        {
          title: "AI Research Lab",
          description: "Built machine learning model for early cancer detection, published in peer-reviewed journal",
          highlights: ["Published Research", "Patent Filed", "Lab Partnership"],
        },
        {
          title: "Robotics Startup",
          description: "Founded robotics company creating assistive devices, raised $50K seed funding",
          highlights: ["VC Funding", "Product Launch", "Team of 8"],
        },
      ],
    },
    {
      title: "RESEARCH & ACADEMIA",
      color: "purple",
      projects: [
        {
          title: "Climate Change Study",
          description: "Led 6-month research project on urban heat islands, presented at national conference",
          highlights: ["Conference Speaker", "Data Analysis", "Policy Impact"],
        },
        {
          title: "Psychology Research",
          description: "Conducted original research on teen mental health, collaborated with university professors",
          highlights: ["IRB Approval", "200+ Participants", "Publication Ready"],
        },
      ],
    },
    {
      title: "CIVIC SERVICE",
      color: "blue",
      projects: [
        {
          title: "Education Non-Profit",
          description: "Founded organization providing free tutoring to 500+ underserved students",
          highlights: ["501(c)(3) Status", "50+ Volunteers", "5 School Districts"],
        },
        {
          title: "Policy Advocacy",
          description: "Led campaign for student mental health resources, resulted in $2M district funding",
          highlights: ["Policy Change", "Media Coverage", "Coalition Building"],
        },
      ],
    },
    {
      title: "ARTS & CREATIVE",
      color: "purple",
      projects: [
        {
          title: "Documentary Film",
          description: "Produced award-winning documentary on immigrant stories, screened at 12 festivals",
          highlights: ["Film Festival Awards", "Community Impact", "Distribution Deal"],
        },
        {
          title: "Art Therapy Program",
          description: "Created art therapy workshops for trauma survivors, served 100+ participants",
          highlights: ["Therapeutic Impact", "Grant Funded", "Therapist Partnerships"],
        },
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectCategories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectCategories.length) % projectCategories.length)
  }

  const currentCategory = projectCategories[currentSlide]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="container mx-auto px-4 py-8">
          <nav className="flex items-center justify-between">
            <div className="text-4xl font-black tracking-tighter">
              <span className="text-black">CAP</span>
              <span className="text-blue-600">STONE</span>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#why" className="text-gray-900 font-semibold text-lg hover:text-blue-600">
                Why
              </Link>
              <Link href="#projects" className="text-gray-900 font-semibold text-lg hover:text-blue-600">
                Projects
              </Link>
              <Link href="#pricing" className="text-gray-900 font-semibold text-lg hover:text-blue-600">
                Pricing
              </Link>
              <Button className="bg-black text-white font-bold px-8 py-3 hover:bg-gray-800">Get Started</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-black text-white px-6 py-2 font-bold text-sm mb-8 tracking-wider">
                COLLEGE ADMISSIONS CONSULTING
              </div>

              <h1 className="text-6xl lg:text-8xl font-black leading-none mb-8">
                CREATE
                <br />
                <span className="text-blue-600">STORIES</span>
                <br />
                THAT WIN
              </h1>

              <div className="w-24 h-1 bg-purple-600 mb-8"></div>

              <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-lg">
                Most counselors polish existing achievements. I help students build groundbreaking projects that create
                compelling narratives colleges can't ignore.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-blue-600 text-white font-bold px-10 py-4 text-lg hover:bg-blue-700">
                  Schedule Free Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-black font-bold px-10 py-4 text-lg hover:bg-gray-50 bg-transparent"
                >
                  View Sample Projects
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-black mb-2">$200K+</div>
                    <div className="text-sm font-medium opacity-90">Merit Scholarships</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">MIT</div>
                    <div className="text-sm font-medium opacity-90">Top Acceptances</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black mb-2">100%</div>
                    <div className="text-sm font-medium opacity-90">Success Rate</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">WHY CAPSTONE PROJECTS?</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Capstone projects don't just tell colleges what you've done—they demonstrate your ability to
              <strong className="text-blue-600"> create, lead, and innovate</strong> at the highest level.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">CREATIVITY</h3>
              <p className="text-gray-600 leading-relaxed">
                Demonstrate innovative thinking and problem-solving abilities that set you apart
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-600 mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">INITIATIVE</h3>
              <p className="text-gray-600 leading-relaxed">
                Show you can start and execute complex projects from conception to completion
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-600 mx-auto mb-6 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">LEADERSHIP</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your ability to lead teams and drive meaningful initiatives forward
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-600 mx-auto mb-6 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">PURPOSE</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect your activities into a coherent, compelling narrative that defines you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">MY PROVEN TRACK RECORD</h2>
              <div className="w-24 h-1 bg-blue-400 mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                I've launched and led multiple capstone projects that built my own success story and opened doors to the
                nation's top universities and opportunities.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 bg-white/5 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">NASA RESEARCH INTERN</h3>
                  <p className="text-gray-300">
                    Published research on COVID-19's effects on astronaut health and psychology
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white/5 p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">STARTUP CO-FOUNDER</h3>
                  <p className="text-gray-300">Ocular health startup that raised $100K+ in VC funding</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 bg-white/5 p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black mb-2">GLOBAL COMPETITION DIRECTOR</h3>
                  <p className="text-gray-300">
                    All-girls startup competition with 300+ participants from 37+ countries
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Results */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">STUDENT SUCCESS RESULTS</h2>
            <div className="w-32 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">Real acceptances from students I've worked with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-blue-50 p-8">
              <div className="text-4xl font-black text-blue-600 mb-4">UC</div>
              <h3 className="text-xl font-black mb-3">ALL UC SCHOOLS</h3>
              <p className="text-gray-600 text-sm">Including UC Berkeley's prestigious M.E.T. Program</p>
            </div>

            <div className="text-center bg-purple-50 p-8">
              <div className="text-4xl font-black text-purple-600 mb-4">T20</div>
              <h3 className="text-xl font-black mb-3">TOP 20 SCHOOLS</h3>
              <p className="text-gray-600 text-sm">MIT, UPenn, Purdue Honors, UT Austin, Georgia Tech</p>
            </div>

            <div className="text-center bg-blue-50 p-8">
              <div className="text-4xl font-black text-blue-600 mb-4">MD</div>
              <h3 className="text-xl font-black mb-3">BS/MD PROGRAMS</h3>
              <p className="text-gray-600 text-sm">UMichigan, UPitt, Rutgers combined programs</p>
            </div>

            <div className="text-center bg-purple-50 p-8">
              <div className="text-4xl font-black text-purple-600 mb-4">$200K+</div>
              <h3 className="text-xl font-black mb-3">MERIT AWARDS</h3>
              <p className="text-gray-600 text-sm">Total scholarships earned by my students</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 text-center">
            <h3 className="text-3xl font-black mb-4">PROVEN SUCCESS ACROSS ALL MAJORS</h3>
            <p className="text-xl opacity-90">
              From STEM to humanities, my students get into their dream schools with compelling capstone stories
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6">COMPREHENSIVE SERVICES</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              End-to-end support to build your capstone project from initial idea to college application integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 border-l-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">PROJECT IDEATION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Brainstorm and develop unique project ideas that align with your interests and college goals
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Interest assessment & goal mapping</li>
                <li>• Market research & feasibility analysis</li>
                <li>• Competitive advantage identification</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-100 mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">PROJECT EXECUTION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Step-by-step guidance to bring your capstone project from concept to completion
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Timeline & milestone planning</li>
                <li>• Resource identification & networking</li>
                <li>• Progress tracking & accountability</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">TEAM BUILDING</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Connect with like-minded students and build the team you need for success
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Peer matching & collaboration</li>
                <li>• Leadership development</li>
                <li>• Conflict resolution strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-100 mb-6 flex items-center justify-center">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">RESEARCH SUPPORT</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Academic research guidance including publication and presentation opportunities
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Literature review methodology</li>
                <li>• Data collection & analysis</li>
                <li>• Publication & conference submissions</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">STARTUP MENTORSHIP</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Launch your own startup with guidance on everything from ideation to funding
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Business model development</li>
                <li>• Pitch deck creation</li>
                <li>• Investor introductions</li>
              </ul>
            </div>

            <div className="bg-white p-8 border-l-4 border-purple-600">
              <div className="w-16 h-16 bg-purple-100 mb-6 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black mb-4">APPLICATION INTEGRATION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Seamlessly weave your capstone project into compelling college application essays
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Essay strategy & storytelling</li>
                <li>• Activity section optimization</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 bg-black text-white p-12 text-center">
            <h3 className="text-2xl font-black mb-4">ALL SERVICES INCLUDE</h3>
            <p className="text-lg opacity-90">
              Weekly 1-on-1 calls • Email support • Resource library • Network introductions • Progress tracking
            </p>
          </div>
        </div>
      </section>

      {/* Sample Projects Carousel */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">SAMPLE PROJECTS</h2>
            <div className="w-32 h-1 bg-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700">Customized for each student's story, interests, and goals</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Carousel Navigation */}
            <div className="flex justify-center items-center mb-12 space-x-8">
              <button
                onClick={prevSlide}
                className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-gray-800"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <div className="text-center">
                <Badge
                  className={`bg-${currentCategory.color}-100 text-${currentCategory.color}-800 font-bold px-8 py-3 text-lg`}
                >
                  {currentCategory.title}
                </Badge>
              </div>

              <button
                onClick={nextSlide}
                className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-gray-800"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-12">
              {currentCategory.projects.map((project, index) => (
                <div key={index} className="bg-white border-2 border-gray-200 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <Star className={`w-8 h-8 text-${currentCategory.color}-600`} />
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className={`w-3 h-3 bg-${currentCategory.color}-600 rounded-full`}></div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-black mb-6">{project.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-8">{project.description}</p>

                  <div className="space-y-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-4">
                        <div className={`w-4 h-4 bg-${currentCategory.color}-600 rounded-full`}></div>
                        <span className="font-semibold text-gray-800">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center space-x-3 mt-12">
              {projectCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">INVESTMENT OPTIONS</h2>
            <div className="w-32 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 text-center border-2 border-gray-200">
              <h3 className="text-3xl font-black mb-4">NOVICE</h3>
              <div className="text-5xl font-black text-blue-600 mb-4">$500+</div>
              <p className="text-gray-600 font-semibold mb-6">1-month project guidance</p>
              <p className="text-gray-700">Perfect for summer or short-term projects with clear requirements</p>
            </div>

            <div className="bg-white p-10 text-center border-4 border-blue-600 relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-2 font-black text-sm">
                MOST POPULAR
              </div>
              <h3 className="text-3xl font-black mb-4">PRO</h3>
              <div className="text-5xl font-black text-blue-600 mb-4">$2000+</div>
              <p className="text-gray-600 font-semibold mb-6">Multi-month project guidance</p>
              <p className="text-gray-700">Best for complex projects requiring ongoing mentorship and support</p>
            </div>

            <div className="bg-white p-10 text-center border-2 border-gray-200">
              <h3 className="text-3xl font-black mb-4">CUSTOM</h3>
              <div className="text-5xl font-black text-gray-600 mb-4">QUOTE</div>
              <p className="text-gray-600 font-semibold mb-6">Talk to me about your needs</p>
              <p className="text-gray-700">Customized project packages after consultation based on scope</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6">MEET TRISHALA</h2>
              <div className="w-32 h-1 bg-purple-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700">
                I'm here to help you build the story that gets you into your dream college
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blue-50 p-8 text-center">
                <h3 className="font-black text-2xl mb-4 text-blue-600">CURRENT</h3>
                <p className="font-semibold text-gray-800 text-lg">
                  UC Berkeley M.E.T. (EECS + Business) Student Board
                </p>
              </div>

              <div className="bg-purple-50 p-8 text-center">
                <h3 className="font-black text-2xl mb-4 text-purple-600">PAST</h3>
                <p className="font-semibold text-gray-800 text-lg">Google Assistant Team Intern (2022-2023)</p>
              </div>

              <div className="bg-blue-50 p-8 text-center">
                <h3 className="font-black text-2xl mb-4 text-blue-600">INCOMING</h3>
                <p className="font-semibold text-gray-800 text-lg">Associate Product Manager @ Google</p>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 p-12 text-center">
              <p className="text-xl text-gray-800 leading-relaxed">
                <span className="font-black text-2xl">My Story:</span> I built my own narrative through projects that
                got me into college, backed by Mayfield Fund and Unusual Ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black mb-8">READY TO BUILD YOUR STORY?</h2>
          <div className="w-32 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Schedule a 15-minute consultation to see if this is the right fit for you
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xl px-16 py-6">
            SCHEDULE FREE CONSULTATION
            <ArrowRight className="ml-4 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-gray-200 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-gray-800 text-lg">&copy; TRISHALA JAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
