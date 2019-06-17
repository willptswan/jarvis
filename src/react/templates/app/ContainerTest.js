exports.template = () => {
	return `// Packages
import React from 'react';
import { Route } from 'react-router-dom';
import { shallow, mount } from '../../enzyme';

// Components
import Container from './';
import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';

// Set up tests
const container = shallow(<Container />);
const pathMap = container.find(Route).reduce((pathMap, route) => {
	const routeProps = route.props();
	pathMap[routeProps.path] = routeProps.component;
	return pathMap;
}, {});

// Run tests
describe('PageNotFound', () => {

	// Renders the component container
	it('Renders the component container', () => {
		expect(container.find('.container')).toBeDefined();
	});

	// Renders the home view
	it('Renders the home view', () => {
		expect(pathMap['/']).toBe(Home);
	});

	// Renders the page not found view
	it('Renders the page not found view', () => {
		expect(pathMap[undefined]).toBe(PageNotFound);
	});

});`;
};
