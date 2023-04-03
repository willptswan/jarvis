exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Imports
import React from 'react';
import './home.${styleExtension}';

// Home component
const Home = () => {

	return (

		<div className="home">This is the Home component.</div>

	);

}

// Export Component
export default Home;
`;
};
