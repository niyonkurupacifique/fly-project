import React,{component} from "react";
import logoo from "./pictures/Logo.png";
import { Link } from "react-router-dom";
import Header from "./header";
import InflightAndOutFlightHeader1 from "./inFlightAndOutFlightHeader1";

function InflightAndOutFlightHeader(){
   
    return(
        <div>
            <div className="  w-full ">
           <InflightAndOutFlightHeader1></InflightAndOutFlightHeader1>
            </div>
          
        </div>
    )
}
export default InflightAndOutFlightHeader