"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, Target, Users, Zap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import ServicesConstellation from "./services-constellation"
import PricingSection from "./pricing"
import AboutSection from "./about"



export default function Component1() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-4xl font-ins-serif font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            CRATO
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#why" className="text-black hover:text-blue-600 transition-colors font-medium">
              Why Capstone Projects?
            </Link>
            <Link href="#projects" className="text-black hover:text-blue-600 transition-colors font-medium">
              About Us
            </Link>
            <Link href="#pricing" className="text-black hover:text-blue-600 transition-colors font-medium">
              Pricing
            </Link>
            {/* Get Started Button */}
<Button
  asChild
  className="bg-blue-600 hover:bg-blue-700 border-2 font-medium font-semibold"
>
  <a href="https://cal.com/trishala/crato-free-consultation" target="_blank" rel="noopener noreferrer">
    Get Started
  </a>
</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block border-2 border-black bg-white px-4 py-2 mb-8 transform -rotate-0">
            <span className="text-sm font-bold text-blue-600">COLLEGE ADMISSIONS CONSULTING</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-tighter tracking-tighter">
            CREATE THE STORY
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              COLLEGES CRAVE
            </span>
          </h1>

          <div className="container max-w-2xl mx-auto mb-12">
            <p className="text-l md:text-xl text-black font-medium leading-snug">

            Most counselors refine what&apos;s already there. We empower
            students to build a unique, impactful project that
              <span className="bg-blue-200 px-2 py-1 ml-2 border font-bold border-rounded rounded-lg leading-relaxed">transforms their profile and impresses admissions.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Schedule Free Consultation Button */}
<Button
  size="lg"
  className="bg-blue-600 hover:bg-blue-700 text-white text-md px-10 py-4 transform hover:scale-105 transition-all"
  asChild
>
  <a href="https://cal.com/trishala/crato-free-consultation" target="_blank" rel="noopener noreferrer">
    Schedule Free Consultation
    <ArrowRight className="ml-2 w-5 h-5" />
  </a>
</Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black bg-white hover:bg-gray-100 text-black font-bold text-md px-10 py-4 transform hover:scale-105 transition-all"
            >
              <Link href="#services">
                View Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-16 text-center">
          <div>
              <div className="text-3xl font-black text-blue-400">4+</div>
              <div className="text-sm font-medium">Years of Experience</div>
            </div>
          <div>
              <div className="text-3xl font-black text-blue-400">32+</div>
              <div className="text-sm font-medium">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">97%</div>
              <div className="text-sm font-medium">Acceptance to T10 Colleges</div>
            </div>
            <div>
              <div className="text-3xl font-black text-blue-400">$200K+</div>
              <div className="text-sm font-medium">Merit Scholarships</div>
            </div>
          </div>
        </div>
      </section>
      </section>

      {/* Why Capstone Projects Section */}
      <section id="why" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">WHY DO A CAPSTONE?</h2>
            <div className="container max-w-4xl mx-auto">
              <p className="text-l text-black font-medium tracking-tight leading-normal px-7">
              A capstone project is so much more than a school requirement. 
              It&apos;s the most effective way to
              <span className="bg-purple-200 px-2 py-1 border-rounded rounded-lg font-bold">
              strategically differentiate yourself in a competitive applicant pool.</span>
              While grades and scores tell part of your story, your capstone reveals your unique passions and undeniable potential.
              Through a powerful capstone, you will:
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black mb-4">INNOVATE</h3>
              <p className="text-black font-light">Drive original thought and sophisticated problem-solving</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-black mb-4">INITIATE</h3>
              <p className="text-black font-light">Exhibit self-direction by launching and executing significant undertakings</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black mb-4">LEAD</h3>
              <p className="text-black font-light">Cultivate leadership skills by driving initiatives and influencing outcomes</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <Target className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-black mb-4">CONNECT</h3>
              <p className="text-black font-light">Weave your diverse experiences into a powerful, authentic personal story for college apps</p>
            </div>
          </div>
        </div>
      </section>


      {/* Background Section (PAST PROJECTS) */}
      <section className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 py-35 text-white animate-gradient fade-in-mask-top-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-5 tracking-tight">PAST PROJECTS</h2>
              <p className="container px-10 text-l font-medium text-white opacity-90">
                Explore the projects I&apos;ve built, launched, and led, shaping my college admissions path and boosting my clients&apos; results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">


              <div className="space-y-6">

                {/* topic 1 */}
                <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                  <Badge className="bg-purple-300 text-black border font-bold px-4 py-2 mb-4">
                    COMMUNITY SERVICE
                  </Badge>
                  <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                    <Star className="w-6 h-6 text-blue-300 opacity-100" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">TEDx Lead Organizer</div>
                    <p className="opacity-90 text-sm">
                      Launched 1st TEDx event at my local high school, independently securing licensing and orchestrating over 15 student-led talks to amplify local voices
                    </p>
                  </div>
                </div>

                {/* topic 2 */}

                <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                  <Badge className="bg-blue-300 text-black border font-bold px-4 py-2 mb-4">
                    TECH & ENGINEERING
                  </Badge>
                  <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                    <Star className="w-6 h-6 text-blue-300 opacity-100" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">Startup Co-Founder</div>
                    <p className="opacity-90 text-sm">
                    Co-founded an innovative ocular health company, securing over $100K in venture capital to develop novel eye care technologies
                    </p>
                  </div>
                </div>

                {/* topic 3 */}

                <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                  <Badge className="bg-blue-300 text-black border font-bold px-4 py-2 mb-4">
                    TECH & ENGINEERING
                  </Badge>
                  <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                    <Star className="w-6 h-6 text-blue-300 opacity-100" />
                  </div>
                  <div>
                    <div className="font-black text-lg mb-2">Startup Competition Director</div>
                    <p className="opacity-90 text-sm">
                    Directed an international all-girls entrepreneurship competition, engaging 300+ participants across 37+ countries in a large-scale innovation challenge
                    </p>
                  </div>
                </div>


              </div>

              <div className="space-y-6">

                {/* topic 4 */}


                  <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                    <Badge className="bg-green-300 text-black border font-bold px-4 py-2 mb-4">
                      BIO & PRE-MED
                    </Badge>
                    <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                      <Star className="w-6 h-6 text-blue-300 opacity-100" />
                    </div>
                    <div>
                    <div className="font-black text-lg mb-2">Biomed Research Publication</div>
                      <p className="opacity-90 text-sm ">Guided client through comprehensive research & publication of novel biomedical findings in research journal</p>
                    </div>
                  </div>

                {/* topic 5 */}

                <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                    <Badge className="bg-purple-300 text-black border font-bold px-4 py-2 mb-4">
                      COMMUNITY SERVICE
                    </Badge>
                    <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                      <Star className="w-6 h-6 text-blue-300 opacity-100" />
                    </div>
                    <div>
                    <div className="font-black text-lg mb-2">Youth Civic Engagement Program</div>
                    <p className="opacity-90 text-sm ">
                    Collaborated with client to design and implement a Youth & Society bootcamp, equipping students with essential skills in civic engagement and policy advocacy
                    </p>
                  </div>
                  </div>

                {/* topic 6 */}

                <div className="relative bg-white/10 p-6 border-2 border-white/20 rounded-md overflow-hidden transform hover:scale-105">
                    <Badge className="bg-blue-300 text-black border font-bold px-4 py-2 mb-4">
                      TECH & ENGINEERING
                    </Badge>
                    <div className="absolute top-4 right-4 rounded-full flex items-center justify-center w-12 h-12">
                      <Star className="w-6 h-6 text-blue-300 opacity-100" />
                    </div>
                    <div>
                    <div className="font-black text-lg mb-2">STEM Mentorship Program</div>
                    <p className="opacity-90 text-sm ">
                    Provided strategic development and operational oversight for a client&apos;s STEM mentorship initiative, successfully connecting students with industry professionals
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
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tight">ADMISSIONS RESULTS</h2>
            <p className="text-l text-black text-light font-medium">Clients have been accepted to the following schools & programs:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-black text-blue-600">UC</div>
              </div>
              <h3 className="text-lg font-black mb-4 leading-none">ALL UC SCHOOLS</h3>
              <p className="text-gray-700 font-light text-sm">+ UC Berkeley&apos;s prestigious M.E.T. Program</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-black text-purple-600">T20</div>
              </div>
              <h3 className="text-lg font-black mb-4 leading-none">TOP 20 SCHOOLS</h3>
              <p className="text-gray-700 font-light text-sm">UPenn, Stanford, UIUC, Purdue Honors, UT Austin, Georgia Tech</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-black text-blue-600">CS</div>
              </div>
              <h3 className="text-lg font-black mb-4 leading-none">SELECTIVE MAJORS</h3>
              <p className="text-gray-700 font-light text-sm">CS, Cognitive Science, Pre-Med, Business, Economics, Pre-Law</p>
            </div>

            <div className="border-2 border-black bg-white p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 border-2 border-black mx-auto mb-6 flex items-center justify-center">
                <div className="text-2xl font-black text-purple-600">$$$</div>
              </div>
              <h3 className="text-lg font-black mb-4 leading-none">$200K+ MERIT</h3>
              <p className="text-gray-700 font-light text-sm">scholarships earned from colleges & 3rd party companies</p>
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section id="services">
      <div>
      <ServicesConstellation />
    </div>
      </section>

      <div className="mt-0 text-center">
  <div className="relative bg-black text-white border-2 border-black overflow-hidden"> {/* Removed p-8 here */}
    <div className="max-w-5xl mx-auto px-4 py-6"> {/* Added px-4 py-8 for padding that was removed from parent */}
      <div className="inline-flex space-x-5 animate-marquee-banner py-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex-shrink-0 text-center px-2">
            <p className="font-light opacity-90">
              <span className="font-bold">All projects include: </span> Weekly 1-on-1 calls • Resource library • Network introductions • Progress tracking
            </p>
          </div>
        ))}

      </div>
    </div>
  </div>
