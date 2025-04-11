"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Globe, Database, Smartphone, Cloud, Lock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Code className="h-10 w-10 text-purple-600" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and technologies to deliver exceptional user experiences.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-purple-600" />,
      title: "Mobile Solutions",
      description: "Progressive Web Apps and responsive designs that provide app-like experiences across all devices.",
    },
    {
      icon: <Database className="h-10 w-10 text-purple-600" />,
      title: "Database Solutions",
      description:
        "Scalable database architecture and optimization to ensure your data is secure, accessible, and performant.",
    },
    {
      icon: <Cloud className="h-10 w-10 text-purple-600" />,
      title: "Cloud Services",
      description:
        "Cloud migration, infrastructure setup, and DevOps practices to maximize efficiency and minimize costs.",
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-600" />,
      title: "E-commerce Solutions",
      description:
        "End-to-end e-commerce platforms with secure payment processing, inventory management, and customer analytics.",
    },
    {
      icon: <Lock className="h-10 w-10 text-purple-600" />,
      title: "Cybersecurity",
      description:
        "Comprehensive security assessments and implementations to protect your digital assets and customer data.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Services</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We offer a comprehensive range of software development services to help businesses thrive in the digital
            landscape.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 dark:border-gray-700 dark:bg-gray-800"
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl dark:text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
