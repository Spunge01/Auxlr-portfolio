"use client"

import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ExternalLink, Loader2 } from "lucide-react"
import { getProjects } from "@/app/actions/projects"

// Define the Project type
type Project = {
  id: string
  title: string
  category: string
  image_url: string
  description: string
  tags: string[]
}

export default function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeTab, setActiveTab] = useState("all")
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProjects() {
      setIsLoading(true)
      try {
        const data = await getProjects()
        setProjects(data)
        setFilteredProjects(data)
      } catch (error) {
        console.error("Error loading projects:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadProjects()
  }, [])

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeTab))
    }
  }, [activeTab, projects])

  // Fallback projects if database is empty
  const fallbackProjects = [
    {
      id: "1",
      title: "E-commerce Platform",
      category: "web",
      image_url: "/placeholder.svg?height=600&width=800",
      description:
        "A full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "2",
      title: "Healthcare Mobile App",
      category: "mobile",
      image_url: "/placeholder.svg?height=600&width=800",
      description:
        "A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      tags: ["React Native", "Firebase", "Redux"],
    },
    {
      id: "3",
      title: "Financial Dashboard",
      category: "web",
      image_url: "/placeholder.svg?height=600&width=800",
      description: "An interactive dashboard for financial data visualization and analysis with real-time updates.",
      tags: ["Vue.js", "D3.js", "Express"],
    },
    {
      id: "4",
      title: "Inventory Management System",
      category: "enterprise",
      image_url: "/placeholder.svg?height=600&width=800",
      description: "A comprehensive inventory management system for a multinational retail company.",
      tags: ["Angular", "Java", "PostgreSQL"],
    },
    {
      id: "5",
      title: "Fitness Tracking App",
      category: "mobile",
      image_url: "/placeholder.svg?height=600&width=800",
      description:
        "A mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.",
      tags: ["Flutter", "GraphQL", "AWS"],
    },
    {
      id: "6",
      title: "Cloud Migration",
      category: "enterprise",
      image_url: "/placeholder.svg?height=600&width=800",
      description: "Migration of legacy systems to cloud infrastructure for a financial services company.",
      tags: ["AWS", "Docker", "Kubernetes"],
    },
  ]

  // Use fallback projects if database is empty
  const displayProjects = filteredProjects.length > 0 ? filteredProjects : fallbackProjects

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Portfolio</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab}>
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
              </div>
            ) : (
              <div
                ref={ref}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                style={{
                  transform: isInView ? "none" : "translateY(50px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
              >
                {displayProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden group border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image_url || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-6 w-full">
                          <Button variant="outline" className="text-white border-white hover:bg-white/20 w-full">
                            View Project <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-900/20"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
