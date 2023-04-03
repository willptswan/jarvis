exports.template = (componentName, componentNameCamel, useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Packages
import React from 'react';
import { shallow } from '../../enzyme'; // Update me


// Component
import ${componentName} from './${componentName}';

// Set up tests
const ${componentNameCamel} = shallow(<${componentName} />);

// Run tests
describe('${componentName}', () => {

	// Write tests here
  it('Write tests for ${componentName} here', () => {
		expect(true).toBe(true);
  });

});`;
};
