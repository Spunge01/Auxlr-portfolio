"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
import { seedDatabase } from "@/app/actions/seed-database"
import { useToast } from "@/hooks/use-toast"

export default function SeedDatabasePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{ success?: boolean; message?: string } | null>(null)
  const { toast } = useToast()

  const handleSeedDatabase = async () => {
    setIsLoading(true)
    try {
      const result = await seedDatabase()
      setResult(result)

      if (result.success) {
        toast({
          title: "Success",
          description: result.message,
          variant: "default",
        })
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error seeding database:", error)
      setResult({ success: false, message: "An unexpected error occurred" })
      toast({
        title: "Error",
        description: "An unexpected error occurred while seeding the database.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md dark:bg-gray-800 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl dark:text-white">Seed Database</CardTitle>
          <CardDescription className="dark:text-gray-400">
            Populate the database with initial data for projects, team members, and testimonials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This action will add sample data to your database. Use this to quickly set up your portfolio website with
            demo content.
          </p>
          {result && (
            <div
              className={`p-4 rounded-md mb-4 ${
                result.success
                  ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300"
                  : "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
              }`}
            >
              {result.message}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button
            onClick={handleSeedDatabase}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Seeding Database...
              </>
            ) : (
              "Seed Database"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
