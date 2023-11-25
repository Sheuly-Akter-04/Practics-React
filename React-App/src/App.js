import logo from './logo.svg';
import './App.css';

import Navbar from './Elements/Navbar';
import TextForm from './Elements/TextForm';
import About from './Elements/About';
import Alert from './Elements/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
   return (
    <>
    <Router>
    <Navbar title="React App" about="About me"/>
{/*<TextForm/> */}
<div className="Container my-2">  {/*Container = middle */}

<Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>

<TextForm heading="Enter the heading text"/>
<About/>
<Alert/>
</div>
    </Router>


    </>
    
  );
}


export default App;
