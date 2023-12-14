import Input from "./Inputs/Input.jsx";
import logo from "../assets/Icons/Logos/bookwarm_logo.png";

const Form = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center text-gray-600 bg-gray-50">
      <div className="relative">
        <div className="hidden sm:block h-56 w-56 text-indigo-300 absolute a-z-10 -left-20 -top-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="a"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.6) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#a)"
            />
          </svg>
        </div>
        <div className="hidden sm:block h-28 w-28 text-indigo-300 absolute a-z-10 -right-20 -bottom-20">
          <svg
            id="patternId"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="b"
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="scale(0.5) rotate(0)"
              >
                <rect x="0" y="0" width="100%" height="100%" fill="none" />
                <path
                  d="M11 6a5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5 5 5 0 015 5"
                  strokeWidth="1"
                  stroke="none"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="800%"
              height="800%"
              transform="translate(0,0)"
              fill="url(#b)"
            />
          </svg>
        </div>
        {/* <!-- Register --> */}
        <div className="relative flex flex-col sm:w-[30rem] rounded-lg border-gray-400 bg-white shadow-lg px-4">
          <div className="flex-auto p-6">
            {/* <!-- Logo --> */}
            <div className="mb-10 flex flex-shrink-0 flex-grow-0 items-center justify-center overflow-hidden">
              <a
                href="#"
                className="flex cursor-pointer items-center gap-2 text-accent no-underline hover:text-accent/80 trans"
              >
                <span className="flex-shrink-0 text-3xl font-black lowercase tracking-tight opacity-100">
                  <img src={logo} alt="" width={180} />
                </span>
              </a>
            </div>
            {/* <!-- /Logo --> */}
            <h4 className="mb-2 font-medium text-gray-700 xl:text-xl">
              Welcome to Bookwarm!
            </h4>
            <p className="mb-6 text-gray-500 text-xs">
              Your best online library platform for anything knowledge-based
            </p>

            <form id="" className="mb-4 ">
              <Input type={"text"} typeText={"full name"} />
              <Input type={"email"} typeText={"email address"} />
              <Input type={"password"} typeText={"password"} />
              {/* button */}
              <div className="mb-4 mt-8">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-accent bg-accent py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-accent hover:bg-accent/90 hover:text-white focus:border-accent focus:bg-accent/90 focus:text-white focus:shadow-none trans"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mb-4 text-center">
              New on futurism?
              <a
                href="#"
                className="cursor-pointer text-accent no-underline hover:text-accent/80 trans"
              >
                {" "}
                Create an account{" "}
              </a>
            </p>
          </div>
        </div>
        {/* <!-- /Register --> */}
      </div>
    </div>
  );
};

export default Form;
