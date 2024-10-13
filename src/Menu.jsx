import React, { useState, useEffect } from 'react';
import { calcData } from './data'; 
import { Link } from 'react-router-dom'; 
import { calculatorRoutes } from './routes'; 

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
      {/* Toggle */}
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

      {/* Overlay */}
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
        <div className="flex flex-col space-y-2 my-16 pl-12 pr-8 space-y-6">
          <h2 className="text-2xl tracking-wider">Quick Links</h2>
          <ul className="mb-1">
            <li className="hover:underline hover:scale-105 transition-all duration-200">
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

          <h2 className="text-2xl tracking-wider">All Calculators</h2>
          <ul className="space-y-4">
            {Object.keys(calcData).map((calcKey) => {
              const route = calculatorRoutes.find(route => route.calcType === calcKey);
              
              const title = route 
                ? route.component === 'VolumeCalc' 
                  ? `Volume of a ${calcKey.replace('Volume', '').charAt(0).toUpperCase() + calcKey.replace('Volume', '').slice(1)} Calculator`
                  : route.component === 'AreaCalc' 
                    ? `Area of a ${calcKey.replace('Area', '').charAt(0).toUpperCase() + calcKey.replace('Area', '').slice(1)} Calculator`
                    : `Converting Units of ${calcKey.charAt(0).toUpperCase() + calcKey.slice(1)} Calculator`
                : 'Calculator'; 

              return (
                route && (
                  <li key={calcKey} className="hover:underline hover:scale-105 transition-all duration-200">
                    <Link 
                      to={route.path} 
                      onClick={() => {
                        window.scrollTo(0, 0);
                        closeMenu(); 
                      }}
                    >
                      {title}
                    </Link>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style jsx>{`
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
