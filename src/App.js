import React from 'react';
import Header from './containers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductList from './containers/ProductList';
import ProductDetails from './containers/ProductDetails';
import './App.scss';
const App = () => {
	return (
		<React.Fragment>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={ProductList} />
					<Route path="/productDetails" exact component={ProductDetails} />
					<Route>404 not Found</Route>
				</Switch>
			</Router>
		</React.Fragment>
	);
};

export default App;
