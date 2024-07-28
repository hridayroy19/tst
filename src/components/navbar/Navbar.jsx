import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const handelmenu = () => {
    const navDiloge = document.getElementById("nav-diloge");
    if (navDiloge) {
      navDiloge.classList.toggle("hidden");
    } else {
      console.error("Element not found");
    }
  };

  // }
  return (
    <div>
      {/* start navbar  */}
      <nav className=" flex bg-slate-50 px-12  justify-between mt-4">
        <a href="#" className="flex gap-4 items-center">
          <img
            src="https://i.ibb.co/4JBJmW8/images-8.jpg"
            className=" max-h-11 max-w-12 object-cover"
            alt=""
          />
          <span> Youtube </span>
        </a>
        <div id="nave-menu" className=" hidden md:flex gap-8 items-center">
          <a href=""> Home </a>
          <a href=""> Home About </a>
          <a href=""> Projduct</a>
          <a href="">About</a>
          <a href=""> Home </a>
        </div>
        <button className=" hidden md:block border text-blue-600 px-4 border-blue-800 rounded-2xl py-1">
          {" "}
          Login
        </button>
        <button onClick={handelmenu} className=" md:hidden">
          <CiMenuBurger />
        </button>

        {/* button click woriking mediam divice menu bar */}
        <div
          id="nav-diloge"
          className=" hidden fixed md:hidden inset-0 bg-white"
        >
          <div className="flex justify-between items-center p-3">
            <a href="#" className="flex gap-4 items-center">
              <img
                src="https://i.ibb.co/4JBJmW8/images-8.jpg"
                className=" max-h-11 max-w-12 object-cover"
                alt=""
              />
              <span> Youtube </span>
            </a>
            <button onClick={handelmenu} className=" md:hidden">
              <IoClose className="text-black border-2 rounded-full text-2xl  " />
            </button>
          </div>
          <div className=" px-10 gap-5 font-medium text-sky-500 mt-6">
            <ul>
              <li>
                <a href=""> Home </a>
              </li>
              <li>
                <a href=""> Home </a>
              </li>
              <li>
                <a href=""> Home </a>
              </li>
              <li>
                <a href=""> Home </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
