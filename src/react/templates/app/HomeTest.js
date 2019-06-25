exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Packages
import React from 'react';
import { shallow } from '../../../enzyme';

// Styles
import styles from './home.${styleExtension}';

// Component
import Home from './';

// Set up tests
const home = shallow(<Home />);

// Run tests
describe('Home', () => {

	it('Renders the component container', () => {
		expect(home.hasClass(\`\${styles.home}\`)).toBeTruthy();
	});

});`;
};
