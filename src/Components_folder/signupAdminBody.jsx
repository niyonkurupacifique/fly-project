import React,{component} from "react";
import logo from "./pictures/image33.png";
import logoo from "./pictures/Logo.png";
function SignupAdminBody()
{
    return(
        <div>
            <div className=' h-0  ml-14'>
            <img  width={140} src={logoo} alt="" />
            </div> 
            
        <div className="flex justify-between  pl-28 space-x-8">
            <div className="flex flex-col mt-40">
           <span className='font-headerFontFamily font-headerFontWeight text-xxxfontsize text-xxxcolor'>Create your Account</span> 
             <span className='font-headerFontFamily font-headerFontWeight text-mywordFontSize leading-xlineHeight text-xcolor'>to continue as Admin</span> 
             <div className='pt-6 space-y-5'>
                <div className=" space-x-5">
                    <input placeholder="First Name " className=' w-72' type="text" />
                    <input placeholder="Last Name " className=' w-72' type="text" />
                </div>
                <div>
                <input placeholder="" className=' w-96 border border-titleColor' type="text" />
                </div>
                <div className=" space-x-5">
                    <input placeholder=" " className=' w-72' type="text" />
                    <input placeholder="Security Question " className=' w-72' type="text" />
                </div>
            </div>
              <div className=" pt-14 flex flex-row  space-x-64">
                <span className=' pt-7 font-headerFontFamily font-titleFontWeight text-addfontSize leading-addlineHeight text-addColor'>Add new employee</span>
               
               <div className="pt-7">
                <button className='  border  rounded-xl bg-titleColor text-white text-center w-32 h-10 items-center font-headerFontFamily font-footerFontWeight text-adddfontSize  leading-xlineHeight'><span className=" p-3">Sign Up</span></button>
                </div> 
            </div>              
            </div>
            <div className=' pr-20 '>
                <img className="" width={500}  height={200} src={logo} alt="" />
            </div>
        </div>
      </div>
    
    )
}
export default SignupAdminBody