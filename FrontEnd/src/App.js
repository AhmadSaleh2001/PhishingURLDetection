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
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Public Routes */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Tips" element={<Tips />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Route>

          {/* Protected Paths */}
          <Route element={<RequireAuth />}>
            <Route path="/Rates" element={<Rates />} />
            <Route path="/TrainModel" element={<TrainModel />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
