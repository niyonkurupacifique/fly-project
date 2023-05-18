import React, { component } from "react";
import logo from "./pictures/Logo.png";
function Footer() {
  return (
    <div className="w-full">
      <div className=" justify-center ml-14 mr-12">
        <div className=" mt-10  border border-titleColor  ">
          <div className="grid grid-cols-4">
            <div className="mt-10 ml-8 flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <img width={120} src={logo} alt="" />

              <span className="  w-48">
                
                Every passenger deserves a comfortable and hassle-free travel
                experience, and we are committed to making that happen.
              </span>
              <div className="flex space-x-3 ">
                <div className="border  rounded-full">
                  <div className="p-3">
                    {" "}
                    <svg
                      width="9"
                      className=""
                      height="14"
                      viewBox="0 0 9 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.48252 2.24H6.31252C6.03252 2.24 5.68252 2.31 5.68252 2.8V5.04H8.48252V7.28H5.68252V14H3.44252V7.28H0.642517V5.04H3.44252V3.08C3.44252 1.05 4.42252 0 6.31252 0H8.48252V2.24Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="border  rounded-full">
                  <div className="p-3">
                    <svg
                      width="15"
                      height="14"
                      viewBox="0 0 15 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.6425 13.93H0.6325V4.27001H3.6425V13.93ZM2.1025 3.08001C1.1925 3.08001 0.5625 2.45001 0.5625 1.61001C0.5625 0.770015 1.1925 0.140015 2.1725 0.140015C3.1525 0.140015 3.7125 0.770015 3.7125 1.61001C3.7125 2.45001 3.1525 3.08001 2.1025 3.08001ZM14.5625 13.93H11.5525V8.61001C11.5525 7.35001 11.1325 6.51002 10.0125 6.51002C9.1725 6.51002 8.6825 7.07001 8.4725 7.63001C8.4025 7.84001 8.4025 8.12001 8.4025 8.40001V13.93H5.3925V7.35001C5.3925 6.16001 5.3225 5.18001 5.3225 4.27001H7.9125L8.0525 5.60001H8.1225C8.5425 4.97001 9.4525 4.06001 11.0625 4.06001C13.0225 4.06001 14.4925 5.39001 14.4925 8.19001V13.93H14.5625Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
                <div className="border  rounded-full">
                  <div className="p-3">
                    <svg
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.1625 3.13002V3.48002C13.1625 7.26002 10.2925 11.67 4.9725 11.67C3.3625 11.67 1.8225 11.18 0.5625 10.41C0.7725 10.41 1.0525 10.48 1.2625 10.48C2.5925 10.48 3.8525 9.99002 4.8325 9.22002C3.5725 9.22002 2.5225 8.38002 2.1725 7.26002C2.3825 7.26002 2.5225 7.33002 2.7325 7.33002C3.0125 7.33002 3.2925 7.33002 3.5025 7.26002C2.1725 6.98002 1.2625 5.86002 1.2625 4.46002V4.39002C1.2625 4.60002 2.0325 4.74002 2.5225 4.74002C1.7525 4.25002 1.1925 3.34002 1.1925 2.36002C1.1925 1.80002 1.3325 1.31002 1.6125 0.890017C3.0125 2.64002 5.1125 3.76002 7.5625 3.90002C7.4225 3.62002 7.3525 3.41002 7.3525 3.20002C7.3525 1.59002 8.6125 0.330017 10.2225 0.330017C11.0625 0.330017 11.7625 0.680017 12.3225 1.24002C12.9525 1.10002 13.5825 0.890017 14.1425 0.540017C13.9325 1.24002 13.4425 1.80002 12.8825 2.15002C13.4425 2.08002 14.0025 1.94002 14.5625 1.73002C14.1425 2.22002 13.7225 2.71002 13.1625 3.13002Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>

                <div className="border  rounded-full">
                  <div className="p-3">
                    <svg
                      width="15"
                      height="10"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2695 1.60799C14.1904 1.3102 14.0345 1.03839 13.8175 0.819727C13.6004 0.601069 13.3297 0.443231 13.0325 0.361993C11.9415 0.0679931 7.5625 0.0679932 7.5625 0.0679932C7.5625 0.0679932 3.1845 0.0679931 2.0925 0.361993C1.79529 0.443445 1.5246 0.601339 1.30739 0.81995C1.09018 1.03856 0.934036 1.31026 0.8545 1.60799C0.5625 2.70699 0.5625 4.99999 0.5625 4.99999C0.5625 4.99999 0.5625 7.29299 0.8545 8.39199C0.933821 8.68972 1.08991 8.96141 1.30717 9.17989C1.52442 9.39837 1.79522 9.55599 2.0925 9.63699C3.1845 9.93199 7.5625 9.93199 7.5625 9.93199C7.5625 9.93199 11.9405 9.93199 13.0315 9.63699C13.3288 9.5563 13.5997 9.39877 13.8168 9.18023C14.0339 8.96168 14.1897 8.68983 14.2685 8.39199C14.5625 7.29299 14.5625 4.99999 14.5625 4.99999C14.5625 4.99999 14.5625 2.70699 14.2695 1.60799ZM6.1305 7.08199V2.91799L9.7905 4.99999L6.1305 7.08199Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="  mt-20 flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <span className="font-footerFontFamily font-footerFontWeight text-FooterFontSize leading-footerLineHeight tracking-footerLetterSpacing ">
                Useful Links
              </span>
              <div className="   pt-10  flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
                <div>About US </div>
                <div>How we work </div>
                <div>Terms & Conditions  </div>
              </div>
            </div>
            <div className="mt-20 flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <span className="font-footerFontFamily font-footerFontWeight text-FooterFontSize leading-footerLineHeight tracking-footerLetterSpacing ">
                 Content 
              </span>
              <div className="   pt-10  flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <span>Home</span>
              <span>Privacy Policy </span>
              <span>Community </span>
              
              </div>
            </div>
            <div className="mt-20 flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <span className="font-footerFontFamily font-footerFontWeight text-FooterFontSize leading-footerLineHeight tracking-footerLetterSpacing ">
                 Contact US
              </span>
              <div className="   pt-10  flex flex-col space-y-5  font-footerFontFamily font-headerFontWeight text-myfontsize leading-footerContentLineHeight tracking-footerLetterSpacing">
              <span>flyright.manager@gmail.com</span>
              <span>+250788676671</span>
              <span>Social Media </span>
             </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}
export default Footer;
