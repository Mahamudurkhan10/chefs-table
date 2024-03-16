import { useEffect } from "react";
import { useState } from "react";
import Recipe from "./Recipe";


const Recipes = () => {
    const [recipes,setRecipes]=useState([])
useEffect(()=>{
    fetch('dish.json')
    .then(res => res.json())
    .then(data =>setRecipes(data))
},[])

    return (
        <div>
            <h1> Recipes available: {recipes.length} </h1>
            <div className="grid grid-cols-2 gap-10" >{
                recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} ></Recipe> )
            }</div>
        </div>
    );
};

export default Recipes;