import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { FaBars, FaHome, FaSearch, FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdHelpBuoy } from "react-icons/io";
import { MdKeyboardArrowDown,  } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useCard } from './CardContext'; // Import the context hook
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const [searchQuery, setSearchQuery] = useState(''); // Store search query
  const { cardData, setFilteredData } = useCard(); // Access card data from context
  const navigate = useNavigate();
  
  // State for theme management
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle search functionality
  const handleSearch = () => {
    if (searchQuery) {
      const filteredCards = cardData.filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredData(filteredCards); // Update the filtered data in the context
      navigate('/search'); // Navigate to search results
    }
  };

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      <div className="header flex lg:flex-row flex-col bg-white dark:bg-gray-800 items-center justify-between shadow-md">
        <div className="flex gap-3 m-3 items-center">
          <img
            src="https://ik.imagekit.io/os5tqthul/Cakes/Screenshot_2024-09-25_130807-removebg-preview.png?updatedAt=1727250073417"
            alt="logo"
            className="h-16 flex ml-16"
          />
          <p className="underline ml-5 text-lg hover:text-customRed">other</p>
          <MdKeyboardArrowDown className="text-customRed text-lg" />
        </div>

        <div className="lg:hidden flex items-center ml-80">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <nav
          className={`${
            isMenuOpen ? "grid" : "hidden"
          } lg:flex lg:flex-row flex-col gap-10 lg:mr-16 items-center`}
        >
          <ul className="flex flex-col lg:flex-row gap-10">
            <li>
              <Link to="/" className="flex gap-2 items-center text-lg hover:text-customRed">
                <FaHome className="text-xl" />
                Home
              </Link>
            </li>

            

            <li
              className="flex gap-2 items-center text-lg hover:text-customRed relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <FaSearch />
              {isHovered ? (
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Update search query state
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Perform search on 'Enter'
                  className="ml-2 border-b-2 border-gray-300 focus:outline-none focus:border-pink-600"
                  placeholder="Search..."
                />
              ) : (
                <span>Search</span>
              )}
            </li>

            <li className="flex gap-2 items-center text-lg hover:text-customRed">
              <BiSolidOffer />
              Offers <sup className="font-bold text-customRed">new</sup>
            </li>

            <li className="flex gap-2 items-center text-lg hover:text-customRed">
              <IoMdHelpBuoy />
              Help
            </li>

            <li>
              <Link to="/LoginSignupForm" className="flex gap-2 items-center text-lg hover:text-customRed">
                <FaUserCircle />
                Sign in
              </Link>
            </li>

            <li>
              <Link to="/cart" className="flex gap-2 items-center text-lg hover:text-customRed">
                <FaCartShopping className="text-xl" />
                Cart
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li>
              <button onClick={toggleTheme} className="flex items-center text-lg hover:text-customRed">
                {isDarkMode ? <BsFillSunFill /> : <BsFillMoonFill />}
                <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
