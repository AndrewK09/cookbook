import { RecipeList } from '../../types';
import RecipeItem from './RecipeItem';

const RecipeList = ({ recipeList }: { recipeList: RecipeList }) => {
  return (
    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5">
      {recipeList.map((recipeItem) => (
        <RecipeItem key={recipeItem.name} recipeItem={recipeItem} />
      ))}
    </ul>
  );
};

export default RecipeList;
