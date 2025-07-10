"use client"

import { useState, useEffect } from "react"
import { Lightbulb, Target, Users, Zap, CheckCircle, Star } from "lucide-react"

// Define service relationships for the constellation
const serviceRelationships = [
  { from: 0, to: 1 }, // Project Ideation → Project Execution
  { from: 0, to: 2 }, // Project Ideation → 1-on-1 Mentorship
  { from: 1, to: 2 }, // Project Execution → 1-on-1 Mentorship
  { from: 1, to: 3 }, // Project Execution → Research Support
  { from: 1, to: 4 }, // Project Execution → Venture Incubation
  { from: 2, to: 5 }, // 1-on-1 Mentorship → Application Integration
  { from: 3, to: 5 }, // Research Support → Application Integration
  { from: 4, to: 5 }, // Venture Incubation → Application Integration
]

// Service data
const services = [
  {
    icon: Lightbulb,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "PROJECT IDEATION",
    description: "Brainstorm and develop unique project ideas that align with your interests and college goals",
    items: [
      "Interest assessment & goal mapping",
      "Market research & feasibility analysis",
      "Competitive advantage identification",
    ],
  },
  {
    icon: Target,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "PROJECT EXECUTION",
    description: "Step-by-step guidance to bring your capstone project from concept to completion",
    items: [
      "Timeline & milestone planning",
      "Resource identification & networking",
      "Progress tracking & accountability",
    ],
  },
  {
    icon: Users,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "1-ON-1 MENTORSHIP",
    description: "Connect with college students from top universities to maximize your growth",
    items: ["Peer matching & collaboration", "Leadership development", "Personalized feedback and strategic direction"],
  },
  {
    icon: Star,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "RESEARCH SUPPORT",
    description: "Academic research guidance including publication and presentation opportunities",
    items: ["Literature review methodology", "Data collection & analysis", "Publication & conference submissions"],
  },
  {
    icon: Zap,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "VENTURE INCUBATION",
    description: "Launch your own startup or non-profit from concept to early-stage development",
    items: ["Business model development", "Pitch deck creation", "Investor introductions"],
  },
  {
    icon: CheckCircle,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "APPLICATION INTEGRATION",
    description: "Seamlessly weave your capstone project into compelling college application essays",
    items: ["Essay strategy & storytelling", "Activity section optimization", "Interview preparation"],
  },
]

// Improved desktop positions to prevent overlap
const desktopPositions = [
  { x: 20, y: 25 }, // Project Ideation
  { x: 50, y: 15 }, // Project Execution
  { x: 20, y: 65 }, // 1-on-1 Mentorship
  { x: 50, y: 75 }, // Research Support
  { x: 80, y: 25 }, // Venture Incubation
  { x: 80, y: 65 }, // Application Integration
]

