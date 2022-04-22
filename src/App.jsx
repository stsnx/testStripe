import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Pay from './pay';
import Success from './success';

const App = () =>{
  return(
    <Router>
      <Routes>
        <Route path="/pay" element={<Pay/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
    </Router>
  );
};


export default App;
