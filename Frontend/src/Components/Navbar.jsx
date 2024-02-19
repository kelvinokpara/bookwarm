import { Link } from "react-router-dom";
import logo from "../assets/Icons/Logos/bookwarm_logo.png";
import { LuUser } from "react-icons/lu";
import UserModal from "./Modals/UserModal";

const Navbar = () => {
  const userLoggedin = localStorage.getItem("userInfo");
  return (
    <div>
      <header className="shadow-md">
        <div className="relative flex max-w-screen-xl flex-col max-sm:justify-center overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center">
          <div className="flex items-center whitespace-nowrap text-2xl font-black">
            <span className="mr-2">
              <Link to={"/"}>
                <img
                  src={logo}
                  alt=""
                  className="w-200px max-md:w-[120px] md:w-[200px]"
                />
              </Link>
            </span>
          </div>
          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-4 right-7 cursor-pointer md:hidden"
            htmlFor="navbar-open"
          >
            <span className="sr-only">Toggle Navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start font-semibold"
          >
            <ul className="flex flex-row space-x-4 gap-y-2 flex-wrap items-center max-md:justify-center md:ml-auto md:flex-row md:space-y-0">
              <li className="text-gray-600 hover:text-accent">
                <a href="#">Pricing</a>
              </li>
              <li className="text-gray-600 md:mr-12 hover:text-accent">
                <a href="#">Features</a>
              </li>
              {userLoggedin && (
                <li className="text-gray-600 md:mr-12 hover:text-accent">
                  <Link to={"/libraries"}>Library</Link>
                </li>
              )}
              <li className="text-gray-600 md:mr-12 hover:text-accent">
                {userLoggedin ? (
                  <div className="relative p-2 rounded-full text-white bg-accent hover:scale-90 transition-all duration-300">
                    <p className="font-extrabold">
                      <LuUser />
                    </p>

                    {/* user modal here*/}
                    {/* <div className="absolute bg-red-700">
                      <UserModal>
                        {" "}
                        <button className="rounded-md border-2 border-accent px-6 py-1 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                          Logout
                        </button>
                      </UserModal>
                    </div> */}
                  </div>
                ) : (
                  <Link to={"/accounts/:register"}>
                    <button className="rounded-md border-2 border-accent px-6 py-1 font-medium text-accent transition-colors hover:bg-accent hover:text-white">
                      Get Started
                    </button>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
