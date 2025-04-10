import Home from "./pages/Home/Home"
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Enquiry from "./pages/Enquiry/Enquiry";
import PrivacyAndTerms from "./components/PrivacyAndTerms";
import Header2 from "./components/Header2";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";


function App() {

  return (
    <>
    <div className="fixed top-0 left-0 w-full z-50">
    <Header />
    <div className=" hidden md:block">
   <Header2 />
    </div>
    </div>
    <div className="pt-16 md:pt-32">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/privacy-and-terms" element={<PrivacyAndTerms />} />
    </Routes>
    <Footer />
    <ScrollToTopButton />
    </div>
  {/* <Enquiry />
  <PrivacyAndTerms /> */}
    </>
  )
}

export default App
