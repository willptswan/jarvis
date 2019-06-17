exports.template = () => {
	return `// Imports
import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Configure
configure({ adapter: new Adapter() });

// Exports
export { shallow, mount, render };
export default Enzyme;`;
};
