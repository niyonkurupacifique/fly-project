import React,{component, useState} from "react"
import bodypic from './pictures/Group 22.png'
import { useNavigate } from "react-router-dom"
import vector from './pictures/Vector.png'
import vector1 from './pictures/Vector (1).png'
import vector2 from './pictures/Vector (2).png'
import CircularIndeterminate from "./loading"


function Body()
{
  const[input,setInput]=useState("")
  const [error,setError]=useState("")
  const[inputStatus,setInputStatus]=useState(false)
  const [isLoading,setLoading]=useState(false)
  const navigate=useNavigate()
  const handleFileComplaintInput=(event)=>{
       setInput(event.target.value) 
       setInputStatus(false)
  }
 
  const HandleSubmit=async()=>{
    setLoading(true)
   let result= await fetch("https://tasty-bass-drawers.cyclic.app/api/complaint/",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(
      {
        "ticketNumber":input
      }
    )
   })
   result=await result.json()
   setLoading(false)
   if(result.error)
   {
    setError(result.message)
    console.log(result.message)
   setInputStatus(true)
    
   }
   else{
    const token=result.data
    console.log(token)
   navigate(`/inflight/${token}`)
   }
console.log(inputStatus)
  }
    return(
      <div className='w-full py-6'>
        <div className='flex smartphone:flex-col space-x-2 tablet:flex-row laptop:flex-row desktop:flex-row'>
       <div className=' relative w-full flex  mr-16  justify-end'><img height={600} width={880} className=' pt-9 max-w-full block  '  src={bodypic} alt="airplane" />
     <div className="absolute  left-14 ">  <span className="  pt-14 ml-8 font-headerFontFamily font-textFontWeight text-xxxfontsize leading-adddlineheight">Improving your flying<br/> <span className=" ml-6 text-titleColor"> Experience</span> one <br/> <span className="ml-6">Complaint at a time.</span></span></div>
       
       </div>
          
          
         
        </div>
        <div className="flex   w-5/6 justify-between  ml-24 border border-borderColor  shadow-lg  rounded-md">
              <div className="flex  p-10  space-x-14">
           <div className=" ml-14 space-y-3">
           <div className='  text-titleColor font-titleFontWeight text-titleFontSize leading-addddlineHeight'>
               <h1 className="smartphone:text-sm tablet:text-lg laptop:text-titleFontSize desktop:text-titleFontSize"> File your Complaint</h1>
             </div>
            <div  className=" font-headerFontFamily font-headerFontWeight text-headerFontSize leading-adddddddddlineHeight text-titleColor"> Enter your flight  Ticket Number  </div>
            <div  className='flex     font-headerFontFamily font-headerFontWeight text-myfontsize leading-mylineheight '>
               <input type="text"   onChange={handleFileComplaintInput} placeholder=".000" className={` w-72 border border-solid border-titleColor rounded-l-2xl pl-3 pr-3 rounded-trl-lg ${inputStatus?" text-red-700":"text-black"}`}>
               
                
               </input>
               <div className=' text-white flex justify-center items-center bg-titleColor px-7 py-4 rounded-r-2xl'>
               <button onClick={HandleSubmit}> <h1>SUBMIT</h1></button>
               </div>
             </div>
           { isLoading?<div className=" flex justify-center"><CircularIndeterminate></CircularIndeterminate></div>:error&&<div className=" border border-red-500"><div className=" flex p-1 justify-center font-headerFontFamily text-headerFontSize font-headerFontWeight leading-headerLineHeight text-red-600">{error}</div></div>}
           </div>
           <div className="  mr-28 space-y-3">
           <div className='  text-titleColor font-titleFontWeight text-titleFontSize leading-addddlineHeight'>
               <h1 className="smartphone:text-sm tablet:text-lg laptop:text-titleFontSize desktop:text-titleFontSize"> Track your Complaint  </h1>
             </div>
            <div  className=" font-headerFontFamily font-headerFontWeight text-headerFontSize leading-adddddddddlineHeight text-titleColor"> Enter your flight  Ticket Number  </div>
            <div  className='flex     font-headerFontFamily font-headerFontWeight text-myfontsize leading-mylineheight '>
               <input  type="number" placeholder=".000" className={`w-72 border border-solid border-titleColor rounded-l-2xl pl-3  pr-3 rounded-trl-lg `} >
               
                
               </input>
               <div className=' text-white flex justify-center items-center bg-titleColor px-7 py-4 rounded-r-2xl'>
               <button onClick={HandleSubmit}> <h1>SUBMIT</h1></button>
               </div>
             </div>
           </div>
          </div> 
          </div>
          <div className="ml-24 mt-8  flex  justify-between ">
            <div className="space-y-2">
              <div className="  w-12 border rounded-full  bg-borderColor">
              <img className="p-3" src={vector} alt="vector" />
              </div>
              <div className=" font-headerFontFamily font-textFontWeight text-textFontSize leading-tittttttttleLineHeight">Professional  Company</div>
              <div className=" font-headerFontFamily font-textFontWeight text-headerFontSize leading-adddddddddlineHeight text-black">

              Empower passengers like you<br/> to have a voice and hold <br/>airlines accountable for their<br/> actions. 
              </div>
            </div>
            <div className="space-y-2">
              <div className="  w-12 border rounded-full  bg-borderColor">
              <img className="p-3" src={vector1} alt="vector" />
              </div>
              <div className=" font-headerFontFamily font-textFontWeight text-textFontSize leading-tittttttttleLineHeight">24hrs Support  </div>
              <div className=" font-headerFontFamily font-textFontWeight text-headerFontSize leading-adddddddddlineHeight text-black">

              We offer 24-hour support to <br/> assist you with any questions<br/> or concerns you may have. 
              </div>
            </div>
            <div className="space-y-2 mr-20">
              <div className="  w-12 border rounded-full  bg-borderColor">
              <img className="p-3" src={vector2} alt="vector" />
              </div>
              <div className=" font-headerFontFamily font-textFontWeight text-textFontSize leading-tittttttttleLineHeight">Service in various 
countries</div>
              <div className=" font-headerFontFamily font-textFontWeight text-headerFontSize leading-adddddddddlineHeight text-black">

              Committed to delivering the<br/> same high-quality service to <br/>all of our customers, no matter <br/>where they are.
              </div>
            </div>
          </div>
        </div>
    )
}
export default Body