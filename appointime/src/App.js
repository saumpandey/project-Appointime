import React from 'react'

import {Route, Routes} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';

function App(){
  return (
    <>
     <Routes>
       <Route exact path="/" element={<Firstpage/>}></Route>
       <Route path='/salon' element={<Secondpage_women/>}></Route>
     </Routes>
    </>
  )
}

export default App;
