import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Podcasts from './pages/Podcasts';
import Webisodes from './pages/Webisodes';
import WriterDashboard from './pages/WriterDashboard';
import Store from './pages/Store';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import SearchBar from './components/Filters/SearchBar';
import DemoSearchFilter from './components/Filters/DemoSearchFilter';
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
          <Route exact path='/podcasts' component={Podcasts} />
          <Route exact path='/webisodes' component={Webisodes} />
          <Route exact path='/store' component={Store} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/writerdashboard' component={WriterDashboard} />

          <Route exact path='/news' component={News} />

          {/* Test Filter Components by Judy */}
          <Route exact path='/demosearchfilter' component={DemoSearchFilter} />

          <Route exact path='/mockarticles' component={MockArticles} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
