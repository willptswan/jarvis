exports.template = (useSCSS) => {

	// Work out style extension
	let styleExtension = 'less';
	if (useSCSS) {
		styleExtension = 'scss';
	}

	return `// Styles
import styles from './pagenotfound.${styleExtension}';

// Packages
import React from 'react';

// Components
import Head from '../../Head';

// PageNotFound Class
class PageNotFound extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		return (

			<div className={styles.pageNotFound}>

				<Head
					slug="/404"
					description="This is the 404 description"
				/>

        This is the PageNotFound component.

			</div>

		);

	}

}

export default PageNotFound;`;
};
