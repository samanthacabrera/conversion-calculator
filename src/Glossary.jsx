import React from 'react';
import { Link } from 'react-router-dom'; 
import { calcData } from './data';
import { calculatorRoutes } from './routes'; 

const Glossary = () => {
    const glossary = Object.keys(calcData).flatMap(category => 
        Object.entries(calcData[category]).map(([key, value]) => ({
            calcType: key,
            label: value.label,
            path: calculatorRoutes.find(route => route.calcType === key)?.path || '#',
        }))
    );

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className="w-2/3">
            <h3 className="text-2xl font-bold tracking-tighter mb-4">Glossary of All Calculators</h3>
            <ul className="flex flex-col gap-2">
                {glossary.map(({ calcType, label, path }) => (
                    <li key={calcType} className="hover:-translate-y-1 hover:underline transition-all duration-200">
                        <Link to={path} onClick={handleScrollToTop}>
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Glossary;
