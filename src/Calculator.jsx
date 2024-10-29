import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calcData } from './data';

const Calculator = ({ calcType, condensed }) => {
    const calcInfo = Object.values(calcData).flatMap(Object.values).find(calc => calc.calcType === calcType);
    
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = parseFloat(value) || 0; 
        setInputs((prev) => {
            const newInputs = { ...prev, [name]: updatedValue };
            const args = Object.keys(newInputs).map(key => newInputs[key]);
            const calculatedResult = calcInfo.calculate(...args);
            setResult(calculatedResult);
            return newInputs;
        });
    };

    return (
        <div className={`flex flex-col justify-center items-center bg-${calcInfo.color}-200 text-center p-4 space-y-2 rounded ${condensed ? 'h-[60px] w-[300px]' : 'h-[310px] w-[300px]'}`}>
            <Link to={`/calculator/${calcType}`} className="text-xl tracking-wide hover:scale-105 hover:underline transition-all duration-300 mb-6">
                {calcInfo.label}
            </Link>

            {!condensed && (
                <>
                    <div className="flex flex-col justify-center space-y-2 min-h-[150px]">
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
