import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Testimonials from "@/components/testimonials"
import TechSkills from "@/components/tech-skills"
import DataVisualization from "@/components/data-visualization"
import UIShowcase from "@/components/ui-showcase"





export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <TechSkills />
      <Portfolio />
      <DataVisualization />
      <UIShowcase />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  )
}



