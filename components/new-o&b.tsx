"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, ArrowRight, Star, Award, TrendingUp, Rocket } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Component3() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const projectCategories = [
    {
      title: "STEM & ENGINEERING",
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
      <header className="border-b-4 border-black">
        <div className="container mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <div className="w-6 h-6 bg-orange-500"></div>
              </div>
              <div className="text-3xl font-black tracking-tight">CAPSTONE</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#why" className="text-gray-900 font-bold hover:text-orange-500 transition-colors">
                WHY
              </Link>
              <Link href="#projects" className="text-gray-900 font-bold hover:text-orange-500 transition-colors">
                PROJECTS
              </Link>
              <Link href="#pricing" className="text-gray-900 font-bold hover:text-orange-500 transition-colors">
                PRICING
              </Link>
              <Button className="bg-orange-500 text-white font-black px-6 py-3 hover:bg-orange-600">GET STARTED</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
            <div className="py-20">
              <div className="bg-orange-500 text-white px-4 py-2 font-black text-sm inline-block mb-8 transform -skew-x-12">
                COLLEGE CONSULTING
              </div>

              <h1 className="text-7xl lg:text-9xl font-black leading-none mb-8">
                BUILD
                <br />
                <span className="text-orange-500">LEGENDARY</span>
                <br />
                PROJECTS
              </h1>

              <div className="w-32 h-2 bg-black mb-8"></div>

              <p className="text-2xl text-gray-700 leading-tight mb-12 max-w-lg font-medium">
                Stop polishing mediocre activities. Start creating groundbreaking projects that make admissions officers
                stop and take notice.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-black text-white font-black px-12 py-6 text-lg hover:bg-gray-800">
                  START YOUR PROJECT
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-4 border-black font-black px-12 py-6 text-lg hover:bg-gray-100 bg-transparent"
                >
                  SEE EXAMPLES
                </Button>
              </div>
            </div>

            <div className="relative text-white p-16">
              <div className="space-y-12">
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">$200K+</div>
                  <div className="text-xl font-bold opacity-80">SCHOLARSHIPS WON</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">MIT</div>
                  <div className="text-xl font-bold opacity-80">TOP ACCEPTANCES</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black mb-4">100%</div>
                  <div className="text-xl font-bold opacity-80">SUCCESS RATE</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-orange-500 transform rotate-45"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-6xl font-black mb-8">WHY CAPSTONE?</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 leading-relaxed font-medium">
              Traditional extracurriculars are
              <span className="bg-black text-white px-3 py-1 mx-2 font-black">BORING</span>
              Capstone projects are
              <span className="bg-orange-500 text-white px-3 py-1 mx-2 font-black">LEGENDARY</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-l-8 border-orange-500">
              <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">INNOVATION</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Create something that has never existed before and solve real problems
              </p>
            </div>

            <div className="bg-white p-8 border-l-8 border-black">
              <div className="w-16 h-16 bg-orange-500 mb-6 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">IMPACT</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Generate measurable results that change lives and communities
              </p>
            </div>

            <div className="bg-white p-8 border-l-8 border-orange-500">
              <div className="w-16 h-16 bg-black mb-6 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">RECOGNITION</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Earn awards, publications, and media coverage for your work
              </p>
            </div>

            <div className="bg-white p-8 border-l-8 border-black">
              <div className="w-16 h-16 bg-orange-500 mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black mb-4">NARRATIVE</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Build a compelling story that defines who you are and what you stand for
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-6xl font-black mb-8">MY TRACK RECORD</h2>
              <div className="w-24 h-2 bg-orange-500 mb-8"></div>
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                I don't just teach capstone projects—I've built them. Here's proof of what's possible when you think
                bigger.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="bg-white/5 p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-black mb-3">NASA RESEARCH PUBLICATION</h3>
                <p className="text-gray-300 font-medium">
                  Published peer-reviewed research on astronaut psychology during COVID-19 pandemic
                </p>
              </div>

              <div className="bg-white/5 p-8 border-l-4 border-white">
                <h3 className="text-2xl font-black mb-3">$100K+ STARTUP FUNDING</h3>
                <p className="text-gray-300 font-medium">
                  Co-founded ocular health startup that secured six-figure venture capital investment
                </p>
              </div>

              <div className="bg-white/5 p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-black mb-3">GLOBAL COMPETITION DIRECTOR</h3>
                <p className="text-gray-300 font-medium">
                  Directed international startup competition with 300+ participants from 37 countries
                </p>
              </div>

              <div className="bg-white/5 p-8 border-l-4 border-white">
                <h3 className="text-2xl font-black mb-3">TEDX FOUNDER & SPEAKER</h3>
                <p className="text-gray-300 font-medium">
                  Founded licensed TEDx event and curated 15+ student speakers on innovation topics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8">STUDENT RESULTS</h2>
            <div className="w-24 h-2 bg-black mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 font-medium">Where my students actually got accepted</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="text-center bg-orange-50 p-12 border-4 border-orange-500">
              <div className="text-5xl font-black mb-6">UC</div>
              <h3 className="text-xl font-black mb-4">ALL UC SCHOOLS</h3>
              <p className="text-gray-600 font-medium">Including Berkeley M.E.T. Program</p>
            </div>

            <div className="text-center bg-gray-50 p-12 border-4 border-black">
              <div className="text-5xl font-black mb-6">IVY+</div>
              <h3 className="text-xl font-black mb-4">TOP 20 SCHOOLS</h3>
              <p className="text-gray-600 font-medium">MIT, UPenn, Stanford, Georgia Tech</p>
            </div>

            <div className="text-center bg-orange-50 p-12 border-4 border-orange-500">
              <div className="text-5xl font-black mb-6">BS/MD</div>
              <h3 className="text-xl font-black mb-4">MEDICAL PROGRAMS</h3>
              <p className="text-gray-600 font-medium">UMichigan, UPitt, Rutgers</p>
            </div>

            <div className="text-center bg-gray-50 p-12 border-4 border-black">
              <div className="text-5xl font-black mb-6">$200K+</div>
              <h3 className="text-xl font-black mb-4">SCHOLARSHIPS</h3>
              <p className="text-gray-600 font-medium">Total merit aid earned</p>
            </div>
          </div>

          <div className="bg-black text-white p-16 text-center">
            <h3 className="text-4xl font-black mb-6">EVERY STUDENT GETS INTO THEIR TOP CHOICE</h3>
            <p className="text-xl font-medium opacity-90">
              When you build legendary projects, legendary results follow
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8">HOW I HELP</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
              From initial brainstorm to college application, I guide you through every step of building something
              extraordinary
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-10 border-t-8 border-orange-500">
              <div className="w-20 h-20 bg-black mb-8 flex items-center justify-center">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">IDEATION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Discover your unique angle and develop project ideas that align with your passions and college goals
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Deep interest assessment</li>
                <li>• Market opportunity analysis</li>
                <li>• Competitive differentiation</li>
              </ul>
            </div>

            <div className="bg-white p-10 border-t-8 border-black">
              <div className="w-20 h-20 bg-orange-500 mb-8 flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">EXECUTION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Transform your idea into reality with structured planning, resource access, and accountability
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Project roadmap creation</li>
                <li>• Resource & network access</li>
                <li>• Weekly progress reviews</li>
              </ul>
            </div>

            <div className="bg-white p-10 border-t-8 border-orange-500">
              <div className="w-20 h-20 bg-black mb-8 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">TEAM BUILDING</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Connect with talented peers and build the dream team needed to execute your vision
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Peer matching & recruitment</li>
                <li>• Leadership skill development</li>
                <li>• Team dynamics coaching</li>
              </ul>
            </div>

            <div className="bg-white p-10 border-t-8 border-black">
              <div className="w-20 h-20 bg-orange-500 mb-8 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">RESEARCH</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Conduct rigorous research that leads to publications, presentations, and academic recognition
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Research methodology training</li>
                <li>• Data analysis & interpretation</li>
                <li>• Publication & conference prep</li>
              </ul>
            </div>

            <div className="bg-white p-10 border-t-8 border-orange-500">
              <div className="w-20 h-20 bg-black mb-8 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">STARTUP</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Launch a real business with guidance on everything from business models to investor pitches
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Business model development</li>
                <li>• Pitch deck creation</li>
                <li>• Investor introductions</li>
              </ul>
            </div>

            <div className="bg-white p-10 border-t-8 border-black">
              <div className="w-20 h-20 bg-orange-500 mb-8 flex items-center justify-center">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-black mb-6">APPLICATION</h3>
              <p className="text-gray-700 mb-6 leading-relaxed font-medium text-lg">
                Craft compelling essays and applications that showcase your project's impact and your growth
              </p>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li>• Essay strategy & storytelling</li>
                <li>• Activity section optimization</li>
                <li>• Interview preparation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects Carousel */}
      <section id="projects" className="py-32 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8">PROJECT EXAMPLES</h2>
            <div className="w-24 h-2 bg-orange-500 mx-auto mb-8"></div>
            <p className="text-2xl text-gray-300 font-medium">Real projects built by real students</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Navigation */}
            <div className="flex justify-center items-center mb-16 space-x-8">
              <button
                onClick={prevSlide}
                className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 font-black text-2xl"
              >
                ←
              </button>

              <div className="text-center">
                <Badge className="bg-white text-black font-black px-8 py-4 text-xl">{currentCategory.title}</Badge>
              </div>

              <button
                onClick={nextSlide}
                className="w-16 h-16 bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 font-black text-2xl"
              >
                →
              </button>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-16">
              {currentCategory.projects.map((project, index) => (
                <div key={index} className="bg-white text-black p-12 border-4 border-orange-500">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 bg-black flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex space-x-2">
                      {[1, 2, 3].map((dot) => (
                        <div key={dot} className="w-4 h-4 bg-orange-500"></div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-4xl font-black mb-8">{project.title}</h3>
                  <p className="text-gray-700 text-xl leading-relaxed mb-10 font-medium">{project.description}</p>

                  <div className="space-y-4">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center space-x-4">
                        <div className="w-6 h-6 bg-orange-500"></div>
                        <span className="font-bold text-lg">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-4 mt-16">
              {projectCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-6 h-6 ${index === currentSlide ? "bg-orange-500" : "bg-gray-600"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-8">INVESTMENT</h2>
            <div className="w-24 h-2 bg-black mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 font-medium">Choose your level of commitment</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-12 text-center border-4 border-gray-300">
              <h3 className="text-4xl font-black mb-6">STARTER</h3>
              <div className="text-6xl font-black mb-6">$500+</div>
              <p className="text-xl font-bold mb-8 text-gray-600">1-MONTH SPRINT</p>
              <p className="text-gray-700 font-medium text-lg">
                Perfect for focused summer projects with clear scope and timeline
              </p>
            </div>

            <div className="bg-orange-50 p-12 text-center border-4 border-orange-500 relative transform scale-105">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-8 py-3 font-black text-lg">
                MOST POPULAR
              </div>
              <h3 className="text-4xl font-black mb-6">BUILDER</h3>
              <div className="text-6xl font-black mb-6">$2000+</div>
              <p className="text-xl font-bold mb-8 text-gray-600">MULTI-MONTH BUILD</p>
              <p className="text-gray-700 font-medium text-lg">
                Comprehensive support for complex projects requiring ongoing mentorship
              </p>
            </div>

            <div className="bg-gray-50 p-12 text-center border-4 border-gray-300">
              <h3 className="text-4xl font-black mb-6">CUSTOM</h3>
              <div className="text-6xl font-black mb-6">QUOTE</div>
              <p className="text-xl font-bold mb-8 text-gray-600">TAILORED APPROACH</p>
              <p className="text-gray-700 font-medium text-lg">
                Fully customized packages based on your specific goals and timeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl font-black mb-8">MEET TRISHALA</h2>
              <div className="w-24 h-2 bg-orange-500 mx-auto mb-8"></div>
              <p className="text-2xl text-gray-700 font-medium">
                The person who will help you build something legendary
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              <div className="bg-white p-12 text-center border-t-8 border-orange-500">
                <h3 className="font-black text-3xl mb-6">CURRENT</h3>
                <p className="font-bold text-gray-800 text-xl">UC Berkeley M.E.T. Student Board</p>
                <p className="text-gray-600 font-medium mt-2">(EECS + Business)</p>
              </div>

              <div className="bg-white p-12 text-center border-t-8 border-black">
                <h3 className="font-black text-3xl mb-6">PAST</h3>
                <p className="font-bold text-gray-800 text-xl">Google Assistant Intern</p>
                <p className="text-gray-600 font-medium mt-2">(2022-2023)</p>
              </div>

              <div className="bg-white p-12 text-center border-t-8 border-orange-500">
                <h3 className="font-black text-3xl mb-6">INCOMING</h3>
                <p className="font-bold text-gray-800 text-xl">Google APM</p>
                <p className="text-gray-600 font-medium mt-2">(Associate Product Manager)</p>
              </div>
            </div>

            <div className="bg-black text-white p-16 text-center">
              <p className="text-2xl font-medium leading-relaxed">
                <span className="font-black text-3xl text-orange-500">MY STORY:</span>
                <br />
                <br />I built legendary projects that got me into Berkeley M.E.T., landed me at Google, and secured
                backing from Mayfield Fund and Unusual Ventures. Now I help students do the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-black mb-8">READY TO BUILD SOMETHING LEGENDARY?</h2>
          <div className="w-32 h-2 bg-orange-500 mx-auto mb-12"></div>
          <p className="text-2xl mb-16 font-medium max-w-3xl mx-auto">
            Stop wasting time on ordinary activities. Start building the project that will define your future.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-black text-2xl px-16 py-8">
            START YOUR LEGENDARY PROJECT
            <ArrowRight className="ml-4 w-8 h-8" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="font-black text-2xl text-gray-800">&copy; TRISHALA JAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
