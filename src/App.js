import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/Header";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import ForgetPassword from "./pages/ForgetPassword";
import Offers from "./pages/Offers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        
      />
    </>
  );
}

export default App;
