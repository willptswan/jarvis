exports.template = (componentNameCamel) => {
	return `.${componentNameCamel} {
  width: 100%;
  min-height: 100px;
  overflow-x: hidden;
  overflow-y: auto;
}`;
};
