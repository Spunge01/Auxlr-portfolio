"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Tablet, Laptop } from "lucide-react"

export default function ResponsiveShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeDevice, setActiveDevice] = useState("desktop")

  const devices = {
    mobile: {
      icon: <Smartphone className="h-5 w-5" />,
      width: "w-[320px]",
      height: "h-[568px]",
    },
    tablet: {
      icon: <Tablet className="h-5 w-5" />,
      width: "w-[768px]",
      height: "h-[1024px] scale-[0.6] origin-top",
    },
    laptop: {
      icon: <Laptop className="h-5 w-5" />,
      width: "w-[1024px]",
      height: "h-[768px] scale-[0.6] origin-top",
    },
    desktop: {
      icon: <Monitor className="h-5 w-5" />,
      width: "w-[1280px]",
      height: "h-[800px] scale-[0.5] origin-top",
    },
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Responsive Web Design</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our websites adapt seamlessly to any device, providing an optimal viewing experience.
          </p>
        </div>

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Card className="border-0 shadow-lg dark:bg-gray-800">
            <CardContent className="p-6">
              <Tabs defaultValue="desktop" className="w-full" onValueChange={(value) => setActiveDevice(value)}>
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-gray-100 dark:bg-gray-700">
                    <TabsTrigger value="mobile" className="flex items-center gap-2">
                      <Smartphone className="h-4 w-4" />
                      <span className="hidden sm:inline">Mobile</span>
                    </TabsTrigger>
                    <TabsTrigger value="tablet" className="flex items-center gap-2">
                      <Tablet className="h-4 w-4" />
                      <span className="hidden sm:inline">Tablet</span>
                    </TabsTrigger>
                    <TabsTrigger value="laptop" className="flex items-center gap-2">
                      <Laptop className="h-4 w-4" />
                      <span className="hidden sm:inline">Laptop</span>
                    </TabsTrigger>
                    <TabsTrigger value="desktop" className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <span className="hidden sm:inline">Desktop</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg overflow-hidden">
                  <div className="flex justify-center">
                    {Object.keys(devices).map((device) => (
                      <TabsContent key={device} value={device} className="mt-0">
                        <div
                          className={`bg-white dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 overflow-hidden ${
                            devices[device].width
                          } ${devices[device].height}`}
                        >
                          <div className="bg-gray-800 text-white p-2 flex items-center justify-between text-xs">
                            <div>Auxlr Demo</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-red-500"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                          </div>
                          <div className="p-4">
                            <div className="flex justify-between items-center mb-4">
                              <div className="font-bold text-xl dark:text-white">Auxlr</div>
                              <div className="flex gap-4">
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Home</div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Services</div>
                                <div className="text-gray-600 dark:text-gray-400 text-sm">Contact</div>
                              </div>
                            </div>
                            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mb-4">
                              <h3 className="font-bold text-lg mb-2 dark:text-white">Welcome to Auxlr</h3>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                We create beautiful, responsive websites that work on all devices.
                              </p>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mb-4">
                              {[1, 2, 3].map((i) => (
                                <div
                                  key={i}
                                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg flex flex-col items-center"
                                >
                                  <div className="w-8 h-8 bg-purple-600 rounded-full mb-2"></div>
                                  <div className="text-xs font-medium dark:text-white">Feature {i}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                          Viewing on {device} - {devices[device].width.replace("w-[", "").replace("]", "")}
                        </div>
                      </TabsContent>
                    ))}
                  </div>
                </div>
              </Tabs>

              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-semibold dark:text-white">Why Responsive Design Matters</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  With the increasing variety of devices used to access the web, responsive design ensures your website
                  provides an optimal experience for all users, regardless of their device. Our mobile-first approach
                  guarantees that your site works perfectly on smartphones, tablets, laptops, and desktops.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Improved User Experience</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Responsive sites adapt to provide the best layout for each device.
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Better SEO Performance</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Google prioritizes mobile-friendly websites in search results.
                    </p>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 dark:text-white">Cost-Effective</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Maintain one website instead of separate mobile and desktop versions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View Our Responsive Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
