


const Navbar = () => {
    return (
        <div className="mt-9" >
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href=""  className="font-normal text-lg text-[#150B2BB3]">Home</a></li>
        <li>
          <a href="" className="font-normal text-lg text-[#150B2BB3] " >Recipes</a>
         
        </li>
        <li><a  href=""  className="font-normal text-lg text-[#150B2BB3] " >About</a></li>
        <li><a href="" className="font-normal text-lg text-[#150B2BB3] " >Search</a></li>
      </ul>
    </div>
    <a href="" className="btn btn-ghost font-bold text-gray-500 text-3xl">Recipe <span className="text-green-500" > Calories</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href="" className="font-normal text-lg text-[#150B2BB3] " >Home</a></li>
      <li>     <a href="" className="font-normal text-lg text-[#150B2BB3] ">Recipes</a>   </li>
      <li><a href=""  className="font-normal text-lg text-[#150B2BB3] ">About</a></li>
      <li><a href=""  className="font-normal text-lg text-[#150B2BB3] " >Search</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <label className="input rounded-full input-bordered flex items-center  gap-5">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text" className="grow " placeholder="Search" />
  
  </label>
    <span className="rounded-full p-3 bg-[#0BE58A]" ><i className="fa-regular fa-2xl fa-circle-user"></i></span>
  </div>
</div>
        </div>
    );
};

export default Navbar;