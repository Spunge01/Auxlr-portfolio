"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter, Loader2 } from "lucide-react"
import { getTeamMembers } from "@/app/actions/team"

// Define the TeamMember type
type TeamMember = {
  id: string
  name: string
  role: string
  image_url: string
  bio: string
  social_linkedin: string | null
  social_twitter: string | null
  social_github: string | null
}

export default function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTeamMembers() {
      setIsLoading(true)
      try {
        const data = await getTeamMembers()
        setTeamMembers(data)
      } catch (error) {
        console.error("Error loading team members:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTeamMembers()
  }, [])

  // Fallback team members if database is empty
  const fallbackTeamMembers = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image_url: "/placeholder.svg?height=400&width=400",
      bio: "With over 15 years of experience in software development and business leadership, Sarah founded Auxlr with a vision to create innovative digital solutions.",
      social_linkedin: "#",
      social_twitter: "#",
      social_github: "#",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CTO",
      image_url: "/placeholder.svg?height=400&width=400",
      bio: "Michael leads our technical strategy and ensures we stay at the forefront of emerging technologies. He specializes in cloud architecture and AI integration.",
      social_linkedin: "#",
      social_twitter: "#",
      social_github: "#",
    },
    {
      id: "3",
      name: "David Rodriguez",
      role: "Lead Developer",
      image_url: "/placeholder.svg?height=400&width=400",
      bio: "David oversees our development team and ensures code quality across all projects. He has expertise in multiple programming languages and frameworks.",
      social_linkedin: "#",
      social_twitter: "#",
      social_github: "#",
    },
    {
      id: "4",
      name: "Emily Patel",
      role: "UX/UI Designer",
      image_url: "/placeholder.svg?height=400&width=400",
      bio: "Emily creates intuitive and engaging user experiences. Her designs combine aesthetics with functionality to deliver exceptional digital products.",
      social_linkedin: "#",
      social_twitter: "#",
      social_github: "#",
    },
  ]

  // Use fallback team members if database is empty
  const displayTeamMembers = teamMembers.length > 0 ? teamMembers : fallbackTeamMembers

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Team</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Meet the talented individuals who make Auxlr a leader in software development.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
          </div>
        ) : (
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            {displayTeamMembers.map((member) => (
              <Card
                key={member.id}
                className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image_url || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full flex justify-center space-x-4">
                      {member.social_linkedin && (
                        <a href={member.social_linkedin} className="text-white hover:text-purple-300 transition-colors">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {member.social_twitter && (
                        <a href={member.social_twitter} className="text-white hover:text-purple-300 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {member.social_github && (
                        <a href={member.social_github} className="text-white hover:text-purple-300 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1 dark:text-white">{member.name}</h3>
                  <p className="text-purple-600 dark:text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in joining our team? We're always looking for talented individuals.
          </p>
          <a
            href="#"
            className="text-purple-600 dark:text-purple-400 font-medium hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
          >
            View Open Positions →
          </a>
        </div>
      </div>
    </section>
  )
}
