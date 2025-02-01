import { categories } from "../data/projects";
import { CategoryCard } from "../components/CategoryCard";
import MeteorBackground from "../components/MeteorBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-transparent">
      <MeteorBackground />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primaryDarkText ">
            100 Mini Projects
          </h1>
          <p className="text-secondaryDarkText text-lg">
            Explore 100 creative projects to practice React, HTML, CSS, and JavaScript
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8  ">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      <footer className="text-center py-4 bg-[#232142] text-white">
        <p>
        Built by &nbsp;
          <a
            href="https://github.com/Faizal661"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lime-400 hover:underline"
          >
            Mohammed Faizal T 
          </a>
          &nbsp;&nbsp;| No bugs, only features
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
