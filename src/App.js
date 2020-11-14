import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/HomePage/Home'
import Footer from './components/pages/Footer/Footer';
import SignUp from './components/pages/SignUp/SignUp';
import Search from './components/pages/Search/Search';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/sign-up' component={SignUp}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
