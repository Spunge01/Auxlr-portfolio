"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, BarChart, PieChart } from "lucide-react"

export default function DataVisualization() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("line")

  // Canvas drawing functions
  const drawLineChart = (ctx, width, height) => {
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Data points
    const data = [25, 40, 30, 50, 60, 75, 65, 80, 90, 85, 95]
    const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"]

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#94a3b8" // slate-400
    ctx.lineWidth = 1
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw data points and lines
    const pointSpacing = chartWidth / (data.length - 1)
    const maxValue = Math.max(...data)

    // Draw gradient
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, "rgba(147, 51, 234, 0.5)") // purple-600 with opacity
    gradient.addColorStop(1, "rgba(236, 72, 153, 0.1)") // pink-600 with opacity

    // Draw area
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - (data[0] / maxValue) * chartHeight)
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointSpacing
      const y = height - padding - (data[i] / maxValue) * chartHeight
      ctx.lineTo(x, y)
    }
    ctx.lineTo(padding + (data.length - 1) * pointSpacing, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()

    // Draw line
    ctx.beginPath()
    ctx.moveTo(padding, height - padding - (data[0] / maxValue) * chartHeight)
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointSpacing
      const y = height - padding - (data[i] / maxValue) * chartHeight
      ctx.lineTo(x, y)
    }
    ctx.strokeStyle = "#9333ea" // purple-600
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw points
    for (let i = 0; i < data.length; i++) {
      const x = padding + i * pointSpacing
      const y = height - padding - (data[i] / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = "#9333ea" // purple-600
      ctx.lineWidth = 3
      ctx.stroke()
    }

    // Draw labels
    ctx.fillStyle = "#64748b" // slate-500
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"

    for (let i = 0; i < labels.length; i++) {
      const x = padding + i * pointSpacing
      const y = height - padding + 20
      ctx.fillText(labels[i], x, y)
    }
  }

  const drawBarChart = (ctx, width, height) => {
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Data
    const data = [65, 75, 85, 90, 80, 70]
    const labels = ["Mobile", "Web", "API", "Database", "DevOps", "Security"]

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#94a3b8" // slate-400
    ctx.lineWidth = 1
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw bars
    const barWidth = (chartWidth / data.length) * 0.7
    const barSpacing = chartWidth / data.length
    const maxValue = 100 // Using percentage scale

    for (let i = 0; i < data.length; i++) {
      const x = padding + i * barSpacing + barSpacing / 2 - barWidth / 2
      const barHeight = (data[i] / maxValue) * chartHeight
      const y = height - padding - barHeight

      // Create gradient for each bar
      const gradient = ctx.createLinearGradient(x, y, x, height - padding)
      gradient.addColorStop(0, "#9333ea") // purple-600
      gradient.addColorStop(1, "#ec4899") // pink-600

      ctx.beginPath()
      ctx.rect(x, y, barWidth, barHeight)
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw value on top of bar
      ctx.fillStyle = "#64748b" // slate-500
      ctx.font = "bold 12px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`${data[i]}%`, x + barWidth / 2, y - 10)
    }

    // Draw labels
    ctx.fillStyle = "#64748b" // slate-500
    ctx.font = "12px sans-serif"
    ctx.textAlign = "center"

    for (let i = 0; i < labels.length; i++) {
      const x = padding + i * barSpacing + barSpacing / 2
      const y = height - padding + 20
      ctx.fillText(labels[i], x, y)
    }
  }

  const drawPieChart = (ctx, width, height) => {
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Data
    const data = [
      { value: 35, label: "Web Apps", color: "#9333ea" }, // purple-600
      { value: 25, label: "Mobile Apps", color: "#ec4899" }, // pink-600
      { value: 20, label: "Enterprise", color: "#3b82f6" }, // blue-500
      { value: 15, label: "E-commerce", color: "#10b981" }, // emerald-500
      { value: 5, label: "Other", color: "#f59e0b" }, // amber-500
    ]

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie segments
    let startAngle = -Math.PI / 2 // Start from top

    for (let i = 0; i < data.length; i++) {
      const sliceAngle = (data[i].value / total) * (Math.PI * 2)
      const endAngle = startAngle + sliceAngle

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = data[i].color
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()

      // Calculate label position
      const labelAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + Math.cos(labelAngle) * labelRadius
      const labelY = centerY + Math.sin(labelAngle) * labelRadius

      // Draw percentage
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(`${Math.round(data[i].value)}%`, labelX, labelY)

      startAngle = endAngle
    }

    // Draw legend
    const legendX = width - 150
    const legendY = 50

    for (let i = 0; i < data.length; i++) {
      const itemY = legendY + i * 25

      // Draw color box
      ctx.fillStyle = data[i].color
      ctx.fillRect(legendX, itemY, 15, 15)

      // Draw label
      ctx.fillStyle = "#64748b" // slate-500
      ctx.font = "14px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(`${data[i].label}`, legendX + 25, itemY + 7.5)
    }
  }

  // Canvas component with useEffect
  const Canvas = ({ draw, activeTab }) => {
    const canvasRef = useRef(null)

    useState(() => {
      const canvas = canvasRef.current
      if (!canvas) return

      const ctx = canvas.getContext("2d")
      const dpr = window.devicePixelRatio || 1

      // Set canvas size accounting for device pixel ratio
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      // Scale context to match device pixel ratio
      ctx.scale(dpr, dpr)

      // Draw chart
      draw(ctx, rect.width, rect.height)
    }, [draw, activeTab])

    return <canvas ref={canvasRef} className="w-full h-[400px]" style={{ width: "100%", height: "400px" }} />
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Data-Driven Development</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We leverage analytics and metrics to make informed decisions and deliver measurable results.
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
            <CardHeader>
              <CardTitle className="text-2xl dark:text-white">Project Success Metrics</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Interactive visualization of our project performance and client satisfaction metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="line" className="w-full" onValueChange={setActiveTab}>
                <div className="flex justify-center mb-6">
                  <TabsList className="bg-gray-100 dark:bg-gray-700">
                    <TabsTrigger value="line" className="flex items-center gap-2">
                      <LineChart className="h-4 w-4" />
                      <span>Growth</span>
                    </TabsTrigger>
                    <TabsTrigger value="bar" className="flex items-center gap-2">
                      <BarChart className="h-4 w-4" />
                      <span>Performance</span>
                    </TabsTrigger>
                    <TabsTrigger value="pie" className="flex items-center gap-2">
                      <PieChart className="h-4 w-4" />
                      <span>Distribution</span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="line">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 dark:text-white">Project Delivery Success Rate (2023)</h3>
                    <Canvas draw={drawLineChart} activeTab={activeTab} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Our project success rate has consistently improved throughout the year, reaching 95% on-time,
                      on-budget delivery.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="bar">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 dark:text-white">Technology Expertise Levels</h3>
                    <Canvas draw={drawBarChart} activeTab={activeTab} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Our team maintains high proficiency across all technology domains, with particular strength in API
                      development and database optimization.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="pie">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg">
                    <h3 className="text-lg font-medium mb-4 dark:text-white">Project Type Distribution</h3>
                    <Canvas draw={drawPieChart} activeTab={activeTab} />
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                      Web applications represent our largest project category, followed by mobile apps and enterprise
                      solutions.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
