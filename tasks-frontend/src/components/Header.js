import { Link } from "react-router-dom";

function Header() {
  //const btn = document.querySelector("button.mobile-menu-button");

  const toggle_nav = () => {
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    // Header
    <header>
      {/* navbar */}
      <nav class="bg-white shadow-lg">
        {/* Navbar Main */}
        <div class="max-w-6xl mx-auto pt-4 pb-2 px-4">
          <div class="flex justify-between items-center ">
            <div class="flex space-x-12">
              {/* Website Logo and Writeup */}
              <div class="p-0 m-0 flex md:items-center ">
                <a href="/" class="flex space-x-1 items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 266"
                    viewBox="0 0 46.99 48.49"
                    width="28"
                    height="32"
                    class="pb-2"
                  >
                    <path
                      fill="#34a853"
                      d="M268.88,301H266v3.86a1.5,1.5,0,0,1-3,0V301H249.74v3.86a1.5,1.5,0,0,1-3,0V301H233.51v3.86a1.5,1.5,0,0,1-3,0V301h-2.92a2.85,2.85,0,0,0-2.85,2.85v35.86a2.86,2.86,0,0,0,2.85,2.85h41.29a2.85,2.85,0,0,0,2.85-2.85V303.87A2.84,2.84,0,0,0,268.88,301Zm-7.52,13.91L245.5,330.79a1.49,1.49,0,0,1-1.06.44,1.51,1.51,0,0,1-1.06-.44l-8.27-8.27a1.5,1.5,0,0,1,2.13-2.12l7.2,7.2,14.8-14.79a1.5,1.5,0,0,1,2.12,2.12Z"
                      transform="translate(-224.74 -294.09)"
                      class="color231f20 svgShape"
                    ></path>
                    <path
                      fill="#34a853"
                      d="M233.51 295.59V301h-3v-5.43a1.5 1.5 0 113 0zM249.74 295.59V301h-3v-5.43a1.5 1.5 0 113 0zM266 295.59V301h-3v-5.43a1.5 1.5 0 113 0z"
                      transform="translate(-224.74 -294.09)"
                      class="color231f20 svgShape"
                    ></path>
                  </svg>
                  <i class="font-semibold text-lg ">Tasks</i>
                </a>
              </div>
              {/* Primary Navbar items */}
              <div class="hidden md:flex items-center space-x-1">
                <Link
                  to="/home"
                  class=" px-2  hover:text-green-300  focus:text-green-500 font-semibold transition duration-300"
                >
                  Tasks
                </Link>
                <Link
                  to="/create"
                  class=" px-2  hover:text-green-300  focus:text-green-500 font-semibold transition duration-300"
                >
                  New-Task
                </Link>
              </div>
            </div>
            {/* Secondary Navbar items */}
            <div class="hidden md:flex items-baseline space-x-3 ">
              <Link
                to="/login"
                class="px-2 font-semibold rounded hover:bg-green-300 hover:text-white focus:bg-green-500  focus:text-white transition duration-300"
              >
                Log In
              </Link>
              <a
                href="/"
                class=" px-2 font-semibold  hover:bg-green-300 rounded hover:text-white focus:bg-green-500  focus:text-white transition duration-300"
              >
                Sign Up
              </a>
            </div>
            {/* Mobile menu button */}
            <div class=" md:hidden flex items-center">
              <button
                class="mobile-menu-button active:ring-2 rounded-sm active:ring-green-700 transition duration-300"
                onClick={toggle_nav}
              >
                <svg
                  class=" w-6 h-6  text-green-700 "
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Navbar mobile menu */}
        <div class="hidden sm:hidden mobile-menu" id="mobile-menu">
          <ul class="">
            <li class="active">
              <Link
                to="/home"
                class="block text-sm px-2 py-2 focus:text-white hover:bg-green-200 focus:bg-green-500 font-semibold"
              >
                Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/create"
                class="block text-sm px-2 py-2 focus:text-white  hover:bg-green-200 focus:bg-green-500 font-semibold"
              >
                New-Tasks
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                class="block text-sm px-2 py-2 focus:text-white hover:bg-green-200 focus:bg-green-500 font-semibold"
              >
                Login
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-2 focus:text-white hover:bg-green-200 focus:bg-green-500 font-semibold"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
