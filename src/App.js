import React, { useState } from "react";
import RecipeList from "./RecipeList";



function App() {
  return(
    <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3, 
    cookTime: '1:45',
    instructions: '1. Put salt on chicken\n 2. Put chicken in over\n 3. Eat chicken'
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5, 
    cookTime: '1:30',
    instructions: '1. Put paprika on pork\n 2. Put pork in over\n 3. Eat pork'
  }
]

export default App;
