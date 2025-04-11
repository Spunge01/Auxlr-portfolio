"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  Check,
  ChevronsUpDown,
  CreditCard,
  Download,
  Laptop,
  Moon,
  Palette,
  Plus,
  Settings,
  Sun,
  User,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function UIShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("buttons")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [sliderValue, setSliderValue] = useState([50])

  return (
    <section id="design" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">UI Design System</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our attention to detail and commitment to user experience is reflected in our clean, intuitive UI
            components.
          </p>
        </div>

        <div
          ref={ref}
          className="max-w-4xl mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Card className="border-0 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl dark:text-white">Component Library</CardTitle>
                <CardDescription className="dark:text-gray-400">
                  Explore our custom-designed UI components
                </CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} aria-label="Toggle component theme" />
                <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buttons" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-8 overflow-x-auto pb-2">
                  <TabsList className="bg-gray-100 dark:bg-gray-700">
                    <TabsTrigger value="buttons">Buttons</TabsTrigger>
                    <TabsTrigger value="inputs">Inputs</TabsTrigger>
                    <TabsTrigger value="cards">Cards</TabsTrigger>
                    <TabsTrigger value="dropdowns">Dropdowns</TabsTrigger>
                    <TabsTrigger value="misc">Misc</TabsTrigger>
                  </TabsList>
                </div>

                <div className={isDarkMode ? "bg-gray-900 p-8 rounded-lg" : "bg-white p-8 rounded-lg border"}>
                  <TabsContent value="buttons" className="space-y-8">
                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Button Variants
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <Button>Default</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Button Sizes
                      </h3>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button size="lg">Large</Button>
                        <Button>Default</Button>
                        <Button size="sm">Small</Button>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Button States
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <Button>Default</Button>
                        <Button disabled>Disabled</Button>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                            Animated
                          </Button>
                        </motion.div>
                        <Button className="relative">
                          <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                          </span>
                          With Badge
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Button with Icons
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <Button>
                          <Plus className="mr-2 h-4 w-4" /> Create New
                        </Button>
                        <Button variant="outline">
                          <Download className="mr-2 h-4 w-4" /> Download
                        </Button>
                        <Button variant="secondary">
                          Settings <Settings className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="ghost">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="inputs" className="space-y-8">
                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Text Inputs
                      </h3>
                      <div className="grid gap-4 max-w-md">
                        <div className="grid gap-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="disabled">Disabled</Label>
                          <Input id="disabled" disabled placeholder="This input is disabled" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="with-icon">With Icon</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input id="with-icon" className="pl-10" placeholder="Username" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Select & Dropdown
                      </h3>
                      <div className="grid gap-4 max-w-md">
                        <div className="grid gap-2">
                          <Label htmlFor="framework">Framework</Label>
                          <Select>
                            <SelectTrigger id="framework">
                              <SelectValue placeholder="Select a framework" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="next">Next.js</SelectItem>
                              <SelectItem value="react">React</SelectItem>
                              <SelectItem value="vue">Vue</SelectItem>
                              <SelectItem value="angular">Angular</SelectItem>
                              <SelectItem value="svelte">Svelte</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Slider
                      </h3>
                      <div className="grid gap-4 max-w-md">
                        <div className="grid gap-2">
                          <div className="flex justify-between">
                            <Label htmlFor="slider">Value: {sliderValue}%</Label>
                          </div>
                          <Slider
                            id="slider"
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            value={sliderValue}
                            onValueChange={setSliderValue}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="cards" className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>Account</CardTitle>
                          <CardDescription>Manage your account settings</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                John Doe
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="ghost">Cancel</Button>
                          <Button>Save</Button>
                        </CardFooter>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>Payment Method</CardTitle>
                          <CardDescription>Add a new payment method</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-4">
                            <CreditCard className="h-10 w-10 text-gray-400" />
                            <div>
                              <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                                Visa ending in 4242
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Expires 12/24</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full">Add New Card</Button>
                        </CardFooter>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="dropdowns" className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Dropdown Menu
                        </h3>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                              Options <ChevronsUpDown className="ml-2 h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>

                      <div>
                        <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          Tooltip
                        </h3>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="outline">Hover Me</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>This is a tooltip</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="misc" className="space-y-8">
                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Badges
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Destructive</Badge>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Avatars
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                          <AvatarFallback>CD</AvatarFallback>
                        </Avatar>
                      </div>
                    </div>

                    <div>
                      <h3 className={`text-lg font-medium mb-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                        Status Indicators
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Online</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Away</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Offline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                            <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-green-500 animate-ping opacity-75"></div>
                          </div>
                          <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>Animated</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between border-t dark:border-gray-700 pt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                All components are fully accessible and responsive
              </p>
              <div className="flex items-center gap-2">
                <Laptop className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Responsive Design</span>
                <Check className="h-4 w-4 text-green-500" />
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our design system ensures consistency and quality across all our projects.
          </p>
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              <Palette className="h-5 w-5" />
              Discuss Your Design Needs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
