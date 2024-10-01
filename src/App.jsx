import React from 'react';
import Converter from './Converter';

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl my-12">Unit Conversion Calculator</h1>
      <Converter />
      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="absolute bottom-0 right-0 pr-1">
        made by <span className="hover:underline hover:italic">sam cabrera</span>
      </a>
    </div>
  );
};

export default App;
