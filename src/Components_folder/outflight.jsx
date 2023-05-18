import React, { component } from "react";
import InflightAndOutFlightHeader from "./inFlightAndOutFlightHeader";
import { Link } from "react-router-dom";
import illustration from "./pictures/Rectangle 21.png";
import image1 from "./pictures/image 1.png";
import image5 from "./pictures/image 5.png";
import { useState } from "react";
function Outflight() {
  const [activeLink,setActiveLink]=useState("outflight")
  const [category,setCategory]=useState("")
  const handleClick=(link)=>{
  setActiveLink(link)
  }
  const handleSelectedCategory=(e)=>{
    setCategory(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className=" mx-14">
      <div className="flex  justify-center ">
        <div className=" w-2/3 ">
          <InflightAndOutFlightHeader />
          <div className=" border rounded-md shadow-2xl shadow-blue-400">
            <span className=" w-full flex justify-center font-headerFontFamily font-titleFontWeight text-forgetPasswordFontSize leading-xvvvvlineHeight text-titleColor">
              Welcome Back{" "}
            </span>
            <div className=" space-y-10 ">
              <div className="w-full flex justify-center space-x-72">
                <Link to="/inflight">
                  <span
                    id="title1"
                    className="font-headerFontFamily font-headerFontWeight text-mywordFontSize leading-mywordLineHeight"
                  >
                    In-flight{" "}
                  </span>
                </Link>
                <Link to="/outflight" onClick={()=>handleClick("outflight")}
                className={`${activeLink==="outflight"}`?"underline underline-offset-8 text-blue-500":"underline-none text-black"}
                
                
                >
                  {" "}
                  <span className=" mr-20 font-headerFontFamily font-headerFontWeight text-mywordFontSize leading-mywordLineHeight">
                    Out-flight{" "}
                  </span>
                </Link>
              </div>
              <select className=" w-5/6 rounded-xl ml-10" onChange={handleSelectedCategory}>
              <option value="">Category</option>
                    <option value="baggageProblems">Baggage Problems</option>
                    <option value="delayedFlight">Canceled /Delayed flight</option>
                    <option value="poorCustomerService">Poor customer Service</option>
              </select>
              <select className=" w-5/6 rounded-xl ml-10"  onChange={handleSelectedCategory}>
                    <option>Description  of complaint </option>
                    {
                      category==="baggageProblems"&&
                      <>
                      <option value='del'>Delayed Baggage</option>
                      <option value='damaged'>Damaged Baggage</option>
                      <option   value='missing'>Missing Baggage</option>
                      </>
                      
                    }
                     {
                      category==="delayedFlight"&&
                      <>
                      <option value='flightCancelation'>Flight Cancellation</option>
                      <option>Flight Delay</option>
                     
                      </>
                      
                    }
                     {
                      category==="poorCustomerService"&&
                      <>
                      <option>Unresponsive</option>
                      <option>Rude</option>
                      <option>Incompetent</option>
                      </>
                      
                    }
                  </select>
              <select className="  w-5/6 rounded-xl ml-10">
              <option>Preferred Solution  </option>
                    {
                      category==="del"&&
                      <>
                      <option value=''>Track the baggage and update on the status </option>
                      <option value=''>Delivery of baggage to passenger's residence or hotel</option>
                      <option   value=''>Providing toiletries and other necessary items for immediate use</option>
                      </>
                      
                    }
                     {
                      category==="flightCancelation"&&
                      <>
                      <option>Rebook on next  available flight </option>
                      <option>Offer a refund for the flight</option>
                      <option>Arrange for a flight on a different airline</option>
                      </>
                      
                    }
                     {
                      category==="poorCustomerService"&&
                      <>
                      <option>Unresponsive</option>
                      <option>Rude</option>
                      <option>Incompetent</option>
                      </>
                      
                    }
              </select>
              <div className=" relative border border-black w-5/6 ml-10  h-52">
              <span className=' absolute pl-4 pt-2 font-headerFontFamily font-headerFontWeight text-headerFontSize leading-adddddddddlineHeight'>Additional  Evidence </span>
                <div className="  flex justify-center ">
                  <div class="flex   justify-center mt-9 w-5/6 ">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-5/6   h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          aria-hidden="true"
                          class="w-10 h-10 mb-3 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          ></path>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span> or
                          drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input id="dropzone-file" type="file" class="hidden" />
                    </label>
                  </div>
                </div>
              </div>
              <div className=" ">
                <input
                  placeholder="Add comment "
                  className=" w-5/6 ml-10 h-40 border border-black "
                  type="text"
                />
              </div>
              <div className=" w-5/6 flex justify-end">
                {" "}
                <button className="bg-titleColor flex justify-end text-white p-3 px-8 rounded-2xl">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Outflight;
