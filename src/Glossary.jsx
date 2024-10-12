import React from 'react';
import { calcData } from './data'; 
import { Link } from 'react-router-dom'; 
import { calculatorRoutes } from './routes'; 

const Glossary = () => {
  return (
    <div className="flex flex-col justify-center w-3/4 text-left m-12 pl-12">
      <h2 className="text-2xl tracking-wide mb-2">List of All Calculators</h2>
      <ul className="grid grid-cols-1 gap-2">
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
              <li key={calcKey} className="list-none list-inside">
                <Link 
                  to={route.path} 
                  className="mb-1 hover:underline"
                >
                  {title}
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
