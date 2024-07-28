import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const NavTow = () => {

const hanledmenu = () =>{
    const navDiloge = document.getElementById('nav-diloge')
    if(navDiloge){
        navDiloge.classList.toggle('hidden')
    }
    else{
    console.error('element not found')
    }
}


  return (
    <div>
      {/* nev section */}
      <div className="p-7">
        <nav className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/4JBJmW8/images-8.jpg"
              className="max-h-11 max-w-12 bg-cover"
              alt="logo"
            />
            <span>Youtube </span>
          </a>
          {/* menu icone */}
          <button  onClick={hanledmenu} className=" md:hidden btn text-2xl hover:rounded-full hover:border-2 px-2 py-2 hover:border-blue-400">
            <CiMenuBurger />
          </button>
          {/* Nav Link */}
          <div className="hidden md:flex items-center gap-6 hover:text-blue-500">
            <a href="/"> Home </a>
            <a href="/contac"> contact </a>
            <a href="/"> About </a>
            <a href="/"> Prefome </a>
          </div>
          <button className=" hidden md:block btn text-2xl hover:rounded-full hover:border-2 px-2 py-2 hover:border-blue-400">
            Login
          </button>

          {/* close button section */}

          <div id="nav-diloge" className=" hidden md:hidden p-6 fixed inset-0 bg-orange-300 h-[325px] ">
            <div className="flex  justify-between items-center">
              <a href="#" className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/4JBJmW8/images-8.jpg"
                  className="max-h-11 max-w-12 bg-cover"
                  alt="logo"
                />
                <span>Youtube </span>
              </a>
              <button onClick={hanledmenu} className=" md:hidden btn text-2xl hover:rounded-full hover:border-2 px-2 py-2 hover:border-blue-400">
                <IoClose />
              </button>
            </div>
            <div className=" flex flex-col items-center gap-6 hover:text-blue-500">
              <a href="/"> Home </a>
              <a href="/contac"> contact </a>
              <a href="/"> About </a>
              <a href="/"> Prefome </a>
              <button className="   btn text-2xl hover:rounded-full hover:border-2 px-2 py-2 hover:border-blue-400">
            Login
          </button>
            </div>
           
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavTow;
