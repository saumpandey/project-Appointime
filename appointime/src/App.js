import React from 'react'
import styled from 'styled-components';
import {Route, Switch} from 'react-router-dom';
import Firstpage from './components/Firstpage';
import Secondpage_women from './components/Secondpage_women';
import Secondpage_men from './components/Secondpage_men';


function App(){
  return (
    <>
      <Firstpage/>
      <Switch>
        <Route exact path='/women' component={Secondpage_women}></Route>
        <Route exact path='/men' component={Secondpage_men}></Route>
      </Switch>
    </>
  )
}

export default App;
