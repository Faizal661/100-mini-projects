import { categories } from "../data/projects";
import { CategoryCard } from "../components/CategoryCard";


  
  const HomePage = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">100 Mini DOM Projects</h1>
            <p className="text-gray-600 text-lg">
              Explore 100 creative projects to practice HTML, CSS, and JavaScript
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8  ">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;