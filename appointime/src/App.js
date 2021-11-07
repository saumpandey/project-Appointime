import React from 'react'
import styled from 'styled-components';
import {Route, Routes} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';
import Secondpage_men from './components/Secondpage_men';
import SalonCard from './components/SalonCard';

function App(){
  return (
    <>
     <Routes>
       <Route exact path="/" element={<Firstpage/>}></Route>
       <Route exact path="/women" element={<Secondpage_women/>}></Route>
       <Route exact path="/men" element={<Secondpage_men/>}></Route>
     </Routes>
    </>
  )
}

export default App;
