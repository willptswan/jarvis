exports.template = () => {
	return `// Styles
import './index.less';

// Packages
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Comonents
import Container from './components/Container';

// Render
ReactDOM.render(

	<BrowserRouter>

		<Container/>

	</BrowserRouter>,
	document.getElementById('application')

);`;
};
