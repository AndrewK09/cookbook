'use client';

import RecipeList from '../components/recipe/RecipeList';
import useRecipes from '../hooks/usePopularRecipes';

const PopularPage = () => {
  const { recipes } = useRecipes('recipes/list');

  return (
    <section className="">
      <h1>Popular Recipes</h1>

      <RecipeList recipeList={recipes} />
    </section>
  );
};

export default PopularPage;
