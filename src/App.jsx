import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { calculatorRoutes } from './routes';
import Header from './Header';
import Filter from './Filter';
import List from './List';
import Page from './Page';
import Glossary from './Glossary';
import Footer from './Footer';
import Content from './Content';
import Search from './Search';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('AllCalculators');
  const [showModal, setShowModal] = useState(false);
  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen text-gray-800">
        
        <Header />
        <Search showModal={showModal} setShowModal={setShowModal}/>

        <Routes>
          <Route path="/" element={
            <>
              <Filter onSelectCategory={setSelectedCategory} />
              <List selectedCategory={selectedCategory} />
              <Content />
              <Glossary/>
            </>
            } />
          {calculatorRoutes.map(({ path, calcType }) => (
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
