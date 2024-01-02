import { useNavigate, useParams } from "react-router-dom";

import Input from "./Inputs/Input.jsx";
import logo from "../assets/Icons/Logos/bookwarm_logo.png";
import { useState, useEffect } from "react";
import {
  createUserAction,
  loginUserAction,
} from "../Redux/Actions/userAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({});

  // dispatch hook and useSelector
  const dispatch = useDispatch();
  const { createUser, loginUser } = useSelector((state) => state);

  // navigate hook from react-router-dom
  const navigate = useNavigate();

  const changeFunc = (e) => {
    // const { name, value } = e.target;
    console.log(e.target.value, "target value");
    setInputValue((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
    console.log(inputValue, "input value object");
  };

  // getting parameters from route
  const { id } = useParams();
  console.log(id, "route");

  const navigateHandler = useCallback(() => {
    {
      id === ":register"
        ? navigate("/accounts/:login")
        : id === ":login"
        ? navigate("/accounts/:register")
        : "";
    }
  }, [navigate, id]);

  const registerHandler = () => {
    dispatch(createUserAction(inputValue));
  };

  const loginHandler = () => {
    const user = { email: inputValue.email, password: inputValue.password };
    dispatch(loginUserAction(user));
    console.log(loginUser);
  };

  // use effect
  useEffect(() => {
    if (createUser.success) {
      navigateHandler();
    }

    if (loginUser.success) {
      navigate("/");
    }
  }, [createUser.success, loginUser.success, navigate, navigateHandler]);

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
              {id === ":register"
                ? "Welcome to Bookwarm!"
                : id === "login"
                ? "Sign in to Bookwarm!"
                : ""}
            </h4>
            <p className="mb-6 text-gray-500 text-xs">
              Your best online library platform for anything knowledge-based
            </p>

            <div id="" className="mb-4 ">
              {id === ":register" && (
                <Input
                  type={"text"}
                  typeText={"full name"}
                  name={"username"}
                  value={inputValue}
                  setInputValue={changeFunc}
                />
              )}
              <Input
                type={"email"}
                typeText={"email address"}
                name={"email"}
                value={inputValue}
                setInputValue={changeFunc}
              />
              <Input
                type={"password"}
                typeText={"password"}
                name={"password"}
                value={inputValue}
                setInputValue={changeFunc}
              />
              {/* button */}
              <div className="mb-4 mt-8">
                <button
                  className="grid w-full cursor-pointer select-none rounded-md border border-accent bg-accent py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-accent hover:bg-accent/90 hover:text-white focus:border-accent focus:bg-accent/90 focus:text-white focus:shadow-none trans"
                  onClick={
                    id === ":register"
                      ? registerHandler
                      : id === ":login"
                      ? loginHandler
                      : ""
                  }
                >
                  {id === ":register"
                    ? "Sign Up"
                    : id === ":login"
                    ? "Sign In"
                    : ""}
                </button>
              </div>
            </div>

            {id === ":register" ? (
              <p className="mb-4 text-center">
                Already have an account?
                <span
                  className="cursor-pointer text-accent no-underline hover:text-accent/80 trans"
                  onClick={navigateHandler}
                >
                  {" "}
                  sign in{" "}
                </span>
              </p>
            ) : id === ":login" ? (
              <p className="mb-4 text-center">
                New on Bookwarm?
                <span
                  className="cursor-pointer text-accent no-underline hover:text-accent/80 trans"
                  onClick={navigateHandler}
                >
                  {" "}
                  Create an account{" "}
                </span>
              </p>
            ) : (
              ""
            )}
            {/*  */}
          </div>
        </div>
        {/* <!-- /Register --> */}
      </div>
    </div>
  );
};

export default Form;
