exports.template = () => {

	return `// Packages
import React from 'react';
import { shallow, mount } from '../../../enzyme';

// Components
import Home from './Home';

// Set up tests
const home = shallow(<Home />);

// Run tests
describe('Home', () => {

	// Write tests here
	it('Write tests for Home here', () => {
		expect(true).toBe(true);
	});

});`;
};
