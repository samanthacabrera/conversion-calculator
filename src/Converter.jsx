import React, { useState, useEffect } from 'react';
import { conversionData } from './conversionData';

const Converter = ({ conversionType }) => {
    const [inputValue, setInputValue] = useState('');
    const [unitFrom, setUnitFrom] = useState(Object.keys(conversionData[conversionType].units)[0]);
    const [unitTo, setUnitTo] = useState(Object.keys(conversionData[conversionType].units)[1]);
    const [result, setResult] = useState(null);

    const bgColorMapping = {
        length: 'bg-pink-200',
        temperature: 'bg-blue-200',
        volume: 'bg-orange-200',
    };

    const bgColor = bgColorMapping[conversionType] || 'bg-white'; 

    useEffect(() => {
        setUnitFrom(Object.keys(conversionData[conversionType].units)[0]);
        setUnitTo(Object.keys(conversionData[conversionType].units)[1]);
        setResult(null);
    }, [conversionType]);

    const handleConvert = () => {
        const parsedValue = parseFloat(inputValue);
        if (isNaN(parsedValue) || parsedValue < 0) {
            alert('Please enter a valid positive number.');
            return;
        }
        const convertedValue = conversionData[conversionType].convert(parsedValue, unitFrom, unitTo);
        setResult(convertedValue);
    };

    const displayResult = () => {
        if (result === null) return null;
        return result % 1 !== 0 ? result.toFixed(4) : Math.round(result);
    };

    return (
        <div className={`flex flex-col items-center p-8 ${bgColor} space-y-6 rounded`}>
            <h2 className="text-2xl tracking-wide">{conversionType.charAt(0).toUpperCase() + conversionType.slice(1)} Converter</h2>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                        placeholder="0"
                        min="0"
                    />
                    <select
                        value={unitFrom}
                        onChange={(e) => {
                            setUnitFrom(e.target.value);
                            setResult(null);
                        }}
                        className="p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(conversionData[conversionType].units).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <p className="text-xl text-gray-700">&darr;</p>
                <div className="flex items-center">
                    {result !== null && (
                        <h3 className="p-2 bg-white rounded-lg shadow-md">
                            {displayResult()}
                        </h3>
                    )}
                    <select
                        value={unitTo}
                        onChange={(e) => {
                            setUnitTo(e.target.value);
                            setResult(null);
                        }}
                        className="flex-1 ml-2 p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(conversionData[conversionType].units).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <button onClick={handleConvert} className="hover:underline">
                Convert
            </button>
        </div>
    );
};

export default Converter;
