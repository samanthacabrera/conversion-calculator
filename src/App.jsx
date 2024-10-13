import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { calculatorRoutes } from './routes';
import Menu from './Menu';
import Header from './Header';
import Nav from './Nav';
import List from './List';
import Page from './Page';
import Footer from './Footer';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Calculators');

  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen text-gray-800">

        <Menu />
        
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <Nav onSelectCategory={setSelectedCategory}/>
              <List selectedCategory={selectedCategory} />
            </>
            } />
          {calculatorRoutes.map(({ path, component, calcType }) => (
              <Route
                  key={path}
                  path={path}
                  element={<Page calcType={calcType} />}
              />
          ))}
        </Routes>
        
        <Footer />
        
      </div>
    </Router>
  );
};

export default App;
