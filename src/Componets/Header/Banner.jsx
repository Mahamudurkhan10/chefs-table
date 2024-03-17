

const Banner = () => {
    return (
        <div className="mt-12" >
            <div className="hero  h-[500px]" style={{ backgroundImage: 'url(https://i.ibb.co/tKg7g8r/johnathan-macedo-4-NQEvx-W2-4w-unsplash.jpg)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" lg:w-4/6">
                        <h1 className="mb-5 lg:text-5xl text-2xl  font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-5 text-sm text-gray-300 font-normal ">
                            In my kitchen domain, where flavors collide,
                            I blend, I sauté, with culinary pride.
                            With each dish I create, a story unfolds wide,
                            As the coking chef, my artistry is amplified.</p>
                        <div className="flex items-center justify-center gap-5">
                            <button className="btn btn-success rounded-full text-lg text-black font-medium">Get Started</button>
                            <button className="btn btn-ghost rounded-full border-gray-400">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;