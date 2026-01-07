import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiries from "./pages/Enquiries";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AdminContext";
import Login from "./components/Login";


function App() {

  const {admin} = useAuth();

  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/enquiries" element={admin ? <Enquiries /> : <Navigate to={"/login"}/>} />
      </Routes>
      <Toaster/>
      
    </BrowserRouter>
  );
}

export default App;
