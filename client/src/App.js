import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from './Components/Dumbs/NavBar/NavBar';
import AddDog from './Components/Containers/AddDog/AddDog';
import DogDetail from './Components/Containers/DogDetail/DogDetail';
import Dogs from './Components/Containers/Dogs/Dogs';
import LandingPage from './Components/Dumbs/LandingPage/LandingPage';
import './app.css';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={LandingPage}></Route>
				<Route path='/' component={Nav}></Route>
			</Switch>
			<Route exact path='/dogs' component={Dogs}></Route>
			<Route exact path='/add' component={AddDog}></Route>
			<Route
				exact
				path='/dogs/:id'
				render={({match}) => <DogDetail match={match} />}
			></Route>
		</div>
	);
};

export default App;
