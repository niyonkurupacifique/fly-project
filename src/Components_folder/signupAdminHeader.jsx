import React,{component} from "react";
import logo from "./pictures/Logo.png";
function SignupAdminHeader()
{
    return(
        <div>
        <div>
        <div className="bg-red-500">
          <div className="lg:w-0 lg:flex-1">
            <img width={120} src={logo} alt="" />
    
          </div>
          
         
        </div>
      </div>
        </div>
    )
}
export default SignupAdminHeader