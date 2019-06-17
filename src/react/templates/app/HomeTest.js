exports.template = () => {
	return `// Packages
import React from 'react';
import { shallow } from '../../../enzyme';

// Component
import Home from './';

// Set up tests
const home = shallow(<Home />);

// Run tests
describe('Home', () => {

	it('Renders the component container', () => {
		expect(home.find('.home')).toBeDefined();
	});

});`;
};
