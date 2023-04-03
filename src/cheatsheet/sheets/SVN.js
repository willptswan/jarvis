// Sheet
exports.sheet = () => {

	return [
		{
			title: "Logs Blame",
			items: [
				{
					title: "Logs Blame",
					values: [
						'$ svn log "/path" - Show log messages for path',
						'$ svn blame "/path" - Show commits for path'
					]
				}
			]
		},
		{
			title: "Misc",
			items: [
				{
					title: "Misc",
					values: [
						'$ svn resolve "/path" - Resolve conflict',
						'$ svn cleanup "/path" - Remove locks and complete operations',
						'$ svn lock "/path" - Lock path',
						'$ svn unlock "/path" - Unlock path',
						'$ svn status "/path" - Get path status',
						'$ svn cat "/path" - View file contents'
					]
				}
			]
		},
		{
			title: "Component",
			items: [
				{
					title: "Component",
					values: [
						"svn - Command line program",
						"svnversion - Revision of working copy",
						"svnlook - Inspect repository",
						"svnadmin - Repository administration",
						"svndumpfilter - Filter repository stream",
						"mod_dav_svn - Apache module",
						"svnserve - SVN server (SVN protocol)",
						"svnsync - Mirror repository"
					]
				}
			]
		},
		{
			title: "Repo Admin",
			items: [
				{
					title: "Repo Admin",
					values: [
						'$ svnadmin create "/path/to/repository" - Create new repository',
						'$ svnadmin setlog "/path" r 7 message.txt - Change log message for revision 7 to contents of file message.txt',
						'$ svnadmin dump "/path/to/repository" > filename - Dump repository to file (backup)',
						'$ svnadmin load "/path/to/repository" < filename - Load repository from file (restore)'
					]
				}
			]
		},
		{
			title: "Checkout Help",
			items: [
				{
					title: "Checkout Help",
					values: [
						'$ svn checkout "/path/to/repository" - Checkout working copy into current folder',
						'$ svn checkout "/path/to/repository" "/path/to/folder" - Checkout working copy into target folder',
						'$ svn help',
						'$ svn help import - Show help for "import" command'
					]
				}
			]
		},
		{
			title: "Protocols",
			items: [
				{
					title: "Protocols",
					values: [
						"file:// - Local machine",
						"http:// - HTTP (Apache)",
						"https:// - HTTPS (SSL)",
						"svn:// - SVN (svnserve)",
						"svn+ssh:// - SVN over SSH"
					]
				}
			]
		},
		{
			title: "Item Property Statuses",
			items: [
				{
					title: "Item Property Statuses",
					values: [
						"A - Addition",
						"D - Deletion",
						"M - Modified",
						"R - Item replaced",
						"C - In conflict",
						"X - Externals definition",
						"I - Ignored",
						"? - Not in repository",
						"! - Item missing",
						"~ - Object type changed"
					]
				}
			]
		},
		{
			title: "Commit",
			items: [
				{
					title: "Commit",
					values: [
						'$ svn commit "/path" - Commit changes to path',
						'$ svn commit -m "Message" "/path" - Commit with log message',
						'$ svn commit -N "/path" - Commit without recursion',
						'$ svn import "/path/to/folder" "/path" - Import and commit local folder'
					]
				}
			]
		},
		{
			title: "Add Delete",
			items: [
				{
					title: "Add Files Folders",
					values: [
						'$ svn add * - Add all items, recursively',
						'$ svn add itemname - Add itemname (if folder, adds recursively)',
						'$ svn add * --force - Force recursion into versioned directories'
					]
				},
				{
					title: "Deleting Copying Moving",
					values: [
						'$ svn delete "/path" - Delete path',
						'$ svn -m "Delete message" delete "/path" - Delete with log message',
						'$ svn copy "/source" "/target" - Copy source to target',
						'$ svn move "/source" "/target" - Move source to target'
					]
				}
			]
		},
		{
			title: "Update",
			items: [
				{
					title: "Update",
					values: [
						'$ svn update "/path" - Update path',
						'$ svn update -r9 "/path" - Update path to revision 9'
					]
				}
			]
		},
		{
			title: "Diff Revert Merge",
			items: [
				{
					title: "Differences",
					values: [
						'$ svn diff "/path/file"',
						'$ svn diff "/path/file@2" "/path/file@7"',
						'$ svn diff -r 2:7 "/path/folder"'
					]
				},
				{
					title: "Revert",
					values: [
						'$ svn revert "/path" - Revert changes to path',
						'$ svn revert -R "/path" - Revert changes recursively'
					]
				},
				{
					title: "Merge",
					values: [
						'$ svn merge -r2:7 "item" "/path" - Apply diff between revisions 2 and 7 of "item" to path',
						'$ svn merge "url1" "url2" "/path" - Apply diff between "url1" and "url2" to path'
					]
				}
			]
		},
		{
			title: "Argument Shortcuts",
			items: [
				{
					title: "Argument Shortcuts",
					values: [
						'-m "Message" --message',
						'-q --quiet',
						'-v --verbose',
						'-r --revision',
						'-c --change',
						'-t --transaction',
						'-R --recursive',
						'-N --non-recursive'
					]
				}
			]
		}
	];
};
