exports.template = () => {
	return `function buildConfig(env) {
	return require("./webpack." + Object.keys(env)[0] + ".config.js")(env);
}
module.exports = buildConfig;`;
};
