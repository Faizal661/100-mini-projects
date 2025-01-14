import { Category } from "../types";
import { MovingCard } from "./MovingCard";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
      <div className="bg-transparent rounded-lg shadow-md p-6 hover:shadow-2xl transition-shadow duration-700">
        <h3 className="text-xl font-bold mb-2 text-primaryDarkText">{category.title}</h3>
        <p className="text-secondaryDarkText mb-4">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.projects.map((project) => (
             <MovingCard key={project.id} project={project} />
          //    <div
          //    key={project.id}
          //    className="bg-transparent p-4 rounded-md hover:bg-primaryLightText cursor-pointer  shadow-xl   hover:rotate-2  hover:scale-125 ease-in-out duration-300 delay-100 "
          //    onClick={() => console.log(`Navigate to project ${project.id}`)}
          //  >
          //    <span className="text-2xl mb-2 block">{project.emoji}</span>
          //    <h4 className="font-semibold text-primaryDarkText">{project.title}</h4>
          //    <p className="text-sm text-secondaryDarkText mt-1">{project.description}</p>
          //  </div>
          ))}
        </div>
      </div>
    );
  };