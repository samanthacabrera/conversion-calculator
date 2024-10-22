import React from 'react';
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

    return (
        <div className="self-start m-12 w-full">
            <h3 className="text-2xl tracking-wide mb-4">Glossary of All Calculators</h3>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {glossary.map(({ calcType, label, path }) => (
                    <li key={calcType}>
                        <a 
                            href={path} 
                            className="text-blue-500 hover:underline"
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
