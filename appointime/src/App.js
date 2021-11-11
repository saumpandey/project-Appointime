import React from 'react'
import Products from './components/Products';
import {Route, Routes} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';

function App(){
  return (
    <>
     <Routes>
       <Route exact path="/" element={<Firstpage/>}></Route>
       <Route path='/salon' element={<Secondpage_women/>}></Route>
       <Route path='/products' element={<Products/>}></Route>
     </Routes>
    </>
  )
}

export default App;
