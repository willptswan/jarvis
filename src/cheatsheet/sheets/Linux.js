// Sheet
exports.sheet = () => {

	return [
		{
			title: "Search Files",
			items: [
				{
					title: "Search Files",
					values: [
						"grep pattern files - Search for pattern in files",
						"grep -i - Case insens-itive search",
						"grep -r - Recursive search",
						"grep -v - Inverted search",
						"grep -o - Show matched part of file only",
						"find /dir/ -name name* - Find files starting with name in dir",
						"find /dir/ -user name - Find files owned by name in dir",
						"find /dir/ -mmin num - Find files modifed less than num minutes ago in dir",
						"whereis command - Find binary / source / manual for command",
						"locate file - Find file (quick search of system index)"
					]
				}
			]
		},
		{
			title: "Bash Commands",
			items: [
				{
					title: "Bash Commands",
					values: [
						"uname -a - Show system and kernel",
						"head -n1 /etc/issue - Show distri-bution",
						"mount - Show mounted filesy-stems",
						"date - Show system date",
						"uptime - Show uptime",
						"whoami - Show your username",
						"man command - Show manual for command"
					]
				}
			]
		},
		{
			title: "ls Options",
			items: [
				{
					title: "ls Options",
					values: [
						"-a - Show all (including hidden)",
						"-R - Recursive list",
						"-r - Reverse order",
						"-t - Sort by last modified",
						"-S - Sort by file size",
						"-l - Long listing format",
						"-1 - One file per line",
						"-m - Comma separated output",
						"-Q - Quoted output"
					]
				}
			]
		},
		{
			title: "File Permissions",
			items: [
				{
					title: "File Permissions",
					values: [
						"4 - read (r)",
						"2 - write (w)",
						"1 - execute (x)",
						"chmod 644 file - Change mode of file to rw-r--r--",
						"chmod -R 750 folder - Recursively chmod folder and contents to rwxr-x---",
						"chown usr:grp file - Change file owner to usr, and group to grp"
					]
				}
			]
		},
		{
			title: "Bash Shortcuts",
			items: [
				{
					title: "Bash Shortcuts",
					values: [
						"CTRL-c - Stop current command",
						"CTRL-z - Sleep program",
						"CTRL-a - Go to start of line",
						"CTRL-e - Go to end of line",
						"CTRL-u - Cut from start of line",
						"CTRL-k - Cut to end of line",
						"CTRL-r - Search history",
						"!! - Repeat last command",
						"!abc - Run last command starting with abc",
						"!abc:p - Print last command starting with abc",
						"!$ - Last argument of previous command",
						"ALT-. - Last argument of previous command",
						"!* - All arguments of previous command",
						"^abc-^-123 - Run previous command, replacing abc with 123"
					]
				}
			]
		},
		{
			title: "Screen Shortcuts",
			items: [
				{
					title: "Screen Shortcuts",
					values: [
						"screen - Start a screen session.",
						"screen -r - Resume a screen session.",
						"screen -list - Show your current screen sessions.",
						"CTRL-A - Activate commands for screen.",
						"CTRL-A c - Create a new instance of terminal.",
						"CTRL-A n - Go to the next instance of terminal.",
						"CTRL-A p - Go to the previous instance of terminal.",
						'CTRL-A " - Show current instances of terminals.',
						"CTRL-A A - Rename the current instance."
					]
				}
			]
		},
		{
			title: "Bash Variables",
			items: [
				{
					title: "Bash Variables",
					values: [
						"env - Show environment variables",
						"echo $NAME - Output value of $NAME variable",
						"export NAME-=v-alue - Set $NAME to value",
						"$PATH - Executable search path",
						"$HOME - Home directory",
						"$SHELL - Current shell"
					]
				}
			]
		},
		{
			title: "Directory Operations",
			items: [
				{
					title: "Directory Operations",
					values: [
						"pwd - Show current directory",
						"mkdir dir - Make directory dir",
						"cd dir - Change directory to dir",
						"cd .. - Go up a directory",
						"ls - List files"
					]
				}
			]
		},
		{
			title: "Nano Shortcuts",
			items: [
				{
					title: "Files",
					values: [
						"Ctrl-R - Read file",
						"Ctrl-O - Save file",
						"Ctrl-X - Close file"
					]
				},
				{
					title: "Images",
					values: [
						"ALT-A - Start marking text",
						"CTRL-K - Cut marked text or line",
						"CTRL-U - Paste text"
					]
				},
				{
					title: "Navigate File",
					values: [
						"ALT-/ - End of file",
						"CTRL-A - Beginning of line",
						"CTRL-E - End of line",
						"CTRL-C - Show line number",
						"CTRL-_ - Go to line number"
					]
				},
				{
					title: "Search File",
					values: [
						"CTRL-W - Find",
						"ALT-W - Find next",
						"CTRL-\\ - Search and replace"
					]
				}
			]
		},
		{
			title: "IO Redirection",
			items: [
				{
					title: "IO Redirection",
					values: [
						"cmd < file - Input of cmd from file",
						"cmd1 <(cmd2 - Output of cmd2 as file input to cmd1",
						"cmd > file - Standard output (stdout) of cmd to file",
						"cmd - Discard stdout of cmd",
						"cmd >> file - Append stdout to file",
						"cmd 2> file - Error output (stderr) of cmd to file",
						"cmd >&2 - stdout to same place as stderr",
						"cmd 2>&1 - stderr to same place as stdout",
						"cmd &> file - Every output of cmd to file"
					]
				}
			]
		},
		{
			title: "Process Management",
			items: [
				{
					title: "Process Management",
					values: [
						"ps - Show snapshot of processes",
						"top - Show real time processes",
						"kill pid - Kill process with id pid",
						"pkill name - Kill process with name name",
						"killall name - Kill all processes with names beginning name"
					]
				}
			]
		},
		{
			title: "Pipes",
			items: [
				{
					title: "Anchros",
					values: [
						"cmd1 | cmd2 - stdout of cmd1 to cmd2",
						"cmd1 |& cmd2 - stderr of cmd1 to cmd2"
					]
				}
			]
		},
		{
			title: "Command Lists",
			items: [
				{
					title: "Command Lists",
					values: [
						"cmd1 ; cmd2 - Run cmd1 then cmd2",
						"cmd1 && cmd2 - Run cmd2 if cmd1 is successful",
						"cmd1 || cmd2 - Run cmd2 if cmd1 is not successful",
						"cmd - Run cmd in a subshell"
					]
				}
			]
		},
		{
			title: "File Operations",
			items: [
				{
					title: "File Operations",
					values: [
						"touch file1 - Create file1",
						"cat file1 file2 - Concatenate files and output",
						"less file1 - View and paginate file1",
						"file file1 - Get type of file1",
						"cp file1 file2 - Copy file1 to file2",
						"mv file1 file2 - Move file1 to file2",
						"rm file1 - Delete file1",
						"head file1 - Show first 10 lines of file1",
						"tail file1 - Show last 10 lines of file1",
						"tail -f file1 - Output last lines of file1 as it changes"
					]
				}
			]
		}
	];
};
