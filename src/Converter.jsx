import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { calcData } from './data';

const Converter = ({ calcType }) => {

    const [inputValue, setInputValue] = useState('');
    const [unitFrom, setUnitFrom] = useState(Object.keys(calcData[calcType].units)[0]);
    const [unitTo, setUnitTo] = useState(Object.keys(calcData[calcType].units)[1]);
    const [result, setResult] = useState(null);

    const bgColorMapping = {
        length: 'bg-lime-200',
        temperature: 'bg-purple-200',
        volume: 'bg-orange-200',
        weight: 'bg-pink-200',
        time: 'bg-yellow-200'
    };

    const bgColor = bgColorMapping[calcType] || 'bg-white'; 

    useEffect(() => {
        setUnitFrom(Object.keys(calcData[calcType].units)[0]);
        setUnitTo(Object.keys(calcData[calcType].units)[1]);
        setResult(null);
    }, [calcType]);

    useEffect(() => {
        handleConvert(); 
    }, [inputValue, unitFrom, unitTo]); 

    const handleConvert = () => {
        const parsedValue = parseFloat(inputValue);
        if (isNaN(parsedValue) || parsedValue < 0) {
            setResult(null); 
            return;
        }
        const convertedValue = calcData[calcType].convert(parsedValue, unitFrom, unitTo);
        setResult(convertedValue);
    };

    const displayResult = () => {
        if (result === null) return null;
        return result % 1 !== 0 ? result.toFixed(6) : Math.round(result);
    };

    return (
        <div className={`flex flex-col items-center p-8 ${bgColor} space-y-6 rounded h-[310px] w-[300px]`}>
            <Link to={`/calculator/${calcType}`} className="text-xl tracking-wide hover:underline">
                {calcType.charAt(0).toUpperCase() + calcType.slice(1)} Converter
            </Link>
            <div className="flex flex-col items-center space-y-8">
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
                        onChange={(e) => setUnitFrom(e.target.value)}
                        className="p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(calcData[calcType].units).map((unit) => (
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
                        onChange={(e) => setUnitTo(e.target.value)}
                        className="flex-1 ml-2 p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        {Object.keys(calcData[calcType].units).map((unit) => (
                            <option key={unit} value={unit}>
                                {unit.charAt(0).toUpperCase() + unit.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Converter;
