import { Category } from "../types";
import { MovingCard } from "./MovingCard";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
      <div className="bg-transparent rounded-lg shadow-xl p-6 hover:shadow-2xl transition-all duration-700">
        <h3 className="text-xl font-bold mb-2 text-primaryDarkText">{category.title}</h3>
        <p className="text-secondaryDarkText mb-4">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.projects.map((project) => (
            <>
             <MovingCard key={project.id} project={project} />
           
            </>
          ))}
        </div>
      </div>
    );
  };