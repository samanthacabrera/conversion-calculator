import React from 'react';
import Header from './Header';
import ConverterCircle from './ConverterCircle';

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      
      <ConverterCircle/>

      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="relative lg:absolute bottom-0 opacity-20">
        made by <span className="hover:underline hover:italic">sam cabrera</span>
      </a>
    </div>
  );
};

export default App;
