import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { calcData } from './data';

const VolumeCalculator = ({ calcType }) => {
    const shapeDimensions = {
        sphereVolume: ['Radius'],
        coneVolume: ['Radius', 'Height'],
        cubeVolume: ['Side'],
        cylinderVolume: ['Radius', 'Height'],
        rectangleVolume: ['Length', 'Width', 'Height'],
    };

    if (!shapeDimensions[calcType]) {
        return <h2 className="text-red-500">Error: Invalid calculation type.</h2>;
    }

    const dimensions = shapeDimensions[calcType];
    const [inputValues, setInputValues] = useState(Array(dimensions.length).fill(''));
    const [result, setResult] = useState(null);

    const bgColorMapping = {
        sphereVolume: 'bg-sky-200',
        coneVolume: 'bg-orange-200',
        cubeVolume: 'bg-lime-200',
        cylinderVolume: 'bg-pink-200',
        rectangleVolume: 'bg-indigo-200',
    };

    const handleInputChange = (index, value) => {
        const updatedValues = [...inputValues];
        updatedValues[index] = value;
        setInputValues(updatedValues);

        const numericValues = updatedValues.map((val) => val === '' ? 0 : Number(val));

        if (numericValues.every((val) => !isNaN(val) && val >= 0)) {
            const volume = calcData[calcType]?.calculate(...numericValues);
            if (typeof volume === 'number') {
                setResult(volume);
            } else {
                setResult('Calculation error.');
            }
        } else {
            setResult('Invalid input');
        }
    };

    return (
        <div className={`flex flex-col items-center text-center p-8 space-y-4 ${bgColorMapping[calcType]} rounded h-[310px] w-[300px]`}>
            <Link to={`/calculator/${calcType}`} className="text-xl tracking-wide hover:underline">
                {`Volume of a ${calcType.replace('Volume', '').charAt(0).toUpperCase() + calcType.replace('Volume', '').slice(1)}`}
            </Link>

            <div className="flex flex-grow flex-col justify-center items-center space-y-4"> 
                {dimensions.map((dim, index) => (
                    <div key={index} className="flex justify-between items-center space-x-2 w-full">
                        <label className="text-lg">{dim}:</label>
                        <input
                            type="number"
                            value={inputValues[index]}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            className="p-2 rounded-lg border border-gray-300 w-[100px]"
                            placeholder="1"
                        />
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-center min-h-[20px]">
                {result !== null && (
                    <h3 className="text-xl tracking-wide">
                        Volume = {typeof result === 'number' && !isNaN(result) ? result.toFixed(2) : result}
                    </h3>
                )}
            </div>
        </div>
    );
};

export default VolumeCalculator;
