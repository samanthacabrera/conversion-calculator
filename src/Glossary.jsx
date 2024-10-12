import React from 'react';
import { calcData } from './data'; 
import { Link } from 'react-router-dom'; 
import { calculatorRoutes } from './routes'; 

const Glossary = () => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-xl mb-2">List of All Calculators</h2>
      <ul className="w-full max-w-lg">
        {Object.keys(calcData).map((calcKey) => {
          const route = calculatorRoutes.find(route => route.calcType === calcKey);
          
          return (
            route && (
              <li key={calcKey} className="list-disc list-inside">
                <Link 
                  to={route.path} 
                  className="mb-1 hover:underline"
                >
                  {calcKey.charAt(0).toUpperCase() + calcKey.slice(1)}
                </Link>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default Glossary;
