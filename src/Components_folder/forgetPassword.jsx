import React,{Component} from "react";
import pic from './pictures/forget.png'
import logo from './pictures/Logo.png'
import Header from "./header";
import { Link } from "react-router-dom";
function ForgetPassword(){
    return(
        <div className=" w-full">
            <div><Header></Header> </div>
            <div className="flex justify-center   pt-10">
            <div className="flex  justify-center ">
           {/* <div className='  pl-40'>
            <img src={pic} alt="" srcset="" />
          </div> */}
           <div >
           <div className=' border rounded-md shadow-2xl shadow-blue-400'>
            <div className="  pt-10  py-24">
            <div className="  ml-16 font-titleFontFamily font-titleFontWeight leading-xvvvvlineHeight text-textFontSizeeeee text-titleColor ">
            Forget Password?
            </div>
            <div className=" pl-12 flex flex-col space-y-2">
                <span className=" font-headerFontFamily text-forgetPasswordFontSize leading-forgetPasswordLineHeight">Enter the email address associated to your
account. </span>
                <input type="text"  placeholder="Email" className=' border-t-transparent border-x-transparent border-b-titleColor'/>
               
            </div>
            <div className="flex">
            <div className=" mt-2">
            <div class="flex space-x-3 h-5">
     
      <div className="flex flex-col">
   
  <div className=" mt-14 ml-16   font-headerFontFamily font-headerFontWeight text-headerFontSize leading-headerLineHeight ">Back to <span className="text-titleColor"><Link to='/login'> Log In </Link></span></div>
  </div>
    </div>
   
            </div>
           </div>
            <button className=" mt-6 items-center flex  justify-center   border bg-titleColor p-3 border-titleColor  w-44 rounded-xl ml-96  h-14 text-mywordFontSize leading-mywordLineHeight  font-titleFontFamily  font-footerFontWeight   text-white ">Reset</button>
            </div>
            </div>
           </div>
           </div>
           </div>
            {/* <LoginHeader/>
            <LoginBody/> */}
            
        </div>
    )
}
export default ForgetPassword