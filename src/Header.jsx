import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { calculatorRoutes } from "./routes";
import { calcData } from "./calcData"; 

const Header = () => {
  const [showSearch, setShowSearch] = useState(false); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const searchInputRef = useRef(null); 
  const navigate = useNavigate();

  const calcEntries = Object.values(calcData).flatMap(category =>
    Object.values(category).map(calc => ({
      calcType: calc.calcType,
      label: calc.label,
      desc: calc.desc,
    }))
  );

  const filteredEntries = calcEntries.filter(entry =>
    entry.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    entry.calcType.toLowerCase().includes(searchQuery.toLowerCase()) || 
    entry.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNavigation = (calcType) => {
    const route = calculatorRoutes.find(route => route.calcType === calcType);
    if (route) {
      navigate(route.path);
    }
    setSearchQuery('');
    setShowSearch(false); 
  };
    
  useEffect(() => {
    const handleKeyDown = (e) => {
     
      if (e.shiftKey && e.key === "S") {
        e.preventDefault(); 
        setShowSearch((prev) => {
          if (!prev) {
            setSearchQuery(''); 
          }
          return !prev; 
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col items-center group space-y-4 py-4">
        <Link to="/">
            <h1 className="text-5xl lg:text-7xl tracking-tight font-bold lowercase mt-20">
            Calcalooza
            </h1>
        </Link>

        <p className="w-2/3 lg:max-w-4xl text-sm lg:text-base text-center text-gray-600 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Welcome to <span className="italic">Calcalooza</span>, your go-to tool for mastering basic algebra and geometry concepts. 
            Bookmark us for quick access and explore our wide range of tools below.
        </p>
            
        <p className="hidden lg:inline text-sm text-gray-500 text-center">
            Press <span className="font-bold"> Shift + S </span>to open the search bar at any page.
        </p>

        <div className="w-1/2 relative">
            <input
            ref={searchInputRef} 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
        </div>

        {searchQuery && (
            <div className="mt-2 bg-black border border-black rounded-md shadow-lg w-1/2 max-h-40 overflow-y-auto">
            {filteredEntries.length > 0 ? (
                <ul>
                {filteredEntries.map(({ calcType, label }) => (
                    <li
                    key={calcType}
                    onClick={() => handleNavigation(calcType)} // Close search bar after navigating
                    className="px-4 py-2 text-white cursor-pointer hover:bg-white hover:text-black transition-colors duration-150"
                    >
                    {label}
                    </li>
                ))}
                </ul>
            ) : (
                <div className="px-4 py-2 text-gray-100">No results found</div>
            )}
            </div>
        )}
    </div>

  );
};

export default Header;
