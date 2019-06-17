exports.template = (componentName, componentNameCamel) => {
	return `// Packages
import React from 'react';
import { shallow } from '../../enzyme';

// Component
import ${componentName} from './';

// Set up tests
const ${componentNameCamel} = shallow(<${componentName} />);

// Run tests
describe('${componentName}', () => {

  it('Renders the component container', () => {
    expect(${componentNameCamel}.find('.${componentNameCamel}')).toBeDefined();
  });

});`;
};
