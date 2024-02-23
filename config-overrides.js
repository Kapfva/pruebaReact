const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
	alias({
		"@core": "src/core",
		"@features": "src/features",
		"@pages": "src/pages",
		"@shared": "src/shared",
        "@styles":"src/css",
        "@styleHome":"src/css/homeComponents",
		"@styleLayout":"src/css/layouts",
		"@assets":"src/assets",
		"@layouts":"src/components/layouts"
	})(config);

	return config;
};
