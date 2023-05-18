
import Header from "./header";
import Footer from "./footer";
import logo from "./pictures/Logo.png";
import { IconName,MdOutlinePerson2 } from "react-icons/md";
import vector8 from './pictures/Vector (8).png'
import vector9 from './pictures/Vector (9).png'
import vector10 from './pictures/Vector (11).png'
import vector99 from './pictures/Vector (99).png'
import eclipse from './pictures/Ellipse 133.png'
import vector100 from './pictures/Vector (100).png'
import vector9999 from './pictures/Vector (9999).png'
import vector99999 from './pictures/Vector (99999).png'

function Dashboard() {
  return (
    <div className="flex">
     <div className=" pl-10">
     <div className=" ">
            <img width={120} src={logo} alt="" />
           
          </div>
          <div className=" space-y-9">
      <div className="  mt-10 ml-5">
        <div className=" flex space-x-2">
       
        <div className="  mt-1"> <MdOutlinePerson2/> </div> 
        <div className=""> My Profile  </div>
       

        </div>
         
      </div>
      <div className=" flex ml-5 space-x-2">
       
       <div className="  mt-1"> <img src={vector9} alt="" /> </div> 
       <div className="">Dashboard</div>
      

       </div>
       <div className=" flex ml-5 space-x-2">
       
        <div className="  mt-1"> <img src={vector10} alt="" /></div> 
        <div className="">Messages </div>
       

        </div>
        <div className=" flex ml-5 space-x-2">
       
       <div className="  mt-1"> <img src={vector10} alt="" /> </div> 
       <div className="">Info</div>
      

       </div>
       <div className=" flex ml-5 space-x-2 border rounded-md border-black">
       <div className=" p-1 relative">
       <div className="  absolute  mt-1"> <img src={vector8} alt="" /> </div> 
       <div className=" ml-6"> Log Out  </div>
       </div>

       </div>
       </div>
     </div>
     <div className=" ml-20 mt-9">
      <div className=" flex">
      <div  className=" font-headerFontFamily font-textFontWeight text-FooterFontSize leading-forgetPasswordLineHeight">
   <div className=" font-headerFontFamily font-textFontWeight text-mywordFontSize leading-forgetPasswordLineHeight">Welcome back, Kate!<br></br></div>
 We are happy to have you here!
   </div>
   <div    className=" ml-5">
<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative   w-96">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
 </div>
 <div className="flex space-x-3    ml-72">
        <div className="  w-6">
          <img  src={vector99} alt="" />
        </div>
        <div className="  w-6">
          <img src={vector100} alt="" />
        </div>
        <div className=" w-6">
          <img src={eclipse} alt="" />
        </div>
        </div>
      </div>
      <div className=" flex-col mt-10 space-y-5">
        <div>
        <div  className="  flex justify-between border rounded-md shadow-xl border-borderColor p-2">
          <div>
         
          </div>
          <div>Complaint </div>
          <div>Category  </div>
          <div>Description</div>
          <div>Status</div>
          <div className=" relative">
          Action
          </div>
        
        </div>
        </div>
        <div>
        <div  className="  flex justify-between border rounded-md shadow-xl border-borderColor p-2">
          <div>
          <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
   
</div>
          </div>
          <div>Complaint </div>
          <div>Category  </div>
          <div>Description</div>
          <div>Status</div>
          <div className=" relative">
          Action
          </div>
          <div className=" flex space-x-3">
          <div className="">
            <img className=" w-4" src={vector9999} alt="" />
          </div>
          <div  className="">
            <img src={vector99999} alt="" />
          </div>
          </div>
        </div>
        </div>
        <div>
        <div  className="  flex justify-between border rounded-md shadow-xl border-borderColor p-2">
          <div>
          <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
   
</div>
          </div>
          <div>Complaint </div>
          <div>Category  </div>
          <div>Description</div>
          <div>Status</div>
          <div className=" relative">
          Action
          </div>
          <div className=" flex space-x-3">
          <div className="">
            <img className=" w-4" src={vector9999} alt="" />
          </div>
          <div  className="">
            <img src={vector99999} alt="" />
          </div>
          </div>
        </div>
        </div>
        <div>
        <div  className="  flex justify-between border rounded-md shadow-xl border-borderColor p-2">
          <div>
          <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
   
</div>
          </div>
          <div>Complaint </div>
          <div>Category  </div>
          <div>Description</div>
          <div>Status</div>
          <div className=" relative">
          Action
          </div>
          <div className=" flex space-x-3">
          <div className="">
            <img className=" w-4" src={vector9999} alt="" />
          </div>
          <div  className="">
            <img src={vector99999} alt="" />
          </div>
          </div>
        </div>
        </div>
        <div>
        <div  className="  flex justify-between border rounded-md shadow-xl border-borderColor p-2">
          <div>
          <div class="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
   
</div>
          </div>
          <div>Complaint </div>
          <div>Category  </div>
          <div>Description</div>
          <div>Status</div>
          <div className=" relative">
          Action
          </div>
          <div className=" flex space-x-3">
          <div className="">
            <img className=" w-4" src={vector9999} alt="" />
          </div>
          <div  className="">
            <img src={vector99999} alt="" />
          </div>
          </div>
        </div>
        </div>
      </div>
     </div>
    </div>
  );
}

export default Dashboard;
