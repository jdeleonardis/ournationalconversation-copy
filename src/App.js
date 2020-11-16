import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import SearchBar from './components/Filters/SearchBar';
import SearchFilter from './components/Filters/SearchFilter';
import Footer from './components/Misc/Footer';

import MockArticles from './components/Misc/MockArticles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <SearchBar /> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/opinions' component={Opinions} />
          <Route exact path='/contact' component={Contact} />

          <Route exact path='/news' component={News} />

          {/* Test Components by Judy */}
          <Route exact path='/searchfilter' component={SearchFilter} />

          <Route exact path='/mockarticles' component={MockArticles} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
