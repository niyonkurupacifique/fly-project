import React, { useEffect, useState } from "react";
import InflightAndOutFlightHeader from "./inFlightAndOutFlightHeader";
import { Link, useParams } from "react-router-dom";

function Inflight() {
  const [activeLink, setActiveLink] = useState("inflight");
  const [category, setCategory] = useState("");
  const [cat, setCat] = useState("");
  const [catt, setCatt] = useState("");
  const [mydata, setData] = useState([]);
  const [description, setDescription] = useState([]);
  const [preferedSolution, setPreferedSolution] = useState([]);
  const[file,setFile]=useState(null)
  const { token } = useParams()
  const headers = new Headers();
  headers.append('Authorization', `Bearer ${token}`);
  const handleClick = (link) => {
    setActiveLink(link);
  };

  const handleSelectedCategory = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectedCat = (e) => {
    setCat(e.target.value);
    console.log(e.target.value);
  };
  const handleSelectedCatt = (e) => {
    setCatt(e.target.value);
    console.log( "i get youuuu"+e.target.value);
  };
  const handleFile = (e) => {
    setFile(e.target.files[0]);
    
  };
  const handleSubmit=()=>{
    console.log(file)
  }
  const postData = async () => {
    try {
      const url = "https://tasty-bass-drawers.cyclic.app/api/complaint/create";
      const formData = new FormData();
      formData.append("category", "example_category");
      formData.append("description", "example_description");
      formData.append("comment", "example_comment");
      formData.append("file", "file"); 
  
      const response = await fetch(url, {
        method: "POST",
        headers:headers,
        body: formData,
      });
  
      const data = await response.json(); 
  
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  };
  
  
  postData();
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://tasty-bass-drawers.cyclic.app/api/complaintcategory/all");
        const newresult = await result.json();
        setData(newresult.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDescription = async () => {
      const preferredDescription = await fetch("https://tasty-bass-drawers.cyclic.app/api/complaintcategory/64635489dda60404b9eda0d5/descriptions");
      const newPrefferedDescription = await preferredDescription.json();
      setDescription(newPrefferedDescription.data);
      console.log("description is:" + newPrefferedDescription);
    };

    const fetchPreferedSolution = async () => {
      const PrefferedResult = await fetch("https://tasty-bass-drawers.cyclic.app/api/description/64637cec2928d0b2a81e949e/preferredsolutions");
      const newPreferedResult = await PrefferedResult.json();
      setPreferedSolution(newPreferedResult.data);
      //  console.log(newPreferedResult)
    };

    fetchData();
    fetchDescription();
    fetchPreferedSolution();
  }, []);

  const renderDescriptionOptions = () => {
    if (category === "Food/Drinks") {
      return description.map((solution) => (
        <option key={solution.id} value={solution.id}>
          {solution.description}
        </option>
      ));
    }
    return null;
  };

  const renderPreferredSolutionOptions = () => {
    if (cat=== "Inadequate portions of food and drinks") {
      return preferedSolution.map((solution) => (
        <option key={solution.id} value={solution.id}>
          {solution.preferredSolution}
        </option>
      ));
    }
    return null;
  };

  return (
    <div className="mx-14">
      <div className="flex justify-center">
        <div className="w-2/3">
          <InflightAndOutFlightHeader />
          <div className="border rounded-md shadow-2xl shadow-blue-400">
            <span className="w-full flex justify-center font-headerFontFamily font-titleFontWeight text-forgetPasswordFontSize leading-xvvvvlineHeight text-titleColor">
              Welcome Back
            </span>
            <div className="space-y-10">
              <div className="w-full flex justify-center space-x-72">
                <Link
                  to="/inflight"
                  onClick={() => handleClick("inflight")}
                  className={`${activeLink === "inflight" ? "underline underline-offset-8 text-blue-500" : "no-underline text-black"}`}
                >
                  <span id="title1" className="font-headerFontFamily font-headerFontWeight text-mywordFontSize leading-mywordLineHeight">
                    In-flight
                  </span>
                </Link>
                <Link
                  to="/outflight"
                  onClick={() => handleClick("outflight")}
                  className={`${activeLink === "outflight" ? "underline text-blue-500" : "no-underline text-black"}`}
                >
                  <span className="mr-20 font-headerFontFamily font-headerFontWeight text-mywordFontSize leading-mywordLineHeight">
                    Out-flight
                  </span>
                </Link>
              </div>
              <select className="w-5/6 rounded-xl ml-10" onChange={handleSelectedCategory}>
                {mydata.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category}
                  </option>
                ))}
              </select>
              <select className="w-5/6 rounded-xl ml-10" onChange={handleSelectedCat}>
                <option>Description of complaint</option>
                {renderDescriptionOptions()}
              </select>
              <select className="w-5/6 rounded-xl ml-10" onChange={handleSelectedCatt}>
                <option>Preffered solution</option>
                {renderPreferredSolutionOptions()}
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
                          <input onChange={handleFile} id="dropzone-file" type="file" class="hidden" />
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
                    <button onClick={handleSubmit}  className="bg-titleColor flex justify-end text-white p-3 px-8 rounded-2xl">
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
export default Inflight