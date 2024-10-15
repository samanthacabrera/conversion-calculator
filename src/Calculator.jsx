import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calcData } from './data';

const Calculator = ({ calcType }) => {
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
        <div className={`flex flex-col items-center bg-${calcInfo.color}-200 text-center p-8 space-y-4 rounded h-[310px] w-[300px]`}>

            <Link to={`/calculator/${calcType}`} className="text-xl tracking-wide hover:underline">
               {calcInfo.label}
            </Link>

            <div className="flex flex-col justify-center space-y-2 min-h-[150px]">
                {calcInfo.dimensions.map((dim, index) => (
                    <div key={index} className="flex justify-between items-center space-x-2 w-full">
                        <label>{dim}:</label>
                        <input
                            type="number"
                            name={dim.toLowerCase().replace(" ", "_")} 
                            onChange={handleChange}
                            className="p-2 rounded-lg border border-gray-300 w-[100px]"
                            placeholder="1"
                        />
                    </div>
                ))}
            </div>

            {result !== null && (
                <h3 className="tracking-wide">  Result = {typeof result === 'number' && !isNaN(result) ? result.toFixed(2) : result}</h3>
            )}
            
        </div>
    );
};

export default Calculator;
