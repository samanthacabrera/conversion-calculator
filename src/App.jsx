import React from 'react';
import Converter from './Converter';

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-12">Unit Conversion Calculator</h1>
      <Converter />
    </div>
  );
};

export default App;
