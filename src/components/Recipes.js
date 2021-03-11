import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Link } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";
const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return (
    <>
      {error && <ErrorMsg />}
      {recipes &&
        !error &&
        !loading &&
        recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noonpener noreferrer"
            >
              <div
                style={{
                  background: `url(${recipe.recipe.image}) no-repeat center/cover`,
                }}
                className="recipeBg"
              ></div>
            </a>
            <div className="recipeInfo">
              <p>{recipe.recipe.label}</p>
              <p>{Math.floor(recipe.recipe.calories)} calories</p>
              <Link to={`/recipes/${recipe.recipe.label}`}> Viwe more</Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Recipes;
