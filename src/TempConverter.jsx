import React, { useState } from 'react';

const TemperatureConverter = () => {
    const [inputValue, setInputValue] = useState('');
    const [unitFrom, setUnitFrom] = useState('celsius');
    const [unitTo, setUnitTo] = useState('fahrenheit');
    const [result, setResult] = useState(null);

    const handleConvert = () => {
        const parsedValue = parseFloat(inputValue);
        
        if (isNaN(parsedValue)) {
            alert('Please enter a valid number.');
            return;
        }

        let convertedValue;

        if (unitFrom === 'celsius') {
            if (unitTo === 'fahrenheit') {
                convertedValue = (parsedValue * 9/5) + 32;
            } else if (unitTo === 'kelvin') {
                convertedValue = parsedValue + 273.15;
            } else {
                convertedValue = parsedValue; 
            }
        } else if (unitFrom === 'fahrenheit') {
            if (unitTo === 'celsius') {
                convertedValue = (parsedValue - 32) * 5/9;
            } else if (unitTo === 'kelvin') {
                convertedValue = (parsedValue - 32) * 5/9 + 273.15;
            } else {
                convertedValue = parsedValue; 
            }
        } else if (unitFrom === 'kelvin') {
            if (unitTo === 'celsius') {
                convertedValue = parsedValue - 273.15;
            } else if (unitTo === 'fahrenheit') {
                convertedValue = (parsedValue - 273.15) * 9/5 + 32;
            } else {
                convertedValue = parsedValue; 
            }
        }

        setResult(convertedValue);
    };

    const displayResult = () => {
        if (result === null) {
            return null;
        } else {
            return result % 1 !== 0 ? result.toFixed(4) : Math.round(result);
        }
    };

    return (
        <div className="flex flex-col items-center p-8 bg-blue-200 space-y-6">
            <h2 className="text-2xl tracking-wide">Temperature Converter</h2>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2">
                    <input
                        type="number"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-20"
                        placeholder="0"
                    />
                    <select
                        value={unitFrom}
                        onChange={(e) => {
                            setUnitFrom(e.target.value);
                            setResult(null);
                        }}
                        className="p-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
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
                        <option value="celsius">Celsius</option>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                    </select>
                </div>
            </div>
            <button
                onClick={handleConvert}
                className="hover:underline"
            >
                Convert 
            </button>
        </div>
    );
};

export default TemperatureConverter;
