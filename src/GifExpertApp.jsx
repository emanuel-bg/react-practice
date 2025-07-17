import { useState } from "react";
import { GifGrid, AddCategory } from "./components";
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch man"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    console.log(categories);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      {/* Listado de Gifs */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* GifItem */}
    </>
  );
};
