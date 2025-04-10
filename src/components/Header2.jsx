import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header2() {
  // const scrollToSection = (id) => {
  //   const section = document.getElementById(id);
  //   if (section) section.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header className="text-gray-600 body-font shadow-sm sticky top-0 bg-white z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          
            <Logo />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 12l10 5 10-5" />
              <path d="M2 17l10 5 10-5" />
            </svg> */}
          {/* <span className="ml-3 text-xl font-semibold">MyTrands</span> */}
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-4">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          {/* <button onClick={() => scrollToSection("about")} className="hover:text-gray-900">About Us</button> */}
            <Link to="/about" className="hover:text-gray-900">About Us</Link>
          <Link to="/privacy-and-terms" className="hover:text-gray-900">Terms & Conditions</Link>
          <Link to="/enquiry" className="hover:text-gray-900">Contact Us</Link>
          {/* <button onClick={() => scrollToSection("terms")} className="hover:text-gray-900">Terms & Conditions</button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-gray-900">Contact Us</button> */}
        </nav>
      </div>
    </header>
  );
}
