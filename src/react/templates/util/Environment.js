exports.template = () => {
	return `// Constants
const siteName = "";
const siteURL = "";
const s3Base = ""; // Make sure there is no / at the end of the URL
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
const staticURLProd = \`\${s3Base}/\`;
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

	// Get twitter url
	static get twitterURL() {
		return twitterURL;
	}

	// Get facebook url
	static get facebookURL() {
		return facebookURL;
	}

	// Get instagram url
	static get instagramURL() {
		return instagramURL;
	}

	// Get youtube url
	static get youtubeURL() {
		return youtubeURL;
	}

}

export default Environment;`;
};
