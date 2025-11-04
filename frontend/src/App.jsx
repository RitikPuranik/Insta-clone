import Signup from "./Auth/Signup";
import Home from "./Home";
import Login from "./Auth/Login";
import ForgotPassword from "./Auth/ForgotPassword";
import ResetPassword from "./Auth/ResetPassword";
import Post from "./UploadImage";

import { Route,Routes,} from "react-router-dom";
function App() {
  return (
   
       <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/home" element={<Home/>}/>
         <Route path="/forgot-password" element={<ForgotPassword/>}/>
         <Route path="/reset-password/:token" element={<ResetPassword/>}/>
         <Route path="/post" element={<Post/>}/>
       </Routes>

  );
}

export default App;