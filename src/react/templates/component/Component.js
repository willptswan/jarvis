exports.template = (componentName, componentNameCamel, useSCSS) => {

	// Work out the correct style type
	let style = 'less';
	if (useSCSS) {
		style = 'scss';
	}

	return `// Imports
import React from 'react';
import './${componentName.toLowerCase()}.${style}';

// ${componentName} component
const ${componentName} = () => {

	return (

		<div className="${componentNameCamel}">
			This is the ${componentName} component.
		</div>

	)

}

export default ${componentName};`;
};
