exports.template = (componentName, componentNameCamel, useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Packages
import React from 'react';
import { shallow } from '../../enzyme';

// Styles
import styles from './${componentName.toLowerCase()}.${styleExtension}';

// Component
import ${componentName} from './';

// Set up tests
const ${componentNameCamel} = shallow(<${componentName} />);

// Run tests
describe('${componentName}', () => {

  it('Renders the component container', () => {
		expect(${componentNameCamel}.hasClass(styles.${componentNameCamel})).toBeTruthy();
  });

});`;
};
