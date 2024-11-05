import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculatorRoutes } from './routes';
import { calcData } from './calcData'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const calcEntries = Object.values(calcData).flatMap(category =>
    Object.values(category).map(calc => ({
      calcType: calc.calcType,
      label: calc.label,
      desc: calc.desc,
    }))
  );

  const filteredEntries = calcEntries.filter(entry =>
    entry.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.calcType.toLowerCase().includes(searchTerm.toLowerCase()) || 
    entry.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const handleNavigation = (calcType) => {
        const route = calculatorRoutes.find(route => route.calcType === calcType);
        if (route) {
            navigate(route.path);
        }
    };

  return (
    <div className="invisible lg:visible absolute top-2 right-2 max-w-xs w-full z-50">
      <input
        type="text"
        placeholder="What are you trying to solve?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border border-black rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-black transition-shadow shadow-md hover:shadow-lg"
      />
      {searchTerm && (
        <div className="mt-2 bg-black border border-black rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredEntries.length > 0 ? (
            <ul>
              {filteredEntries.map(({ calcType, label }) => (
                <li
                  key={calcType}
                  onClick={() => handleNavigation(calcType)} 
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

export default Search;
