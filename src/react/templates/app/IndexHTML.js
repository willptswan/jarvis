exports.template = () => {
	return `<!DOCTYPE html>
<html lang="en-GB" prefix="og: http://ogp.me/ns#">

  <!-- HEAD -->
  <head>

    <!-- GENERAL META -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />

		<!-- TODO: COMPLETE META -->

    <!-- DESCRIPTIVE META -->
    <meta name="author" content="**TODO**" />
    <link rel="canonical" href="**TODO**" />
    <title>**TODO**</title>
    <meta name="description" content="**TODO**"/>

    <!-- OPENGRAPH -->
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="**TODO**" />
    <meta property="og:description" content="**TODO**" />
    <meta property="og:url" content="**TODO**" />
    <meta property="og:image" content="**TODO**" />
    <meta property="og:site_name" content="**TODO**" />
    <meta property="fb:app_id" content="**TODO**" />

    <!-- TWITTER -->
    <meta name="twitter:description" content="**TODO**" />
    <meta name="twitter:title" content="**TODO**" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="**TODO**" />

    <!-- FAVICON -->
    <!-- **TODO** -->

    <!-- SEO -->
    <script type="application/ld+json">
      {
        "@context":"https://schema.org",
        "@type":"Organization",
        "url":"**TODO**",
        "sameAs":[
          "https://instagram.com/**TODO**"
        ],
        "@id":"https://**TODO**/#organization",
        "name":"**TODO**",
        "logo":"**TODO**"
      }
    </script>

  </head>

  <!-- BODY -->
  <body>

      <!-- APP -->
      <div id="application"></div>

  </body>

</html>`;
};
