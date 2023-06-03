import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import Offers from "./pages/Offers";


function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/offers" element={<Offers />} />
      </Routes>
     </Router>
    </>
  );
}

export default App;
