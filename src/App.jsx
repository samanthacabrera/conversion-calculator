import React, {useState} from 'react';
import Header from './Header';
import Nav from './Nav';
import ConverterList from './ConverterList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('Common Converters');

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-800">
      <Header />
      
      <Nav onSelectCategory={setSelectedCategory}/>
      
      <ConverterList selectedCategory={selectedCategory}/>

      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="relative lg:absolute bottom-0 opacity-20 mt-8">
        made by <span className="hover:underline hover:italic">sam cabrera</span>
      </a>
    </div>
  );
};

export default App;
