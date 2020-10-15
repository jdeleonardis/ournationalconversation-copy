import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Contact from './components/pages/Contact';
import Header from './components/pages/Header';
import Footer from './components/layout/Footer';
import Comment from './components/layout/Comments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Header />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
