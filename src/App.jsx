import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState(0);
  const [unitFrom, setUnitFrom] = useState('meters');
  const [unitTo, setUnitTo] = useState('kilometers');
  const [result, setResult] = useState(null);

  const conversions = {
    length: {
      meters: 1,
      kilometers: 0.001,
      miles: 0.000621371,
      feet: 3.28084,
    },
    volume: {
      liters: 1,
      milliliters: 1000,
      gallons: 0.264172,
      cups: 4.22675,
    },
  };

  const handleConvert = () => {
    if (unitFrom in conversions.length && unitTo in conversions.length) {
      setResult((inputValue * conversions.length[unitTo]) / conversions.length[unitFrom]);
    } else if (unitFrom in conversions.volume && unitTo in conversions.volume) {
      setResult((inputValue * conversions.volume[unitTo]) / conversions.volume[unitFrom]);
    } else {
      setResult('Invalid conversion');
    }
  };

  return (
    <div className="app">
      <h1>Unit Conversion Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <select value={unitFrom} onChange={(e) => setUnitFrom(e.target.value)}>
          <optgroup label="Length">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
            <option value="feet">Feet</option>
          </optgroup>
          <optgroup label="Volume">
            <option value="liters">Liters</option>
            <option value="milliliters">Milliliters</option>
            <option value="gallons">Gallons</option>
            <option value="cups">Cups</option>
          </optgroup>
        </select>
        <span>to</span>
        <select value={unitTo} onChange={(e) => setUnitTo(e.target.value)}>
          <optgroup label="Length">
            <option value="meters">Meters</option>
            <option value="kilometers">Kilometers</option>
            <option value="miles">Miles</option>
            <option value="feet">Feet</option>
          </optgroup>
          <optgroup label="Volume">
            <option value="liters">Liters</option>
            <option value="milliliters">Milliliters</option>
            <option value="gallons">Gallons</option>
            <option value="cups">Cups</option>
          </optgroup>
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
