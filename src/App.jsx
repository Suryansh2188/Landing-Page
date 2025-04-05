import Home from "./pages/Home/Home"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Enquiry from "./pages/Enquiry/Enquiry";
import PrivacyAndTerms from "./components/PrivacyAndTerms";
import Header2 from "./components/Header2";
import AboutUs from "./components/AboutUs";


function App() {

  return (
    <>
    <Header />
    <div className=" hidden md:block">
   <Header2 />
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/privacy-and-terms" element={<PrivacyAndTerms />} />
    </Routes>
  {/* <Enquiry />
  <PrivacyAndTerms /> */}
    </>
  )
}

export default App
