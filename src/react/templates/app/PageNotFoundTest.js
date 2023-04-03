exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Packages
import React from 'react';
import { shallow, mount } from '../../../enzyme';

// Components
import PageNotFound from './PageNotFound';

// Set up tests
const home = shallow(<PageNotFound />);

// Run tests
describe('PageNotFound', () => {

	// Write tests here
	it('Write tests for PageNotFound here', () => {
		expect(true).toBe(true);
	});

});
`;
};
