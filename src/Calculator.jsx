import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calcData } from './calcData';

const Calculator = ({ calcType, condensed }) => {

    const calcInfo = Object.values(calcData)
        .flatMap(Object.values)
        .find(calc => calc.calcType === calcType);
    
    const backgroundColor = 
    calcInfo && calcInfo.color === 'lime' ? 'bg-lime-200' :
    calcInfo && calcInfo.color === 'orange' ? 'bg-orange-200' :
    calcInfo && calcInfo.color === 'sky' ? 'bg-sky-200' :
    calcInfo && calcInfo.color === 'yellow' ? 'bg-yellow-200' :
    calcInfo && calcInfo.color === 'pink' ? 'bg-pink-200' :
    calcInfo && calcInfo.color === 'purple' ? 'bg-purple-200' :
    'bg-blue-200';


    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = parseFloat(value) || 0; 

        setInputs((prev) => {
            const newInputs = { ...prev, [name]: updatedValue };
            const args = Object.keys(newInputs).map(key => newInputs[key]);

            console.log("Updated Inputs:", newInputs);
            console.log("Calculation Args:", args);

            if (calcInfo && typeof calcInfo.calculate === 'function') {
                const calculatedResult = calcInfo.calculate(...args);
                console.log("Calculated Result:", calculatedResult);
                setResult(calculatedResult);
            } else {
                console.error("Calculation function is missing!");
            }

            return newInputs;
        });
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0 });
    };

    return (
        <div className={`flex flex-col justify-center items-center text-center p-4 space-y-2 rounded ${backgroundColor} ${condensed ? 'h-[60px] w-[300px]' : 'h-[310px] w-[300px]'}`}       
        >
            <Link
                to={`/calculator/${calcType}`}
                onClick={handleScrollToTop}
                className="text-xl font-bold tracking-tighter uppercase mb-3 hover:underline decoration-dotted decoration-2 underline-offset-4">
                {calcInfo ? calcInfo.label : "Unknown Calculator"}
            </Link>

            {!condensed && calcInfo && (
                <>
                    <div className="flex flex-col justify-center space-y-2 min-h-[150px] font-mono">
                        {calcInfo.dimensions.map((dim, index) => (
                            <div key={index} className="flex justify-between items-center space-x-2 w-full">
                                <label>{dim.name}:</label> 
                                <input
                                    type="number"
                                    name={dim.name.toLowerCase().replace(" ", "_")} 
                                    onChange={handleChange}
                                    className="p-2 rounded-lg border border-gray-300 w-[100px]"
                                    placeholder="1"
                                />
                            </div>
                        ))}
                    </div>

                    {result !== null && (
                        <h3 className="tracking-wide">Result = {typeof result === 'number' && !isNaN(result) ? result.toFixed(2) : result}</h3>
                    )}
                </>
            )}
        </div>
    );
};

export default Calculator;
