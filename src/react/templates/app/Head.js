exports.template = () => {
	return `// Packages
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet";

// Utils
import Environment from '../../utils/Environment';

// Class
class Head extends React.Component {

	constructor(props) {

		super(props);

		// Bind this to functions
		this.formatTitle = this.formatTitle.bind(this);
		this.formatURL = this.formatURL.bind(this);
		this.formatImage = this.formatImage.bind(this);
		this.formatStyleSource = this.formatStyleSource.bind(this);

	}

	formatTitle() {

		// Get site name from env
		let title = Environment.siteName;

		// Check if a page name was passed
		if (this.props.page !== '' && this.props.page !== null && typeof(this.props.page) !== 'undefined') {
			title = \`\${this.props.page} | \${title}\`;
		}

		return title;

	}

	formatURL() {

		return \`\${Environment.siteURL}\${this.props.slug}\`;

	}

	formatImage() {

		// Get base s3 url
		let image = Environment.s3Base;

		// Check if an image was passed
		if (this.props.image !== '' && this.props.image !== null && typeof(this.props.image) !== 'undefined') {
			image += this.props.image;
		} else {
			image += Environment.defaultImage;
		}

		return image;

	}

	formatStyleSource() {

		// Get static url
		let url = Environment.staticURL;

		// Check which environment we are in
		if (Environment.env === 'development') {
			url += 'index.css';
		} else {
			url += 'index.css.gz';
		}

		return url;

	}

	render() {

		return (

			<Helmet>

        // Charset
				<meta charset="UTF-8" />

        // Viewport
				<meta name="viewport" content="width=device-width, initial-scale=1" />

        // Robots
				<meta name="robots" content="index, follow" />

        // Author
				<meta name="author" content={Environment.siteName} />

        // Title
				<title>{this.formatTitle()}</title>

        // Canonical
				<link rel="canonical" href={this.formatURL()} />

        // Description
				<meta name="description" content={this.props.description}/>

        // Open Graph
				<meta property="og:locale" content="en_GB" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={this.formatTitle()} />
				<meta property="og:description" content={this.props.description} />
				<meta property="og:url" content={this.formatURL()} />
				<meta property="og:site_name" content={Environment.siteName} />
				<meta property="og:image" content={this.formatImage()} />

        // Twitter
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:description" content={this.props.description} />
				<meta name="twitter:title" content={this.formatTitle()} />
				<meta name="twitter:site" content={Environment.twitterUsername} />

        // Schema
				<script type="application/ld+json">
					{\`{
  "@context":"https://schema.org",
  "@type":"Organization",
  "url":"\${Environment.siteURL}",
  "sameAs":[
    "\${Environment.instagramURL}",
    "\${Environment.youtubeURL}",
    "\${Environment.twitterURL}",
    "\${Environment.facebookURL}"
  ],
  "@id":"\${Environment.siteURL}/#organization",
  "name":"\${Environment.siteName}",
  "logo":"\${this.formatImage()}"
}\`}
				</script>

        // DNS PreFetch
				{Environment.dnsPreFetch.map((url, index) => (
					<link rel="dns-prefetch" href={url} key={index} />
				))}

        // Style sheet
				<link rel="stylesheet" media="screen" type="text/css" href={this.formatStyleSource()} />

        // Google Analytics
				{(Environment.env === 'production') ?

					<script async src={\`https://www.googletagmanager.com/gtag/js?id=\${Environment.googleAnalyticsId}\`}></script>

					: ''

				}

				{(Environment.env === 'production') ?

					<script>
						{\`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '\${Environment.googleAnalyticsId}');\`}
					</script>

					: ''

				}

        // Favicons
				<link rel="apple-touch-icon" sizes="57x57" href={\`\${Environment.s3Base}/favicon/apple-icon-57x57.png\`} />
				<link rel="apple-touch-icon" sizes="60x60" href={\`\${Environment.s3Base}/favicon/apple-icon-60x60.png\`} />
				<link rel="apple-touch-icon" sizes="72x72" href={\`\${Environment.s3Base}/favicon/apple-icon-72x72.png\`} />
				<link rel="apple-touch-icon" sizes="76x76" href={\`\${Environment.s3Base}/favicon/apple-icon-76x76.png\`} />
				<link rel="apple-touch-icon" sizes="114x114" href={\`\${Environment.s3Base}/favicon/apple-icon-114x114.png\`} />
				<link rel="apple-touch-icon" sizes="120x120" href={\`\${Environment.s3Base}/favicon/apple-icon-120x120.png\`} />
				<link rel="apple-touch-icon" sizes="144x144" href={\`\${Environment.s3Base}/favicon/apple-icon-144x144.png\`} />
				<link rel="apple-touch-icon" sizes="152x152" href={\`\${Environment.s3Base}/favicon/apple-icon-152x152.png\`} />
				<link rel="apple-touch-icon" sizes="180x180" href={\`\${Environment.s3Base}/favicon/apple-icon-180x180.png\`} />
				<link rel="icon" type="image/png" sizes="192x192"  href={\`\${Environment.s3Base}/favicon/android-icon-192x192.png\`} />
				<link rel="icon" type="image/png" sizes="32x32" href={\`\${Environment.s3Base}/favicon/favicon-32x32.png\`} />
				<link rel="icon" type="image/png" sizes="96x96" href={\`\${Environment.s3Base}/favicon/favicon-96x96.png\`} />
				<link rel="icon" type="image/png" sizes="16x16" href={\`\${Environment.s3Base}/favicon/favicon-16x16.png\`} />
				<link rel="manifest" href={\`\${Environment.s3Base}/favicon/manifest.json\`} />
				<meta name="msapplication-TileImage" content={\`\${Environment.s3Base}/favicon/ms-icon-144x144.png\`} />
				<meta name="msapplication-TileColor" content={Environment.primaryColour} />
				<meta name="theme-color" content={Environment.primaryColour} />

			</Helmet>

		);

	}

}

// Prop Types
Head.propTypes = {
	page: PropTypes.string,
	slug: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string
};

export default Head;`;
};
