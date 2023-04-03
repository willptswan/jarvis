exports.template = () => {

	return `// Packages
import React from 'react';
import { Route } from 'react-router-dom';
import { shallow, mount } from '../../enzyme';

// Components
import Container from './Container';

// Set up tests
const container = shallow(<Container />);

// Run tests
describe('Container', () => {

	// Write tests here
	it('Write tests for Container here', () => {
		expect(true).toBe(true);
	});

});
`;
};
