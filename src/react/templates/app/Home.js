exports.template = () => {
	return `// Styles
import styles from './home.less';

// Packages
import React from 'react';

// Components
import Head from '../../Head';

// Home Class
class Home extends React.Component {

	constructor(props) {

		super(props);

	}

	render() {

		return (

			<div className={styles.home}>

				<Head
					slug="/"
					description="This is the home description"
				/>

        This is the Home component.

			</div>

		);

	}

}

export default Home;`;
};
