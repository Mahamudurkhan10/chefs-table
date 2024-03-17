



const Cook = ({cook,handleRemoveCook,current}) => {
     

    return (
     
        <div className=" text-center mt-10 ">
            <div>
                <h1 className="text-2xl font-bold" > Want to cook :{cook.length} </h1>
                <div className="divider" ></div>
                <div className="flex  flex-col lg:flex-row justify-start lg:justify-center lg:items-center gap-[90px] text-lg lg:font-medium ">
                    <h1>Name</h1>
                    <h1>Time</h1>
                    <h1>Calories</h1>
                </div>
                {
                    cook.map((recipe,index) =><div className="  flex flex-col lg:flex-row gap-[75px] p-7 lg:ml-7 justify-start lg:justify-center lg:items-center text-lg font-medium  mt-4 rounded-xl  bg-gray-300" key={recipe.id} >
                           <p> {index+1} </p>
                            <p> {recipe.recipe_name} </p>
                            <p> {recipe.preparing_time} </p>
                            <p> {recipe.calories} </p>
                            <button className="btn btn-success rounded-full font-normal text-sm" onClick={()=>handleRemoveCook(recipe)}  >Preparing</button>
                    </div>)
                }
              
            </div>
            <div className="divider" ></div>
            <div>
                <h1 className="text-2xl font-bold" > Currently cooking: {current.length} </h1>
              <div className="divider"></div>
                <div className="flex  flex-col lg:flex-row justify-start lg:justify-center lg:items-center text-lg font-medium gap-[90px]">
                    <h1>Name</h1>
                    <h1>Time</h1>
                    <h1>Calories</h1>
                </div>
                {
                    current.map((recipe,index) =><div className="flex  flex-col lg:flex-row gap-[75px] p-7 text-lg font-medium  lg:ml-7 justify-start lg:justify-center lg:items-center  mt-4 rounded-xl  bg-gray-300" key={recipe.id} >
                           <p> {index+1} </p>
                            <p> {recipe.recipe_name} </p>
                            <p> {recipe.preparing_time} </p>
                            <p> {recipe.calories} </p>
                            <button className="btn btn-success rounded-full font-normal text-sm"   >Preparing</button>
                    </div>)
                }
              
            </div>
           
           
           
        </div>
    );
};

export default Cook;