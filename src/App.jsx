import React from 'react';
import Header from './Header';
import ConverterList from './ConverterList';

const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Header />
      
      <ConverterList/>

      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="relative lg:absolute bottom-0 opacity-20 mt-8">
        made by <span className="hover:underline hover:italic">sam cabrera</span>
      </a>
    </div>
  );
};

export default App;
