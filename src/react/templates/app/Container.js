exports.template = () => {
	return `// Styles
import styles from './container.less';

// Packages
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Views
import Home from '../views/Home';
import PageNotFound from '../views/PageNotFound';

// Container class
class Container extends React.Component {

	render() {

		return (

			<div className={styles.container}>

				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={PageNotFound} />
				</Switch>

			</div>



		);

	}

}

export default Container;`;
};
