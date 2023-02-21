import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Tips from "./pages/Tips";
import Product from "./pages/Product";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TrainModel from "./pages/TrainModel";
import Rates from "./pages/Rates";
import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tips" element={<Tips />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TrainModel" element={<TrainModel />} />
          <Route path="/Rates" element={<Rates />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
