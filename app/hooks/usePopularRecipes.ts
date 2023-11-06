import { useState, useEffect } from 'react'
import axios from 'axios'

import { RecipeList } from '../types'

const useRecipes = (url: string) => {
  const [recipes, setRecipes] = useState<RecipeList>([])


  useEffect(() => {
    const getRecipes = async () => {
      const response = await axios.get(`/api/${url}`)
      setRecipes(response.data)
    }

    getRecipes()
  }, [])

  return { recipes }
}

export default useRecipes