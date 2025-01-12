import { Category } from "../types";

export const CategoryCard = ({ category }: { category: Category }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-2xl transition-shadow duration-700">
        <h3 className="text-xl font-bold mb-2">{category.title}</h3>
        <p className="text-gray-600 mb-4">{category.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 p-4 rounded-md hover:bg-gray-100 cursor-pointer  shadow-xl hover:translate-x-4  hover:translate-y-4 transition-all hover:scale-110 ease-in duration-500	"
              onClick={() => console.log(`Navigate to project ${project.id}`)}
            >
              <span className="text-2xl mb-2 block">{project.emoji}</span>
              <h4 className="font-semibold">{project.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };