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
import styles from './pagenotfound.${styleExtension}';

// Component
import PageNotFound from './';

// Set up tests
const pageNotFound = shallow(<PageNotFound />);

// Run tests
describe('PageNotFound', () => {

	it('Renders the component container', () => {
		expect(pageNotFound.hasClass(\`\${styles.pageNotFound}\`)).toBeTruthy();
	});

});`;
};
