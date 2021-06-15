import React from 'react';
import {Link} from 'react-router-dom';
import Landing from './Styled';

const LandingPage = () => {
	return (
		<Landing>
			<h1>Welcome to my individual project</h1>
			<Link to='/dogs'>Lets get started!</Link>
		</Landing>
	);
};

export default LandingPage;
