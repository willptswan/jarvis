exports.template = () => {
	return `// Packages
import React from 'react';
import { shallow } from '../../../enzyme';

// Component
import PageNotFound from './';

// Set up tests
const pageNotFound = shallow(<PageNotFound />);

// Run tests
describe('PageNotFound', () => {

	it('Renders the component container', () => {
		expect(pageNotFound.find('.pageNotFound')).toBeDefined();
	});

});`;
};
