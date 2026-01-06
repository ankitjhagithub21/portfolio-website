import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiries from "./pages/Enquiries";
import Header from "./components/Header";

import {Toaster} from "react-hot-toast"
import Background from "./components/Background";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enquiries" element={<Enquiries />} />
      </Routes>
     
      <Toaster/>
      <Background/>
    </BrowserRouter>
  );
}

export default App;
