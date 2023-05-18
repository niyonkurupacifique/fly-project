import { useParams } from "react-router-dom";
import Header from "./header";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function SignupEmployer() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [jobTitle, setJobtitle] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { token } = useParams();

  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      fullName: fullname,
      email: email,
      phoneNumber: phoneNumber,
      jobTitle: jobTitle,
      address: address,
    };

    try {
      const response = await fetch(
        "https://tasty-bass-drawers.cyclic.app/api/employee/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();
      setLoading(false);
      console.log(result);

      if (result.error) {
        console.log(result.message);
        setError(result.message);
      } else {
        console.log(result.message);
        alert(result.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <Header />
      {loading && (
        <div className="fixed inset-0 bg-white  bg-opacity-60 z-50 flex items-center justify-center">
          <CircularProgress />
        </div>
      )}
      <div className="w-full">
        <div className="border shadow-2xl shadow-black w-fit mx-auto relative">
          <div className="p-9">
            <div className="flex justify-center font-titleFontFamily font-titleFontWeight leading-titleLineHeight text-titleColor text-textFontSize">
              Create Employee
            </div>
            {error && (
              <div className="flex justify-center text-red-500">{error}</div>
            )}
            <div className="mt-7 w-full flex justify-center">
              <div className="space-y-8 bg-white bg-opacity-75 p-4 rounded-md">
                <form className="space-y-5" onSubmit={handleSignup}>
                  <div className="space-x-2">
                    <input
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                      placeholder="Full Name"
                      className="w-96 border-t-transparent border-x-transparent"
                      type="text"
                    />
                  </div>
                  <div className="space-x-2">
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      placeholder="Email"
                      className="w-96 border-t-transparent border-x-transparent"
                      type="email"
                    />
                  </div>
                  <div className="space-x-2">
                    <input
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                      placeholder="PhoneNumber"
                      className="w-96 border-t-transparent border-x-transparent"
                      type="number"
                    />
                  </div>
                  <div className="space-x-2">
                    <input
                      onChange={(e) => {
                        setJobtitle(e.target.value);
                      }}
                      placeholder="jobTitle"
                      className="w-96 border-t-transparent border-x-transparent"
                      type="text"
                    />
                  </div>
                  <div className="space-x-2">
                    <input
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      placeholder="Address"
                      className="w-96 border-t-transparent border-x-transparent"
                      type="text"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupEmployer;
