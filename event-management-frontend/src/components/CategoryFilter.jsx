import React from "react";

const categories = [
  "All",
  "Music",
  "Technology",
  "Sports",
  "Food",
  "Business",
  "Education",
];

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-4 py-2 rounded-full transition ${
            selectedCategory === category
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-blue-100"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
