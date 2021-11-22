import React from 'react'
import Products from './components/Products';
import {Route, Routes, Outlet} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';
import Spa from './components/Spa';


function App(){

  return (
    <>
     <Routes>
       <Route  path="/" element={<Firstpage/>}/>
        <Route path='/salon' element={<Secondpage_women/>}></Route>
        <Route path='/products' element={<Products/>} />
        <Route path='/spa' element={<Spa/>} />
     </Routes>
    </>
  )
}

export default App;
