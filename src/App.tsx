import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Box} from '@chakra-ui/react'
import Home from './Pages/Home';
import SelectDataandTime from './Pages/SelectDataandTime';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Slots from './Pages/Slots';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/selectdate" element={<SelectDataandTime/>}/>
        <Route  path="/slots" element={<Slots/>}/>

      </Routes>
      </BrowserRouter>
      
      {/* <SelectDataandTime/> */}
      {/* <Slots/> */}
    </div>
  );
}

export default App;
