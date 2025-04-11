"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Smartphone, Tablet, RotateCcw, Home, Menu, ArrowLeft, Settings } from "lucide-react"
import { motion } from "framer-motion"

type MobileAppScreenProps = {
  title: string
  children: React.ReactNode
}

const MobileAppScreen = ({ title, children }: MobileAppScreenProps) => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-gray-800 text-white py-4 px-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" />
          <span className="text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center space-x-3">
          <Settings className="h-4 w-4" />
        </div>
      </div>
      <div className="flex-1 bg-white dark:bg-gray-900 overflow-y-auto p-4">{children}</div>
      <div className="bg-gray-100 dark:bg-gray-800 py-3 px-2 flex items-center justify-around rounded-b-lg">
        <Button variant="ghost" size="sm" className="flex flex-col items-center p-1 h-auto">
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center p-1 h-auto">
          <Menu className="h-5 w-5 mb-1" />
          <span className="text-xs">Menu</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex flex-col items-center p-1 h-auto">
          <ArrowLeft className="h-5 w-5 mb-1 rotate-180" />
          <span className="text-xs">Back</span>
        </Button>
      </div>
    </div>
  )
}

export default function MobileShowcase() {
  const [device, setDevice] = useState<"phone" | "tablet">("phone")
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait")

  const toggleOrientation = () => {
    setOrientation(orientation === "portrait" ? "landscape" : "portrait")
  }

  const getDeviceClass = () => {
    if (device === "phone") {
      return orientation === "portrait"
        ? "w-[320px] h-[640px] mx-auto"
        : "w-[640px] h-[320px] mx-auto transform rotate-90"
    } else {
      return orientation === "portrait"
        ? "w-[420px] h-[720px] mx-auto"
        : "w-[720px] h-[420px] mx-auto transform rotate-90"
    }
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Mobile App Development</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We create beautiful, high-performance mobile applications for iOS and Android platforms.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4 dark:text-white">Cross-Platform Excellence</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our mobile development team specializes in creating cross-platform applications that deliver native-like
              experiences while maintaining a single codebase. This approach reduces development time and costs while
              ensuring consistent functionality across devices.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-3">
                  1
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">React Native & Flutter Expertise</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We leverage modern frameworks to build performant, beautiful mobile applications.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-3">
                  2
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">Progressive Web Apps</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    For web-based mobile experiences, we create PWAs that offer app-like functionality.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-3">
                  3
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">Native iOS & Android Development</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    When performance is critical, we build platform-specific applications using Swift and Kotlin.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                View Case Studies
              </Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 mb-10 lg:mb-0">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-3">
                  <Button
                    variant={device === "phone" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDevice("phone")}
                    className="flex items-center"
                  >
                    <Smartphone className="h-4 w-4 mr-2" />
                    Phone
                  </Button>
                  <Button
                    variant={device === "tablet" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDevice("tablet")}
                    className="flex items-center"
                  >
                    <Tablet className="h-4 w-4 mr-2" />
                    Tablet
                  </Button>
                </div>
                <Button variant="ghost" size="sm" onClick={toggleOrientation} className="flex items-center">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Rotate
                </Button>
              </div>

              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className={`border-4 border-gray-800 rounded-xl overflow-hidden shadow-2xl ${getDeviceClass()}`}
                >
                  <Tabs defaultValue="home" className="h-full">
                    <TabsContent value="home" className="m-0 h-full">
                      <MobileAppScreen title="Home">
                        <div className="space-y-4">
                          <div className="bg-purple-600 text-white p-4 rounded-lg">
                            <h3 className="font-bold mb-1">Welcome back, Alex!</h3>
                            <p className="text-sm opacity-90">Your fitness journey continues</p>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                              <div className="text-purple-600 font-bold text-xl">7,234</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Steps today</div>
                            </div>
                            <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                              <div className="text-pink-600 font-bold text-xl">3.2</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">Kilometers</div>
                            </div>
                          </div>

                          <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                            <h4 className="font-medium text-sm mb-2">Today's Workout</h4>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-xs">Upper Body</span>
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                  45 min
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full">
                                <div className="bg-purple-600 h-1.5 rounded-full w-3/4"></div>
                              </div>
                            </div>
                          </div>

                          <h4 className="font-medium text-sm">Activity Feed</h4>
                          <div className="space-y-2">
                            {[1, 2, 3].map((i) => (
                              <div
                                key={i}
                                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center space-x-2"
                              >
                                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                                <div className="flex-1">
                                  <div className="text-xs font-medium">Friend {i} completed a workout</div>
                                  <div className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </MobileAppScreen>
                    </TabsContent>
                  </Tabs>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
