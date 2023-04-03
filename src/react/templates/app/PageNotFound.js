exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Imports
import React from 'react';
import './pagenotfound.${styleExtension}';

// PageNotFound component
const PageNotFound = () => {

	return (

		<div className="page-not-found">This is the PageNotFound component.</div>

	);

}

// Export component
export default PageNotFound;
`;
};
