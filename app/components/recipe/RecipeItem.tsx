import { Recipe } from '@/app/types';
import Image from 'next/image';

const RecipeItem = ({ recipeItem }: { recipeItem: Recipe }) => {
  const { name, thumbnailUrl } = recipeItem;

  return (
    <li className="group col-span-1 cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-md">
          <Image
            className="h-full w-full object-cover transition group-hover:scale-110 "
            src={thumbnailUrl}
            alt={name}
            fill
          />
        </div>
        <p className="group-hover:text-red-600">{name}</p>
      </div>
    </li>
  );
};

export default RecipeItem;
