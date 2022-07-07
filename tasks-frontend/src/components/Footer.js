import { Link } from "react-router-dom";

function Footer() {
  return (
    // footer
    <footer class=" shadow-inner py-2 sticky top-[100vh]">
      {/* footer grid */}
      <div class=" grid grid-rows-2 gap-2 pt-1 justify-center items-center">
        {/* first row */}
        <div class="flex flex-row flex-wrap gap-10 justify-center items-end">
          {/* logo */}
          <div href="/" class="">
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
              <i class="font-semibold text-lg">Tasks</i>
            </a>
          </div>
          {/* links (tasks,new-task) */}
          <div>
            <div class="text-md inline-flex gap-4 ">
              <Link
                to="/home"
                class="hover:text-green-300  focus:text-green-500 font-semibold transition duration-300"
              >
                Tasks
              </Link>
              <Link
                to="/create"
                class="hover:text-green-300  focus:text-green-500 font-semibold transition duration-300"
              >
                New-Task
              </Link>
            </div>
          </div>
        </div>
        {/* Second row */}
        <div class="py-2 flex justify-center">
          <p class="text-xs">© Favour Adetunji. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
