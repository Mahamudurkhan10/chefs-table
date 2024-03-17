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
        <>
          <div className="text-center lg:mt-7 mt-9">
            <h1 className="text-3xl font-bold ">Our Recipes  </h1>
            <p className="text-lg font-medium text-[#878787] mt-3">Marinate chicken in lemon, garlic, and herbs before grilling for a zesty and tender main dish.</p>
          </div>
        <div className="mt-10 container grid lg:grid-cols-2 gap-14">
               
            <div className="grid lg:grid-cols-2 gap-12" >
                {
                    recipes.map(recipe => <div className="" key={recipe.recipe_id} >
                        <Recipe recipe={recipe} handleCook={handleCook} ></Recipe>
                    </div>)

                }
                <ToastContainer />
            </div>

            <div className="card bg-slate-200" >
                <Cook cook={cook}
                    handleRemoveCook={handleRemoveCook}
                    current={current}
                ></Cook>
               
            </div>


        </div>
        </>
    );
};

export default Recipes;