// Sheet
exports.sheet = () => {

	return [
		{
			title: "Archive",
			items: [
				{
					title: "Archive",
					values: [
						"archive-dump (ard)(arb)",
						"archive-restore (arr)"
					]
				}
			]
		},
		{
			title: "Role",
			items: [
				{
					title: "Role",
					values: [
						"role-add-perm (rap)",
						"role-create (rcrt)",
						"role-delete (rdel)",
						"role-list (rls)",
						"role-remove-perm (rmp)"
					]
				}
			]
		},
		{
			title: "Watchdog",
			items: [
				{
					title: "Watchdog",
					values: [
						"watchdog-delete (wd-del)",
						"watchdog-list (wd-list)",
						"watchdog-show (ws)"
					]
				}
			]
		},
		{
			title: "Cache",
			items: [
				{
					title: "Cache",
					values: [
						"cache-clear (cc)",
						"cache-get (cg)",
						"cache-rebuild (cr)",
						"cache-set (cs)"
					]
				}
			]
		},
		{
			title: "Sitealias",
			items: [
				{
					title: "Sitealias",
					values: [
						"shell-alias (sha)",
						"site-alias (sa)",
						"site-set (use)"
					]
				}
			]
		},
		{
			title: "Variable",
			items: [
				{
					title: "Variable",
					values: [
						"variable-delete (vdel)",
						"variable-get (vget)",
						"variable-set (vset)"
					]
				}
			]
		},
		{
			title: "Core",
			items: [
				{
					title: "Core",
					values: [
						"core-cli (php)",
						"core-config (conf)",
						"core-cron (cron)",
						"core-execute (exec)",
						"core-quick-drupal (qd)",
						"core-requirements (rq)",
						"core-rsync (rsync)",
						"core-status (st)",
						"drupal-directory (dd)",
						"help",
						"php-eval (ev)(eval)",
						"php-script (scr)",
						"updatedb (updb)",
						"updatedb-status (updbst)",
						"version"
					]
				}
			]
		},
		{
			title: "Field",
			items: [
				{
					title: "Field",
					values: [
						"field-clone",
						"field-create",
						"field-delete",
						"field-info",
						"field-update"
					]
				}
			]
		},
		{
			title: "SQL",
			items: [
				{
					title: "SQL",
					values: [
						"sql-cli (sqlc)",
						"sql-connect",
						"sql-create",
						"sql-drop",
						"sql-dump",
						"sql-query (sqlq)",
						"sql-sanitize (sqlsan)",
						"sql-sync"
					]
				}
			]
		},
		{
			title: "Make",
			items: [
				{
					title: "Make",
					values: [
						"make",
						"make-generate"
					]
				}
			]
		},
		{
			title: "Search",
			items: [
				{
					title: "Search",
					values: [
						"search-index",
						"search-reindex",
						"search-status"
					]
				}
			]
		},
		{
			title: "User",
			items: [
				{
					title: "User",
					values: [
						"user-add-role (urol)",
						"user-block (ublk)",
						"user-cancel (ucan)",
						"user-create (ucrt)",
						"user-information (uinf)",
						"user-login (uli)",
						"user-password (upwd)",
						"user-remove-role (urrol)",
						"user-unblock (uublk)"
					]
				}
			]
		},
		{
			title: "Project Management",
			items: [
				{
					title: "Projec Management",
					values: [
						"pm-disable (dis)",
						"pm-download (dl)",
						"pm-enable (en)",
						"pm-info (pmi)",
						"pm-list (pml)",
						"pm-refresh (rf)",
						"pm-releasenotes (rln)",
						"pm-releases (rl)",
						"pm-uninstall (pmu)",
						"pm-update (up)",
						"pm-updatecode (upc)",
						"pm-updatestatus (ups)"
					]
				}
			]
		}
	];
};
