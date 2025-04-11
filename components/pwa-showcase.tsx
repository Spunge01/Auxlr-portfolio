"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Globe, Zap, Wifi, WifiOff, Bell } from "lucide-react"

export default function PWAShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Globe className="h-10 w-10 text-purple-600" />,
      title: "Cross-Platform",
      description: "Build once, deploy everywhere. PWAs work on all devices with a modern browser.",
    },
    {
      icon: <Zap className="h-10 w-10 text-purple-600" />,
      title: "Fast & Responsive",
      description: "Optimized for speed and performance, providing a smooth user experience.",
    },
    {
      icon: <WifiOff className="h-10 w-10 text-purple-600" />,
      title: "Offline Capability",
      description: "Works without an internet connection, ensuring uninterrupted user experience.",
    },
    {
      icon: <Bell className="h-10 w-10 text-purple-600" />,
      title: "Push Notifications",
      description: "Engage users with timely updates and personalized content.",
    },
    {
      icon: <Download className="h-10 w-10 text-purple-600" />,
      title: "Installable",
      description: "Users can add your app to their home screen without app store intermediaries.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-purple-600" />,
      title: "Always Updated",
      description: "Users always get the latest version without manual updates.",
    },
  ]

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Progressive Web Apps</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Combining the best of web and mobile apps to deliver exceptional user experiences.
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
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300 dark:border-gray-700 dark:bg-gray-800"
            >
              <CardContent className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Progressive Web Apps offer the perfect balance between native mobile apps and traditional websites. They
            provide app-like experiences with the reach and accessibility of the web.
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Explore Our PWA Solutions
          </Button>
        </div>
      </div>
    </section>
  )
}
