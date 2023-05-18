import React, { component } from "react";
import Header from "./header";
import apic from "./pictures/Group 2121.png";
function HowWeWork() {
  return (
    <div>
      <Header></Header>
      <div className="flex ml-24">
        <div className=" space-y-5">
          <div className=" font-headerFontFamily font-textFontWeight text-textFontSizeeeee leading-xvlineHeight">
            Experience the seamless process <br></br> of resolving flight issues
            with<br></br> <span className=" text-titleColor"> Fly Right</span>
          </div>
          <div className=" w-96 font-headerFontFamily font-textFontWeight text-headerFontSize leading-adddddddddlineHeight">
            Our software makes it easy for you to report issues, so you can have
            peace of mind knowing that your voice is heard. We are dedicated to
            improving customer service in the airline industry, and we work hard
            every day to make sure that your experience is as smooth and
            stress-free as possible.
          </div>
          <div>
            <div className=" pt-5">
              {" "}
              <button
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Learn More
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className=" ml-9">
          <img width={500} src={apic} alt="" />
        </div>
      </div>
      <div
        style={{ width: "86%" }}
        className=" ml-24 pt-8  border rounded-md shadow-md h-28 mt-7 bg-adxdColor"
      >
        <div className="flex justify-between pl-6 pr-6">
          <div className=" font-headerFontFamily font-textFontWeight">Stat speaks for Themselves</div>
          <div> 98% User Satisfaction </div>
          <div>5M+ Cool Number</div>
          <div>4.9 Google Reviews</div>
          <div className=" ">27+ API Integration</div>
        </div>
      </div>
    </div>
  );
}
export default HowWeWork;



