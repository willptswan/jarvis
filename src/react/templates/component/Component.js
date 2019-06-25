exports.template = (componentName, componentNameCamel, useSCSS) => {

	// Work out the correct style type
	let style = 'less';
	if (useSCSS) {
		style = 'scss';
	}

	return `// Styles
import styles from './${componentName.toLowerCase()}.${style}';

// Packages
import React from 'react';

// ${componentName} Class
class ${componentName} extends React.Component {

  constructor(props) {

    super(props);

  }

  render() {

    return(

      <div className={styles.${componentNameCamel}}>
        This is the ${componentName} component.
      </div>

    );

  }

}

export default ${componentName};`;
};
