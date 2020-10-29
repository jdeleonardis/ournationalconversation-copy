import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Header from './components/pages/Header';
import Footer from './components/layout/Footer';
import Solutions from './components/layout/Solutions';
import SearchBar from './components/layout/SearchBar';
import Filter from './components/layout/Filter';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/search' component={SearchBar} />
          <Route exact path='/filter' component={Filter} />
        </Switch>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
