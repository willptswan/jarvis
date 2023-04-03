// Number with comma separated thousands
exports.commaSeparateThousands = (input) => {
	return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
