import React, { useState } from 'react';
import { conversionData } from './conversionData';

const Converter = () => {
  const [inputValue, setInputValue] = useState(0);
  const [unitFrom, setUnitFrom] = useState('meters');
  const [unitTo, setUnitTo] = useState('meters');
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    const meters = inputValue / conversionData.length.conversions[unitFrom];
    const convertedValue = meters * conversionData.length.conversions[unitTo];
    setResult(convertedValue);
  };

  return (
    <div>
      <h2>{conversionData.length.title}</h2>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
        {Object.keys(conversionData.length.conversions).map((unit) => (
          <option key={unit} value={unit}>
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </option>
        ))}
      </select>
      <span>to</span>
      <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
        {Object.keys(conversionData.length.conversions).map((unit) => (
          <option key={unit} value={unit}>
            {unit.charAt(0).toUpperCase() + unit.slice(1)}
          </option>
        ))}
      </select>
      <button onClick={handleConvert}>Convert</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
};

export default Converter;
