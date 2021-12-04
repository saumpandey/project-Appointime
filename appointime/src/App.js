import React from 'react'
import Products from './components/Products';
import {Route, Routes} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';
import Spa from './components/Spa';
import Blog from './components/Blog';
import Secondpage_men from './components/Secondpage_men';
import Feedback from 'react-bootstrap/esm/Feedback';

function App(){

  return (
    <>
     <Routes>
       <Route  path="/" element={<Firstpage/>}/>
        <Route path='/salon_women' element={<Secondpage_women/>}></Route>
        <Route path='/salon_men' element={<Secondpage_men/>}></Route>
        <Route path='/products' element={<Products/>} />
        <Route path='/spa' element={<Spa/>} />
        <Route path='/blog' element={<Blog/>} />
     </Routes>
    </>
  )
}

export default App;
