

const Recipe = ({recipe,handleCook}) => {
      const {recipe_name, recipe_image,short_description,ingredients,preparing_time,calories}=recipe;
    return (
        <div>
             
          
           
          <div className="card w-96 bg-base-100 shadow-xl">
             <figure><img src={recipe_image} alt="Shoes" /></figure>
             <div className="card-body">
                 <h2 className="card-title font-semibold text-2xl text-black"> {recipe_name} </h2>
                 <p className="text-sm font-medium text-[#878787]" > {short_description} </p>
                 <div className="divider " ></div>
                 <h1 className="text-xl font-medium" > Ingredients : {ingredients.length} </h1>
                     <div className="text-lg font-normal  text-[#878787]">
                         <li> {ingredients[0].slice(0,20)} </li>
                         <li> {ingredients[1].slice(0,20)} </li>
                         <li> {ingredients[2].slice(0,20)} </li>
                     </div>
                
                 <div className="divider"></div>
                   <div className="flex justify-between">
                         <p><i className="fa-regular fa-clock "></i><span className="ml-3 text-xl font-medium" >{preparing_time}</span></p>
                         <p><i className="fa-solid fa-droplet "></i><span className="ml-3 text-xl font-medium " > {calories} </span> </p>
                     </div>  
                 
                     <div className="">
                     <button onClick={()=>handleCook(recipe)}  className="btn  btn-success rounded-full p-2 text-lg text-gray-200">Want to Cook</button>
                    
                 </div>
               
             </div>
         </div>
               
           
          
           </div>
       
    );
};

export default Recipe;