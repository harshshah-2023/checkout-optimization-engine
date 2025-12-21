import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import HowItWorks from "./pages/HowItWorks";
import Benefits from "./pages/Benefits";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/HowItWorks" element={<HowItWorks/>} />
        <Route path="/Benefits" element={<Benefits/>}/>
        <Route path="/Terms" element={<Terms/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
