import React from 'react';

import './App.css';
import Header from "./component/Header";
import About from "./component/About";
import Shop from "./component/Shop";
import Menu from "./component/Menu";
import Count from "./component/Count";

function App() {
  return (
    <div>
    <Header />  
    <About />
    <Shop />
    <Menu />
    <Count />
    </div>
  ); 
}

export default App;
