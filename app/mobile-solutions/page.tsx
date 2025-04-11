import MobileShowcase from "@/components/mobile-showcase"
import PWAShowcase from "@/components/pwa-showcase"
import ResponsiveShowcase from "@/components/responsive-showcase"

export const metadata = {
  title: "Mobile Solutions - Auxlr",
  description: "Explore our mobile development solutions including PWAs and responsive web design.",
}

export default function MobileSolutionsPage() {
  return (
    <main className="pt-20">
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Mobile Development <span className="text-purple-600">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Creating exceptional mobile experiences that work across all platforms and devices.
            </p>
          </div>
        </div>
      </section>

      <MobileShowcase />
      <PWAShowcase />
      <ResponsiveShowcase />
    </main>
  )
}
