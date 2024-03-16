

const Recipe = ({ recipe }) => {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
    return (
        <div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src= {recipe_image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions ">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Recipe;