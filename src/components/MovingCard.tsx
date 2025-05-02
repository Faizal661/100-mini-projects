"use client"

import type React from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import type { Project } from "../types"

interface MovingCardProps {
  project: Project
}

export const MovingCard: React.FC<MovingCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/project/${project.id}`)
  }

  return (
    <div
      ref={cardRef}
      className="bg-transparent p-4 rounded-md cursor-pointer shadow-xl transition-all duration-300 hover:bg-slate-900 hover:scale-110 hover:-skew-x-2"
      onClick={handleClick}
    >
      <div className="transform transition-transform duration-200">
        <span className="text-2xl mb-2 block">{project.emoji}</span>
        <h4 className="font-semibold text-primaryDarkText">{project.title}</h4>
        <p className="text-sm text-secondaryDarkText mt-1">{project.description}</p>
      </div>
    </div>
  )
}
