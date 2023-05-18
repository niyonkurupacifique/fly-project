import React,{component} from "react";
import SignupAdminHeader from "./signupAdminHeader";
import SignupAdminBody from "./signupAdminBody";
function SignupAdmin()
{
    return(
        <div>
        <SignupAdminHeader></SignupAdminHeader>
        <SignupAdminBody></SignupAdminBody>
        </div>
    )
}
export default SignupAdmin