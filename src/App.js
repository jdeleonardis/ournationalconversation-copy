import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Opinions from './pages/Opinions';
import Podcasts from './pages/Podcasts';
import Webisodes from './pages/Webisodes';
import WriterDashboard from './pages/WriterDashboard';
import Newsletter from './pages/Newsletter';
import Store from './pages/Store';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Advertisers from './pages/Advertisers';
import Donors from './pages/Donors';
import HeaderReact from './components/Misc/HeaderReact';
import SearchBar from './components/Filters/SearchBar';
import LocalNews from './pages/LocalNews';
import Footer from './components/Misc/Footer';
import About from './pages/About';
import MockArticles from './components/Misc/MockArticles';
import DemoSearchFilter from './components/Filters/DemoSearchFilter';
import AboutInterns from './pages/AboutInterns';

//used for temporary landing page. remove at some point
import HeaderTempLandingPage from './components/Misc/HeaderTempLandingPage';
import TempLandingPage from './pages/TempLandingPage';
//end temp landing page

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<div className="App">
				<HeaderReact />
				<SearchBar />
				{/* used for temporary landing page header. remove at some point */}
				{/* <HeaderTempLandingPage /> */}
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/opinions" component={Opinions} />
					<Route exact path="/podcasts" component={Podcasts} />
					<Route exact path="/webisodes" component={Webisodes} />
					<Route exact path="/store" component={Store} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/writerdashboard" component={WriterDashboard} />
					<Route exact path="/newsletter" component={Newsletter} />
					<Route exact path="/about" component={About} />
					<Route exact path="/aboutInterns" component={AboutInterns} />
					<Route exact path="/news" component={News} />
					<Route exact path="/localnews" component={LocalNews} />
					<Route exact path="/privacy" component={Privacy} />
					<Route exact path="/terms" component={Terms} />
					<Route exact path="/advertisers" component={Advertisers} />
					<Route exact path="/donors" component={Donors} />


					{/* used for temporary landing page header. remove at some point */}
					<Route exact path="/templandingpage" component={TempLandingPage} />					

					{/* Test Filter Components by Judy */}
					<Route exact path="/demo" component={DemoSearchFilter} />

					<Route exact path="/mockarticles" component={MockArticles} />
				</Switch>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