</div>

      {/* Pricing */}
      <section id="pricing" className="">
  <div>
    <PricingSection />
  </div>
</section>



      {/* About */}
      <section id="about" className="">
        <AboutSection />
      </section>

{/* Final CTA Section - Redesigned */}
            {/* Removed fade-in-mask-top-2 as background layers handle the effect */}
            <section className="relative z-10 py-16 text-white"
                     style={{
                       // Layer 1: Vertical gradient (white to blue-600)
                       backgroundImage: `linear-gradient(to bottom, #ffffff, #2563eb)`,
                       backgroundSize: '100% 100%', // Covers entire section vertically
                       backgroundRepeat: 'no-repeat',
                       backgroundPosition: '0% 0%', // Stays fixed at the top
                     }}
            >

              {/* Content of the CTA section - z-index 10 to ensure it's above the backgrounds */}
              <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl text-black font-black mb-6 tracking-tight">
                  READY TO BUILD YOUR STORY?
                </h2>
                <p className="text-xl font-light mb-8 text-black max-w-2xl mx-auto leading-tight tracking-tight">
                  Every great college application starts with understanding your unique strengths. Let&apos;s discover yours
                  together in a personalized consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    <span>15-minute free consultation</span>
                  </div>
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span>Personalized strategy session</span>
                  </div>
                  <div className="flex items-center text-black">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    <span>No commitment required</span>
                  </div>
                </div>
                {/* Get Free Consultation Button */}
<Button
  size="lg"
  className="bg-black hover:bg-blue-700 text-white font-black text-xl px-12 py-6 transform hover:scale-105 transition-all"
  asChild
>
  <a href="https://cal.com/trishala/crato-free-consultation" target="_blank" rel="noopener noreferrer">
    GET FREE CONSULTATION
    <ArrowRight className="ml-3 w-6 h-6" />
  </a>
</Button>
                <p className="text-sm text-white mt-6">
                  Join 100+ students who&apos;ve transformed their college applications
                </p>

                <p className="font-bold text-white text-center mt-8 text-sm opacity-80">
                  &copy; TRISHALA JAIN. ALL RIGHTS RESERVED.
                </p>
              </div>
            </section>
    </div>
  )
}
