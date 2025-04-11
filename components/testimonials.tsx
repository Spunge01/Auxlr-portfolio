"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Loader2 } from "lucide-react"
import { getTestimonials } from "@/app/actions/testimonials"

// Define the Testimonial type
type Testimonial = {
  id: string
  name: string
  company: string
  image_url: string | null
  quote: string
  rating: number
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTestimonials() {
      setIsLoading(true)
      try {
        const data = await getTestimonials()
        setTestimonials(data)
      } catch (error) {
        console.error("Error loading testimonials:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTestimonials()
  }, [])

  // Fallback testimonials if database is empty
  const fallbackTestimonials = [
    {
      id: "1",
      name: "John Smith",
      company: "TechCorp Inc.",
      image_url: "/placeholder.svg?height=100&width=100",
      quote:
        "Auxlr transformed our outdated systems into a modern, scalable platform. Their team was professional, responsive, and delivered beyond our expectations.",
      rating: 5,
    },
    {
      id: "2",
      name: "Emily Rodriguez",
      company: "HealthPlus",
      image_url: "/placeholder.svg?height=100&width=100",
      quote:
        "Working with Auxlr on our healthcare app was a fantastic experience. They understood our unique requirements and delivered a secure, user-friendly solution.",
      rating: 5,
    },
    {
      id: "3",
      name: "Michael Wong",
      company: "RetailGiant",
      image_url: "/placeholder.svg?height=100&width=100",
      quote:
        "The inventory management system Auxlr built has streamlined our operations and reduced costs. Their ongoing support has been exceptional.",
      rating: 4,
    },
  ]

  // Use fallback testimonials if database is empty
  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">What Our Clients Say</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Don't just take our word for it. Here's what our clients have to say about working with Auxlr.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-purple-600" />
          </div>
        ) : (
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{
              transform: isInView ? "none" : "translateY(50px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
          >
            {displayTestimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="border-0 shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-800"
              >
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image_url || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
