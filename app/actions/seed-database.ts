"use server"

import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function seedDatabase() {
  try {
    const supabase = createServerSupabaseClient()

    // Seed projects
    const projects = [
      {
        title: "E-commerce Platform",
        category: "web",
        image_url: "/placeholder.svg?height=600&width=800",
        description:
          "A full-featured e-commerce platform with inventory management, payment processing, and analytics dashboard.",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Healthcare Mobile App",
        category: "mobile",
        image_url: "/placeholder.svg?height=600&width=800",
        description:
          "A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
        tags: ["React Native", "Firebase", "Redux"],
      },
      {
        title: "Financial Dashboard",
        category: "web",
        image_url: "/placeholder.svg?height=600&width=800",
        description: "An interactive dashboard for financial data visualization and analysis with real-time updates.",
        tags: ["Vue.js", "D3.js", "Express"],
      },
      {
        title: "Inventory Management System",
        category: "enterprise",
        image_url: "/placeholder.svg?height=600&width=800",
        description: "A comprehensive inventory management system for a multinational retail company.",
        tags: ["Angular", "Java", "PostgreSQL"],
      },
      {
        title: "Fitness Tracking App",
        category: "mobile",
        image_url: "/placeholder.svg?height=600&width=800",
        description:
          "A mobile application that tracks workouts, nutrition, and provides personalized fitness recommendations.",
        tags: ["Flutter", "GraphQL", "AWS"],
      },
      {
        title: "Cloud Migration",
        category: "enterprise",
        image_url: "/placeholder.svg?height=600&width=800",
        description: "Migration of legacy systems to cloud infrastructure for a financial services company.",
        tags: ["AWS", "Docker", "Kubernetes"],
      },
    ]

    // Seed team members
    const teamMembers = [
      {
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image_url: "/placeholder.svg?height=400&width=400",
        bio: "With over 15 years of experience in software development and business leadership, Sarah founded Auxlr with a vision to create innovative digital solutions.",
        social_linkedin: "#",
        social_twitter: "#",
        social_github: "#",
      },
      {
        name: "Michael Chen",
        role: "CTO",
        image_url: "/placeholder.svg?height=400&width=400",
        bio: "Michael leads our technical strategy and ensures we stay at the forefront of emerging technologies. He specializes in cloud architecture and AI integration.",
        social_linkedin: "#",
        social_twitter: "#",
        social_github: "#",
      },
      {
        name: "David Rodriguez",
        role: "Lead Developer",
        image_url: "/placeholder.svg?height=400&width=400",
        bio: "David oversees our development team and ensures code quality across all projects. He has expertise in multiple programming languages and frameworks.",
        social_linkedin: "#",
        social_twitter: "#",
        social_github: "#",
      },
      {
        name: "Emily Patel",
        role: "UX/UI Designer",
        image_url: "/placeholder.svg?height=400&width=400",
        bio: "Emily creates intuitive and engaging user experiences. Her designs combine aesthetics with functionality to deliver exceptional digital products.",
        social_linkedin: "#",
        social_twitter: "#",
        social_github: "#",
      },
    ]

    // Seed testimonials
    const testimonials = [
      {
        name: "John Smith",
        company: "TechCorp Inc.",
        image_url: "/placeholder.svg?height=100&width=100",
        quote:
          "Auxlr transformed our outdated systems into a modern, scalable platform. Their team was professional, responsive, and delivered beyond our expectations.",
        rating: 5,
      },
      {
        name: "Emily Rodriguez",
        company: "HealthPlus",
        image_url: "/placeholder.svg?height=100&width=100",
        quote:
          "Working with Auxlr on our healthcare app was a fantastic experience. They understood our unique requirements and delivered a secure, user-friendly solution.",
        rating: 5,
      },
      {
        name: "Michael Wong",
        company: "RetailGiant",
        image_url: "/placeholder.svg?height=100&width=100",
        quote:
          "The inventory management system Auxlr built has streamlined our operations and reduced costs. Their ongoing support has been exceptional.",
        rating: 4,
      },
    ]

    // Insert projects
    const { error: projectsError } = await supabase.from("projects").insert(projects)
    if (projectsError) {
      console.error("Error seeding projects:", projectsError)
      return { success: false, message: "Error seeding projects" }
    }

    // Insert team members
    const { error: teamError } = await supabase.from("team_members").insert(teamMembers)
    if (teamError) {
      console.error("Error seeding team members:", teamError)
      return { success: false, message: "Error seeding team members" }
    }

    // Insert testimonials
    const { error: testimonialsError } = await supabase.from("testimonials").insert(testimonials)
    if (testimonialsError) {
      console.error("Error seeding testimonials:", testimonialsError)
      return { success: false, message: "Error seeding testimonials" }
    }

    return { success: true, message: "Database seeded successfully" }
  } catch (error) {
    console.error("Error in seedDatabase:", error)
    return { success: false, message: "An unexpected error occurred" }
  }
}
