import { List, Menu, Plus, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll
    document.body.classList.toggle('menu-open');
  };

  return (
    <nav className="flex flex-row justify-between h-40 px-16 py-8 bg-secondary text-foreground sm:px-4 relative">
      <Link to="/" className="flex flex-row items-center gap-4 font-bold text-[clamp(1.8rem,2vw,2rem)] z-20">
        <img src={Logo} alt="Logo - HRnet" className="h-full" />
        <h1 className="text-[clamp(1.8rem,2vw,2rem)] text-primary">HRnet</h1>
      </Link>

      {/* Mobile menu button */}
      <button
        className="lg:hidden flex items-center z-20"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop menu */}
      <ul className="lg:flex flex-row items-center gap-16 hidden">
        <li>
          <Link to="/" className="flex flex-row items-center gap-4 font-bold text-[clamp(1.8rem,2vw,2rem)] group">
            <Plus />
            <span className="relative group-hover:after:w-full after:content-[''] after:absolute after:bottom-2 after:left-0 after:w-0 after:h-[0.2rem] after:bg-primary after:transition-[width] after:duration-100 after:ease-in-out">
              Add employee
            </span>
          </Link>
        </li>
        <li>
          <Link to="/employees" className="flex flex-row items-center gap-4 font-bold text-[clamp(1.8rem,2vw,2rem)] group">
            <List />
            <span className="relative group-hover:after:w-full after:content-[''] after:absolute after:bottom-[-0.5rem] after:left-0 after:w-0 after:h-[0.2rem] after:bg-primary after:transition-[width] after:duration-100 after:ease-in-out">
              Current employees
            </span>
          </Link>
        </li>
      </ul>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 h-screen w-[80%] max-w-[300px] bg-secondary transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden z-20`}>
        <ul className="flex flex-col items-start gap-8 pt-40 px-8">
          <li className="w-full">
            <Link
              to="/"
              className="flex flex-row items-center gap-4 font-bold text-[clamp(1.6rem,2vw,1.8rem)] hover:text-primary transition-colors w-full"
              onClick={toggleMenu}
            >
              <Plus />
              <span>Add employee</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/employees"
              className="flex flex-row items-center gap-4 font-bold text-[clamp(1.6rem,2vw,1.8rem)] hover:text-primary transition-colors w-full"
              onClick={toggleMenu}
            >
              <List />
              <span>Current employees</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}