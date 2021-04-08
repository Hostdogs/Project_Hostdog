import React from 'react'
import NavbarNoAuth from './components/Navbar/NavbarNoAuth'

import Content from './components/HomePage/Content'

import {BrowserRouter as Router,Route} from 'react-router-dom';
import SignUpPage from './components/SignUp/SignUpPage';



function App() {
  return (
 
    <Router>
    <div className="App">
      
      <Route exact path="/"  component={HomePage}/>

      <Route exact path="/signup"  component={SignUpPage}/>


    </div>
    </Router>

  );
}

export default App;
