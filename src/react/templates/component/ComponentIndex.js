exports.template = (componentName) => {
	return `import ${componentName} from './${componentName}';
export default ${componentName};`;
};
