import { useEffect } from "react";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from "./Recipe";
import Cook from "../WantCook/Cook";


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [cook, setCook] = useState([])



    useEffect(() => {
        fetch('dish.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])


    const handleCook = (recipe) => {
        const clickCook = cook.find(cook => cook.recipe_id == recipe.recipe_id)
        const newCook = [...cook, recipe]
        if (!clickCook) {
            setCook(newCook)
        }
        else {
            toast('Already done. Please wait some minutes')
        }


    }
    const [current , setCurrent]=useState([])
    const handleRemoveCook = (recipe) => {
        const newCookId = cook.filter(cook => cook.recipe_id !== recipe.recipe_id)
           const newCurrent = [...current,recipe]
            setCurrent(newCurrent)
            setCook(newCookId)
        
    }

    return (
        <div className="mt-10 container grid grid-cols-2 gap-14">

            <div className="grid grid-cols-2 gap-12" >
                {
                    recipes.map(recipe => <div className="" key={recipe.recipe_id} >
                        <Recipe recipe={recipe} handleCook={handleCook} ></Recipe>
                    </div>)

                }
                <ToastContainer />
            </div>

            <div className="card bg-slate-200 textce" >
                <Cook cook={cook}
                    handleRemoveCook={handleRemoveCook}
                    current={current}
                ></Cook>
               
            </div>


        </div>
    );
};

export default Recipes;