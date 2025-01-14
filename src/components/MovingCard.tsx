import { useState, useRef } from 'react';
import { Project } from '../types';

interface RotationState {
  x: number;
  y: number;
}

interface MovingCardProps {
  project: Project;
}

export const MovingCard: React.FC<MovingCardProps> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState<RotationState>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate cursor position relative to card center
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation based on cursor position
    // Divide by larger values to reduce rotation intensity
    const rotateY = mouseX / (rect.width / 8);
    const rotateX = -mouseY / (rect.height / 8);

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = (): void => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="bg-transparent p-4 rounded-md cursor-pointer shadow-xl transform-gpu transition-all duration-200 hover:bg-black hover:scale-125 hover:rotate-2"
      style={{
        transform: `
          perspective(1000px) 
          rotateX(${rotation.x}deg) 
          rotateY(${rotation.y}deg)
          scale(${Math.abs(rotation.x) > 0 || Math.abs(rotation.y) > 0 ? 1.05 : 1})
        `,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => console.log(`Navigate to project ${project.id}`)}
    >
      <div className="transform transition-transform duration-200">
        <span className="text-2xl mb-2 block">{project.emoji}</span>
        <h4 className="font-semibold text-primaryDarkText">{project.title}</h4>
        <p className="text-sm text-secondaryDarkText mt-1">{project.description}</p>
      </div>
    </div>
  );
};