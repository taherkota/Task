import React from 'react';
import './App.css';
import './Home.css';
import About from './About';
import Menu from './Menu';
import Contact from './Contact';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    
      <Menu />  
      <switch>
       <Route path="/" exact component={Home} />
       <Route path="/about" component={About} />
       <Route path="/contact" component={Contact} />
       </switch>
    
    </BrowserRouter>
  );
}

const Home = () => {

  return (
     <div className="homestyle"> 
        <h2> This is the Home Page. </h2>
      </div>
    )

}

export default App;