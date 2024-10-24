import React from 'react';
import { useLocation } from 'react-router-dom'; 
import { calcData } from './data';
import { calculatorRoutes } from './routes'; 

const Glossary = () => {
    const location = useLocation(); 
    const currentPath = location.pathname; 
    const currentCalcType = calculatorRoutes.find(route => currentPath.includes(route.path))?.calcType;

    const glossary = Object.keys(calcData).flatMap(category => 
        Object.entries(calcData[category]).map(([key, value]) => ({
            calcType: key,
            label: value.label,
            path: calculatorRoutes.find(route => route.calcType === key)?.path || '#',
        }))
    );

    const currentCategory = Object.keys(calcData).find(cat => 
        calcData[cat][currentCalcType]
    );


    const relatedCalculators = currentCategory ? 
        Object.entries(calcData[currentCategory]).map(([key, value]) => ({
            calcType: key,
            label: value.label,
            path: calculatorRoutes.find(route => route.calcType === key)?.path || '#',
        }))
        : [];

    return (
        <div className="w-2/3">

            {currentCalcType && (
                <div className="my-12 w-full">
                    <h3 className="text-2xl tracking-wide mb-4">Glossary of Related Calculators</h3>
                    <ul className="flex flex-col gap-2">
                        {relatedCalculators.map(({ calcType, label, path }) => (
                            <li key={calcType}  className="hover:-translate-y-1 hover:underline transition-all duration-200">
                                <a 
                                    href={path} 
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <h3 className="text-2xl tracking-wide mb-4">Glossary of All Calculators</h3>
            <ul className="flex flex-col gap-2">
                {glossary.map(({ calcType, label, path }) => (
                    <li key={calcType} className="hover:-translate-y-1 hover:underline transition-all duration-200">
                        <a 
                            href={path} 
                        >
                            {label}
                        </a>
                    </li>
                ))}
            </ul>
        
        </div>
    );
};

export default Glossary;
