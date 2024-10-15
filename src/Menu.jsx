import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { calcData } from './data'; 

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-content') && !event.target.closest('.menu-button')) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button 
        className="z-50 menu-button fixed top-5 left-4 w-4 h-4 transition-all duration-500 focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {!isOpen ? (
          <>
            <span className="block relative h-0.5 w-full bg-black"></span>
            <span className="block relative h-0.5 w-full bg-black my-1"></span>
            <span className="block relative h-0.5 w-full bg-black"></span>
          </>
        ) : (
          <>
            <span className="block h-0.5 w-full bg-black transform rotate-45 absolute top-2"></span>
            <span className="block h-0.5 w-full bg-black transform -rotate-45 absolute top-2"></span>
          </>
        )}
      </button>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Dropdown */}
      <div 
        className={`menu-content fixed top-0 -left-1 h-screen bg-lime-200 transition-transform rounded-lg overflow-y-scroll duration-500 ease-in-out transform z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ 
          width: '300px', 
          border: '2px solid white', 
          scrollbarWidth: 'none' 
        }}
      >
        <div className="flex flex-col space-y-2 my-16 pl-12 pr-8 space-y-4">
          <h2 className="text-2xl tracking-wide">Quick Links</h2>
          <ul className="mb-1">
            <li className="hover:underline hover:scale-105 transition-all duration-100">
              <Link 
                to='/'
                onClick={() => {
                  window.scrollTo(0, 0);
                  closeMenu(); 
                }}
              >
                Home
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl tracking-wide">All Calculators</h2>
          {Object.entries(calcData).map(([category, calculators]) => (
                <div key={category}>
                    <ul className="space-y-2">
                        {Object.entries(calculators).map(([key, calculator]) => (
                            <li key={key} className="hover:underline hover:scale-105 transition-all duration-100">
                               <Link 
                                to={`calculator/${calculator.calcType}`}
                                onClick={() => {
                                  window.scrollTo(0, 0);
                                  closeMenu(); 
                                }}
                              >
                                {calculator.label}
                              </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>

      <style>{`
        .menu-content {
          scrollbar-width: none; /* Firefox */
        }
        .menu-content::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Edge */
        }
      `}</style>
    </div>
  );
};

export default Menu;
