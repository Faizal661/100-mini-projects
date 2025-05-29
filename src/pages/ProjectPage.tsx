"use client"

import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { categories } from "../data/projects"
import type { Project } from "../types"
import MeteorBackground from "../components/MeteorBackground"
import { ArrowLeft } from "lucide-react"

// Import project components
import BouncingBall from "../projects/BouncingBall"
import LikedEmojiPost from "../projects/LikedEmojiPost";

const ProjectPage = () => {
  const { id } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [category, setCategory] = useState<string>("")

  useEffect(() => {
    if (id) {
      const projectId = Number.parseInt(id)
      // Find the project in all categories
      for (const cat of categories) {
        const foundProject = cat.projects.find((p) => p.id === projectId)
        if (foundProject) {
          setProject(foundProject)
          setCategory(cat.title)
          break
        }
      }
    }
  }, [id])

  // Function to render the appropriate project component based on ID
  const renderProjectComponent = () => {
    if (!project) return null

    // Map project IDs to their respective components
    switch (project.id) {
      case 1: // Liked Emoji Post
        return <LikedEmojiPost />;
      case 41: // Bouncing Ball
        return <BouncingBall />
      // Add more cases for other projects
      default:
        return (
          <div className="text-center p-8 bg-slate-800 rounded-lg">
            <p className="text-xl text-white mb-4">Project "{project.title}" is coming soon!</p>
            <p className="text-gray-300">This project hasn't been implemented yet.</p>
          </div>
        )
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <MeteorBackground />
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-blue-400 hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2" size={16} /> Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <MeteorBackground />
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-blue-400 hover:underline mb-6">
          <ArrowLeft className="mr-2" size={16} /> Back to Home
        </Link>

        <div className="bg-slate-900 bg-opacity-80 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{project.emoji}</span>
            <div>
              <h1 className="text-3xl font-bold text-white">{project.title}</h1>
              <p className="text-gray-300">Category: {category}</p>
            </div>
          </div>
          <p className="text-gray-200 mb-6">{project.description}</p>
        </div>

        <div className="bg-slate-900 bg-opacity-80 rounded-lg p-6 min-h-[400px] flex items-center justify-center">
          {renderProjectComponent()}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage
