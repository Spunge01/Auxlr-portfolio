"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Layers, Smartphone, Terminal, Zap } from "lucide-react"

export default function TechSkills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [activeTab, setActiveTab] = useState("frontend")

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Django", level: 80 },
      { name: "Laravel", level: 75 },
      { name: "Spring Boot", level: 70 },
      { name: "GraphQL", level: 85 },
    ],
    mobile: [
      { name: "React Native", level: 90 },
      { name: "Flutter", level: 85 },
      { name: "Swift", level: 75 },
      { name: "Kotlin", level: 80 },
      { name: "Ionic", level: 70 },
      { name: "Xamarin", level: 65 },
    ],
    database: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Elasticsearch", level: 75 },
    ],
    devops: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "AWS", level: 90 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 80 },
      { name: "Monitoring", level: 85 },
    ],
  }

  const tabIcons = {
    frontend: <Globe className="h-5 w-5" />,
    backend: <Terminal className="h-5 w-5" />,
    mobile: <Smartphone className="h-5 w-5" />,
    database: <Database className="h-5 w-5" />,
    devops: <Layers className="h-5 w-5" />,
  }

  const codeSnippets = {
    frontend: `// React component with hooks
import { useState, useEffect } from 'react';

function DataFetcher({ endpoint }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [endpoint]);
  
  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;
}`,
    backend: `// Express.js API route with middleware
import express from 'express';
import { authenticate } from './middleware';

const router = express.Router();

router.get('/api/users', authenticate, async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;`,
    mobile: `// React Native component
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
    </View>
  );
}`,
    database: `-- SQL query with joins and aggregation
SELECT 
  c.name AS category_name,
  COUNT(p.id) AS product_count,
  AVG(p.price) AS avg_price
FROM 
  products p
JOIN 
  categories c ON p.category_id = c.id
WHERE 
  p.active = true
GROUP BY 
  c.name
HAVING 
  COUNT(p.id) > 5
ORDER BY 
  product_count DESC;`,
    devops: `# Docker Compose configuration
version: '3'

services:
  web:
    build: ./web
    ports:
      - "3000:3000"
    depends_on:
      - api
    environment:
      - API_URL=http://api:4000
      
  api:
    build: ./api
    ports:
      - "4000:4000"
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_PORT=5432
      
  db:
    image: postgres:13
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_PASSWORD=password
      - POSTGRES_USER=user
      - POSTGRES_DB=myapp

volumes:
  postgres_data:`,
  }

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Our Technical Expertise</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions.
          </p>
        </div>

        <Tabs defaultValue="frontend" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <TabsList className="bg-gray-100 dark:bg-gray-800">
              {Object.keys(skills).map((category) => (
                <TabsTrigger key={category} value={category} className="flex items-center gap-2">
                  {tabIcons[category]}
                  <span className="capitalize">{category}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {Object.keys(skills).map((category) => (
            <TabsContent key={category} value={category}>
              <div
                ref={ref}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                style={{
                  transform: isInView ? "none" : "translateY(50px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
              >
                <Card className="border-0 shadow-md dark:border-gray-800 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 dark:text-white">
                      {category.charAt(0).toUpperCase() + category.slice(1)} Technologies
                    </h3>
                    <div className="space-y-6">
                      {skills[category].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <motion.div
                              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2.5 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            ></motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {skills[category].map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-800"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-md dark:border-gray-800 dark:bg-gray-800">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                      <Code className="h-5 w-5 text-purple-600" />
                      Sample Code
                    </h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm">
                      <pre className="whitespace-pre-wrap">
                        <code>{codeSnippets[category]}</code>
                      </pre>
                    </div>
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2 dark:text-white">Why we excel in {category} development:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                        <li>Years of experience with industry-standard tools and frameworks</li>
                        <li>Continuous learning and adoption of best practices</li>
                        <li>Performance optimization and scalability focus</li>
                        <li>Comprehensive testing and quality assurance</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our team stays at the forefront of technology trends, continuously learning and implementing the latest
            advancements.
          </p>
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all"
            >
              <Zap className="h-5 w-5" />
              Discuss Your Project
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
