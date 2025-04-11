"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Team Members" },
    { value: "98%", label: "Client Satisfaction" },
  ]

  const keyPoints = [
    "Agile development methodology for faster delivery",
    "Dedicated project managers for seamless communication",
    "Rigorous quality assurance and testing processes",
    "Post-launch support and maintenance services",
    "Transparent pricing and project timelines",
    "Continuous integration and deployment practices",
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div
            className="w-full lg:w-1/2"
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About Auxlr</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Founded in 2013, Auxlr is a leading software development firm dedicated to helping businesses leverage
              technology to achieve their goals. We combine technical expertise with strategic thinking to deliver
              solutions that drive growth and innovation.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Our team of experienced developers, designers, and project managers work collaboratively to ensure every
              project exceeds expectations. We pride ourselves on building long-term partnerships with our clients,
              becoming an extension of their team.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">{point}</p>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Learn More About Us
            </Button>
          </div>

          <div
            className="w-full lg:w-1/2"
            style={{
              transform: isInView ? "none" : "translateX(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s",
            }}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-200 rounded-lg -z-10"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-pink-200 rounded-lg -z-10"></div>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Auxlr team"
                className="w-full h-auto rounded-lg shadow-xl relative z-10"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
