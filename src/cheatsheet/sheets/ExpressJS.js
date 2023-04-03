// Sheet
exports.sheet = () => {

	return [
		{
			title: "Application",
			items: [
				{
					title: "Application",
					values: [
						"express()",
						"application settings",
						"app.set()",
						"app.get()",
						"app.enable()",
						"app.disable()",
						"app.enabled()",
						"app.disabled()",
						"app.use()",
						"app.engine()",
						"app.param()",
						"application routing",
						"app.all()",
						"app.route()",
						"app.locals",
						"app.render()",
						"app.listen()"
					]
				}
			]
		},
		{
			title: "Request",
			items: [
				{
					title: "Request",
					values: [
						"req.params",
						"req.query",
						"req.param()",
						"req.route",
						"req.cookies",
						"req.signedCookies",
						"req.get()",
						"req.accepts()",
						"req.acceptsCharset()",
						"req.acceptsLanguage()",
						"req.is()",
						"req.ip",
						"req.ips",
						"req.path",
						"req.host",
						"req.fresh",
						"req.stale",
						"req.xhr",
						"req.protocol",
						"req.secure",
						"req.subdomains",
						"req.originalUrl"
					]
				}
			]
		},
		{
			title: "Response",
			items: [
				{
					title: "Response",
					values: [
						"res.status()",
						"res.set()",
						"res.get()",
						"res.cookie()",
						"res.clearCookie()",
						"res.redirect()",
						"res.location()",
						"res.send()",
						"res.json()",
						"res.jsonp()",
						"res.type()",
						"res.format()",
						"res.attachment()",
						"res.sendfile()",
						"res.download()",
						"res.links()",
						"res.locals",
						"res.render()"
					]
				}
			]
		},
		{
			title: "Router",
			items: [
				{
					title: "Router",
					values: [
						"Router()",
						"router.use()",
						"router.param()",
						"router.route()",
						"router.VERB()"
					]
				}
			]
		},
		{
			title: "Middleware",
			items: [
				{
					title: "Middleware",
					values: [
						"bodyParser()",
						"compress()",
						"cookieParser()",
						"cookieSession()",
						"csrf()",
						"errorhandler()",
						"methodOverride()",
						"morgan()",
						"responseTime()",
						"favicon()",
						"directory()",
						"serveStatic()",
						"timeout()",
						"vhost()",
						"session()"
					]
				}
			]
		}
	];
};
