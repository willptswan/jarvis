exports.template = () => {

	return `// Imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Views
import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';

// Container component
const Container = () => {

	return (

		<Routes>

			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Home />} />

		</Routes>

	);

}

export default Container;
`;
};