export default function ServicesConstellation() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile on component mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Determine if a connection should be highlighted
  const isConnectionActive = (from: number, to: number) => {
    if (activeService === null && hoveredService === null) return true
    if (activeService !== null) {
      return activeService === from || activeService === to
    }
    return hoveredService === from || hoveredService === to
  }

  // Determine if a service node should be highlighted
  const isServiceActive = (index: number) => {
    if (activeService === null && hoveredService === null) return true
    if (activeService !== null) {
      return (
        activeService === index ||
        serviceRelationships.some(
          (rel) => (rel.from === activeService && rel.to === index) || (rel.to === activeService && rel.from === index),
        )
      )
    }
    return (
      hoveredService === index ||
      serviceRelationships.some(
        (rel) => (rel.from === hoveredService && rel.to === index) || (rel.to === hoveredService && rel.from === index),
      )
    )
  }

  const handleServiceClick = (index: number) => {
    if (activeService === index) {
      setActiveService(null)
    } else {
      setActiveService(index)
    }
  }

  // Mobile view - stacked cards with connection indicators
  if (isMobile) {
    return (
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">SERVICES</h2>
              <p className="container px-4 text-l text-black font-medium">
                Receive comprehensive support for your capstone project, from refining your initial idea to effectively
                incorporating it into your college application. Services include:
              </p>
            </div>

            {/* Mobile view - stacked cards with connection indicators */}
            <div className="space-y-4">
              {services.map((service, idx) => {
                const Icon = service.icon
                const isActive = activeService === idx

                // Find connections for this service
                const connections = serviceRelationships
                  .filter((rel) => rel.from === idx || rel.to === idx)
                  .map((rel) => {
                    return rel.from === idx ? rel.to : rel.from
                  })

                return (
                  <div
                    key={idx}
                    className={`border-2 border-black bg-white p-4 rounded-lg shadow transition-all duration-300 ${
                      isActive ? "ring-4 ring-blue-400" : ""
                    }`}
                    onClick={() => handleServiceClick(idx)}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 ${service.iconBg} border-2 border-black flex items-center justify-center rounded-full mr-3`}
                      >
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-black">{service.title}</h3>
                    </div>

                    <p className="text-black font-medium mb-4 text-sm">{service.description}</p>

                    <ul className="text-black text-xs font-light text-left mt-4 space-y-2">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start">
                          <Star className={`w-3 h-3 ${service.iconColor} mr-2 flex-shrink-0 mt-1`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Connection indicators */}
                    {isActive && connections.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-medium mb-2">Connected with:</p>
                        <div className="flex flex-wrap gap-2">
                          {connections.map((connIdx) => (
                            <div
                              key={connIdx}
                              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                            >
                              {services[connIdx].title}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 italic">Tap on a service to see its connections</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Desktop view - constellation layout
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">SERVICES</h2>
            <p className="container px-4 md:px-16 lg:px-24 xl:px-28 text-l text-black font-medium">
              Receive comprehensive support for your capstone project, from refining your initial idea to effectively
              incorporating it into your college application. Services include:
            </p>
          </div>

          {/* Constellation View for Desktop */}
          <div className="relative w-full" style={{ height: "600px" }}>
            {/* SVG for connections */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {serviceRelationships.map((rel, idx) => {
                const fromPos = desktopPositions[rel.from]
                const toPos = desktopPositions[rel.to]
                const isActive = isConnectionActive(rel.from, rel.to)

                return (
                  <line
                    key={idx}
                    x1={`${fromPos.x}%`}
                    y1={`${fromPos.y}%`}
                    x2={`${toPos.x}%`}
                    y2={`${toPos.y}%`}
                    stroke={isActive ? "#3b82f6" : "#d1d5db"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeDasharray={isActive ? "none" : "5,5"}
                    className="transition-all duration-300"
                  />
                )
              })}
            </svg>

            {/* Service Nodes */}
            {services.map((service, idx) => {
              const pos = desktopPositions[idx]
              const isActive = isServiceActive(idx)
              const Icon = service.icon

              return (
                <div
                  key={idx}
                  className={`absolute transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    width: "280px",
                  }}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(idx)}
                >
                  <div
                    className={`border-2 border-black bg-white p-4 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ${activeService === idx ? "ring-4 ring-blue-400" : "hover:shadow-xl"}`}
                  >
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-10 h-10 ${service.iconBg} border-2 border-black flex items-center justify-center rounded-full mr-3`}
                      >
                        <Icon className={`w-5 h-5 ${service.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-black">{service.title}</h3>
                    </div>

                    <p className="text-black font-medium mb-4 text-sm">{service.description}</p>

                    {(activeService === idx || hoveredService === idx) && (
                      <ul className="text-black text-xs font-light text-left mt-4 space-y-2 transition-all duration-300">
                        {service.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start">
                            <Star className={`w-3 h-3 ${service.iconColor} mr-2 flex-shrink-0 mt-1`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 italic">
              Hover over a service to see its connections, click to lock focus
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
