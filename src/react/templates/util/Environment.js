exports.template = () => {
	return `// Constants
const siteName = "";
const siteURL = "";
const s3Base = "";
const defaultImage = "";
const twitterUsername = "";
const twitterURL = "https://twitter.com/";
const facebookURL = "https://facebook.com/";
const instagramURL = "https://instagram.com/";
const youtubeURL = "https://www.youtube.com/channel/";
const dnsPreFetch = [
	'//fonts.googleapis.com',
	'//schema.org',
];
const env = process.env.NODE_ENV;
const staticURLDev = "build/";
const staticURLProd = \`\${siteURL}/\`;
const primaryColour = "#1a91c6";
const googleAnalyticsId = "";

class Environment {

	// Get google analytics id
	static get googleAnalyticsId() {
		return googleAnalyticsId;
	}
	// Get primary colour
	static get primaryColour() {
		return primaryColour;
	}

	// Get static url
	static get staticURL() {
		if (env === 'development') {
			return staticURLDev;
		} else {
			return staticURLProd;
		}
	}

	// Get env
	static get env() {
		return env;
	}

	// Get site name
	static get siteName() {
		return siteName;
	}

	// Get site url
	static get siteURL() {
		return siteURL;
	}

	// Get s3 base
	static get s3Base() {
		return s3Base;
	}

	// Get default image
	static get defaultImage() {
		return defaultImage;
	}

	// Get twitter username
	static get twitterUsername() {
		return twitterUsername;
	}

	// Get DNS pre fetch
	static get dnsPreFetch() {
		return dnsPreFetch;
	}

}

export default Environment;`;
};
