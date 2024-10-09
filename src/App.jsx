import React, {useState} from 'react';
import Header from './Header';
import Nav from './Nav';
import List from './List';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Calculators');

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-800">
      <Header />
      
      <Nav onSelectCategory={setSelectedCategory}/>
      
      <List selectedCategory={selectedCategory}/>

      <a href="https://github.com/samanthacabrera" target="_blank" rel="noopener noreferrer" className="relative bottom-0 opacity-20 mt-8">
        made by <span className="hover:underline hover:italic">sam cabrera</span>
      </a>
    </div>
  );
};

export default App;
