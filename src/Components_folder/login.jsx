import React, { Component, useState } from "react";
import pic from "./pictures/Ellipse 5.png";
import logo from "./pictures/Logo.png";
import { Link } from "react-router-dom";
import Header from "./header";
 import CircularIndeterminate from "./loading";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);
  const handleusernameInput = (event) => {
    const username = event.target.value;
    setUsername(username);
  };
  const handlepasswordInput = (event) => {
    const password = event.target.value;
    setPassword(password);
  };
  async function handleLogin() {
    setLoading(true);
    console.log("clicked");
    console.log(isLoading);
    let result = await fetch(
      "https://tasty-bass-drawers.cyclic.app/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      }
    );
    result = await result.json();
    setLoading(false);
    if (result.error) {
      setErrorMessage(result.message);
    } else {
      const token=result.data.token
      navigate(`/signupemployer/${token}`);
          
        console.log(result.token )
    }
  }
  return (
    <div className=" w-full">
      <div>
        {" "}
        <Header></Header>{" "}
      </div>

      {isLoading ? (
        <div className="flex  justify-center">
          <CircularIndeterminate></CircularIndeterminate>
        </div>
      ) : (
        <div>
          <div className="  bg-red-500 text-white flex  justify-center  font-headerFontFamily font-headerFontWeight text-headerFontSize leading-headerLineHeight">
            {errorMessage}
          </div>
        </div>
      )}
      <div className="flex justify-center   pt-10">
        {/* <div className='  pl-40'>
            <img src={pic} alt="" srcset="" />
          </div> */}
        <div>
          <div className=" border rounded-md shadow-2xl shadow-blue-500">
            <div className=" pt-5  ml-40 p-6">
              <div className=" font-titleFontFamily font-titleFontWeight leading-anotherLineHeight text-anotherFontSize text-titleColor ">
                Welcome Back
              </div>

              <div className=" flex flex-col space-y-2">
                <input
                  onChange={handleusernameInput}
                  type="text"
                  placeholder="Email"
                  className=" border-t-transparent border-x-transparent border-b-titleColor"
                />
                <input
                  onChange={handlepasswordInput}
                  type="password"
                  placeholder="........."
                  className=" border-t-transparent border-x-transparent border-b-titleColor "
                />
              </div>
              <div className="flex">
                <div className=" mt-2">
                  <div class="flex space-x-3 h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required
                    />
                    <div className="  pb-40">
                      <label
                        for="remember"
                        class=" text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>

                <Link to="/forgetpassword">
                  {" "}
                  <div className=" mt-2  ml-64 font-headerFontFamily font-headerFontWeight text-headerFontSize leading-headerLineHeight text-titleColor">
                    forget password?
                  </div>
                </Link>
              </div>
              <button
                onClick={handleLogin}
                className=" border bg-titleColor p-3 border-titleColor  w-44 rounded-xl ml-36 text-mywordFontSize leading-mywordLineHeight  font-titleFontFamily  font-footerFontWeight   text-white "
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <LoginHeader/>
            <LoginBody/> */}
    </div>
  );
}
export default Login;
