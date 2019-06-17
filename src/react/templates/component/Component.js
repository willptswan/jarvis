exports.template = (componentName, componentNameCamel) => {
	return `// Styles
import styles from './${componentName.toLowerCase()}.less';

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
