exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Styles
import './index.${styleExtension}';

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
