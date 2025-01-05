import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => setIsNavOpen(!isNavOpen);
  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 backdrop-blur-[2px]">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a href="#">
            <img src="/logo.svg" width={40} height={40} alt="Hardik Gujrathi" />
          </a>
        </h1>
      <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden" onClick={handleNavOpen}>
            <span className="material-symbols-rounded">
              {isNavOpen ? "close" : "menu"}
            </span>
          </button>
          {/* Mobile navbar */}
          <Navbar navOpen={isNavOpen} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
