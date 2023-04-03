exports.template = () => {
	return `// Select webpack config (dev or prod)
function selectConfig(env) {
	return require("./webpack." + Object.keys(env).pop() + ".config.js")(env);
}
module.exports = selectConfig;`;
};
