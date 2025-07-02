import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Lightbulb, Target, Users, Zap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            CRATO 
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#why" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Why Capstone Projects?
            </Link>
            <Link href="#projects" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Projects
            </Link>
            <Link href="#pricing" className="text-gray-800 hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 border-2 border-black font-semibold">Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block border-2 border-black bg-white px-4 py-2 mb-8 transform -rotate-1">
            <span className="text-sm font-bold text-blue-600">COLLEGE ADMISSIONS CONSULTING</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-7 leading-tight">
            CREATE THE STORY
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              COLLEGES CRAVE
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Most counselors polish what exists. I help students <br />
              <span className="bg-blue-100 px-2 py-1 border border-black font-bold"> create what doesn't</span>.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 border-2 border-black text-white font-bold text-lg px-10 py-4 transform hover:scale-105 transition-all"
            >
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black bg-white hover:bg-gray-50 text-black font-bold text-lg px-10 py-4"
            >
              View Sample Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 text-center">
            <div>
              <div className="text-3xl font-black text-blue-400">$200K+</div>
              <div className="text-sm font-medium">Merit Scholarships</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">MIT, UC Berkeley</div>
              <div className="text-sm font-medium">Top Acceptances</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">100%</div>
              <div className="text-sm font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Capstone Projects Section */}
      <section id="why" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">WHY CAPSTONE PROJECTS?</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                Capstone projects don't just tell colleges what you've done—they
                <span className="bg-purple-100 px-2 py-1 border border-black font-bold mx-2">SHOW</span>
                who you are and what you're capable of creating.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black mb-4">CREATIVITY</h3>
              <p className="text-gray-700 font-medium">Demonstrate innovative thinking and problem-solving abilities</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-black mb-4">INITIATIVE</h3>
              <p className="text-gray-700 font-medium">Show you can start and execute projects from scratch</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black mb-4">LEADERSHIP</h3>
              <p className="text-gray-700 font-medium">Build your ability to lead teams and drive initiatives</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-black mb-4">PURPOSE</h3>
              <p className="text-gray-700 font-medium">Connect activities into a coherent, meaningful narrative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-6">MY PROVEN TRACK RECORD</h2>
              <p className="text-xl font-medium opacity-90">
                I've launched and led multiple capstone projects that built my own success story
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 p-6 border-2 border-white/20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">NASA RESEARCH INTERN</div>
                    <p className="opacity-90">
                      Published research on COVID-19's effects on astronaut health and psychology
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-6 border-2 border-white/20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">CURRICULUM CREATOR</div>
                    <p className="opacity-90">Startup curriculum used by 2,000+ girls through Technovation Girls</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-6 border-2 border-white/20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">TEDX FOUNDER</div>
                    <p className="opacity-90">Licensed TEDxYouth@VHS with 15+ student speakers</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 bg-white/10 p-6 border-2 border-white/20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">STARTUP CO-FOUNDER</div>
                    <p className="opacity-90">Ocular health startup that raised $100K+ in VC funding</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/10 p-6 border-2 border-white/20">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">GLOBAL COMPETITION DIRECTOR</div>
                    <p className="opacity-90">
                      All-girls startup competition with 300+ participants from 37+ countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* College Acceptances Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">STUDENT SUCCESS RESULTS</h2>
            <p className="text-xl text-gray-700 font-medium">Real acceptances from students I've worked with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-black text-blue-600">UC</div>
              </div>
              <h3 className="text-lg font-black mb-4">ALL UC SCHOOLS</h3>
              <p className="text-gray-700 font-medium text-sm">Including UC Berkeley's prestigious M.E.T. Program</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-xl font-black text-purple-600">T20</div>
              </div>
              <h3 className="text-lg font-black mb-4">TOP 20 SCHOOLS</h3>
              <p className="text-gray-700 font-medium text-sm">MIT, UPenn, Purdue Honors, UT Austin, Georgia Tech</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-xl font-black text-blue-600">MD</div>
              </div>
              <h3 className="text-lg font-black mb-4">BS/MD PROGRAMS</h3>
              <p className="text-gray-700 font-medium text-sm">UMichigan, UPitt, Rutgers combined programs</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-xl font-black text-purple-600">$$$</div>
              </div>
              <h3 className="text-lg font-black mb-4">$200K+ MERIT</h3>
              <p className="text-gray-700 font-medium text-sm">Total scholarships earned by my students</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 border-2 border-black max-w-4xl mx-auto">
              <p className="text-xl font-black mb-2">PROVEN SUCCESS ACROSS ALL MAJORS</p>
              <p className="font-medium opacity-90">
                From STEM to humanities, my students get into their dream schools with compelling capstone stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">SERVICES</h2>
              <p className="text-xl text-gray-700 font-medium">
                Comprehensive support to build your capstone project from idea to college application
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-blue-100 border-2 border-black mb-6 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black mb-4">PROJECT IDEATION</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Brainstorm and develop unique project ideas that align with your interests and college goals
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Interest assessment & goal mapping</li>
                  <li>• Market research & feasibility analysis</li>
                  <li>• Competitive advantage identification</li>
                </ul>
              </div>

              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-purple-100 border-2 border-black mb-6 flex items-center justify-center">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-black mb-4">PROJECT EXECUTION</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Step-by-step guidance to bring your capstone project from concept to completion
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Timeline & milestone planning</li>
                  <li>• Resource identification & networking</li>
                  <li>• Progress tracking & accountability</li>
                </ul>
              </div>

              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-blue-100 border-2 border-black mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black mb-4">TEAM BUILDING</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Connect with like-minded students and build the team you need for success
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Peer matching & collaboration</li>
                  <li>• Leadership development</li>
                  <li>• Conflict resolution strategies</li>
                </ul>
              </div>

              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-purple-100 border-2 border-black mb-6 flex items-center justify-center">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-black mb-4">RESEARCH SUPPORT</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Academic research guidance including publication and presentation opportunities
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Literature review methodology</li>
                  <li>• Data collection & analysis</li>
                  <li>• Publication & conference submissions</li>
                </ul>
              </div>

              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-blue-100 border-2 border-black mb-6 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black mb-4">STARTUP MENTORSHIP</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Launch your own startup with guidance on everything from ideation to funding
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Business model development</li>
                  <li>• Pitch deck creation</li>
                  <li>• Investor introductions</li>
                </ul>
              </div>

              <div className="border-2 border-black bg-white p-8">
                <div className="w-16 h-16 bg-purple-100 border-2 border-black mb-6 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-black mb-4">APPLICATION INTEGRATION</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Seamlessly weave your capstone project into compelling college application essays
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Essay strategy & storytelling</li>
                  <li>• Activity section optimization</li>
                  <li>• Interview preparation</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-black text-white p-8 border-2 border-black max-w-4xl mx-auto">
                <p className="text-xl font-black mb-2">ALL SERVICES INCLUDE</p>
                <p className="font-medium opacity-90">
                  Weekly 1-on-1 calls • Email support • Resource library • Network introductions • Progress tracking
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Projects */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">SAMPLE PROJECTS</h2>
            <p className="text-xl text-gray-700 font-medium">
              Customized for each student's story, interests, and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-2 border-black bg-white p-8">
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-blue-100 text-blue-800 border border-black font-bold px-4 py-2">
                  TECH & ENGINEERING
                </Badge>
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-black mb-6">STEM Education & ML Projects</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-medium text-gray-700">
                    Launched STEM education non-profit serving 250+ students with full curriculum development
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-medium text-gray-700">
                    Created machine learning project for lung disease detection with provisional patent filing
                  </p>
                </div>
              </div>
            </div>

            <div className="border-2 border-black bg-white p-8">
              <div className="flex items-center justify-between mb-6">
                <Badge className="bg-purple-100 text-purple-800 border border-black font-bold px-4 py-2">
                  BIO & PRE-MED
                </Badge>
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl font-black mb-6">Research & Health Initiatives</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-medium text-gray-700">
                    Published Alzheimer's research paper with comprehensive literature review and methodology
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="font-medium text-gray-700">
                    Led district-wide mental health initiative with board support and community partnerships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">INVESTMENT OPTIONS</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-black bg-white p-8 text-center">
                <h3 className="text-2xl font-black mb-4">NOVICE</h3>
                <div className="text-4xl font-black text-blue-600 mb-2">$500+</div>
                <p className="text-gray-600 font-medium mb-6">1-month project guidance</p>
                <p className="text-sm text-gray-700">
                  Perfect for summer or short-term projects with clear requirements
                </p>
              </div>

              <div className="border-4 border-blue-600 bg-white p-8 text-center relative transform scale-105">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 font-black text-sm border-2 border-black">
                  MOST POPULAR
                </div>
                <h3 className="text-2xl font-black mb-4">PRO</h3>
                <div className="text-4xl font-black text-blue-600 mb-2">$2000+</div>
                <p className="text-gray-600 font-medium mb-6">Multi-month project guidance</p>
                <p className="text-sm text-gray-700">
                  Best for complex projects requiring ongoing mentorship and support
                </p>
              </div>

              <div className="border-2 border-black bg-white p-8 text-center">
                <h3 className="text-2xl font-black mb-4">CUSTOM</h3>
                <div className="text-4xl font-black text-gray-600 mb-2">QUOTE</div>
                <p className="text-gray-600 font-medium mb-6">Talk to me about your needs</p>
                <p className="text-sm text-gray-700">Customized project packages after consultation based on scope</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">MEET TRISHALA</h2>
            <p className="text-xl text-gray-700 font-medium">
              I'm here to help you build the story that gets you into your dream college
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-black bg-blue-50 p-8 text-center">
              <h3 className="font-black text-lg mb-4 text-blue-600">CURRENT</h3>
              <p className="font-medium text-gray-800">UC Berkeley M.E.T. (EECS + Business) Student Board</p>
            </div>

            <div className="border-2 border-black bg-purple-50 p-8 text-center">
              <h3 className="font-black text-lg mb-4 text-purple-600">PAST</h3>
              <p className="font-medium text-gray-800">Google Assistant Team Intern (2022-2023)</p>
            </div>

            <div className="border-2 border-black bg-blue-50 p-8 text-center">
              <h3 className="font-black text-lg mb-4 text-blue-600">INCOMING</h3>
              <p className="font-medium text-gray-800">Associate Product Manager @ Google</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white border-2 border-black p-8 max-w-3xl mx-auto">
              <p className="text-lg font-medium text-gray-800">
                <span className="font-black">My Story:</span> I built my own narrative through projects that got me into
                college, backed by Mayfield Fund and Unusual Ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO BUILD YOUR STORY?</h2>
          <p className="text-xl font-medium mb-12 opacity-90">
            Schedule a 15-minute consultation to see if this is the right fit for you
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 border-2 border-white text-white font-black text-xl px-12 py-6 transform hover:scale-105 transition-all"
          >
            SCHEDULE FREE CONSULTATION
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-2 border-black py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-gray-800">&copy; TRISHALA JAIN. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}
