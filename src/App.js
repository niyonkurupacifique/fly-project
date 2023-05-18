
import Main from "./Components_folder/main";
import Login from "./Components_folder/login";
import { Route, Routes } from 'react-router-dom';
import ForgetPassword from "./Components_folder/forgetPassword";
import SignupAdmin from "./Components_folder/signupAdmin";
import Inflight from "./Components_folder/inFlight";
import Outflight from "./Components_folder/outflight";
 import HowWeWork from "./Components_folder/how";
import img from './gtttt.jpg'
import Dashboard from "./Components_folder/dashboard";
import SignupEmployer from "./Components_folder/signupEmployer";



function App() {
  return (
    <div className="App">
     <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/home" element={<Main/>} />
                <Route path="/login"  element={<Login/>} />
                <Route path="/forgetpassword"  element={<ForgetPassword/>} />
                <Route path="/signupadmin"  element={<SignupAdmin/>} />
                <Route path="/inflight/:token"  element={<Inflight/>} />
                <Route path="/outflight"  element={<Outflight/>} />
                <Route path="/howwework"  element={<HowWeWork/>} />
                <Route path="/dashboard"  element={<Dashboard></Dashboard>} />
                <Route path="/signupemployer/:token"  element={<SignupEmployer></SignupEmployer>} />
                

                
      </Routes>
    </div>
    
  );
}

export default App;
