// Sheet
exports.sheet = () => {

	return [
		{
			title: "Branching Tagging",
			items: [
				{
					title: "Branching Tagging",
					values: [
						"git branch",
						"git checkout branch",
						"git branch new",
						"git branch new existing",
						"git branch -d branch",
						"git tag tagname"
					]
				}
			]
		},
		{
			title: "Remote Changes",
			items: [
				{
					title: "Remote Changes",
					values: [
						"git remote -v",
						"git remote show remote",
						"git remote add path/url",
						"git fetch remote",
						"git pull remote branch",
						"git push remote branch",
						"git push remote :branch",
						"git push origin/upstream --tags"
					]
				}
			]
		},
		{
			title: "Local Changes",
			items: [
				{
					title: "Local Changes",
					values: [
						"git status",
						"git diff",
						"git add file1 file2 file3",
						"git rm file",
						"git rm dir/ -r",
						"git diff --cached",
						"git commit",
						'git commit -m "My message"',
						'git commit -a -m "My Message"',
						"git commit --amend",
						"git checkout -- file",
						"git revert HEAD",
						"git reset --hard HEAD"
					]
				}
			]
		},
		{
			title: "History",
			items: [
				{
					title: "History",
					values: [
						"git log",
						"git log --pretty=-short",
						"git log -p",
						"git log file",
						"git log dir/",
						"git log --stat",
						"git blame file"
					]
				}
			]
		},
		{
			title: "Merge Rebase",
			items: [
				{
					title: "Merge Rebase",
					values: [
						"git merge branch",
						"git rebase branch",
						"git rebase master branch",
						"git rebase --abort",
						"git mergetool",
						"git diff",
						"git diff --base $file",
						"git diff --ours $file",
						"git diff --theirs $file",
						"git reset --hard",
						"git rebase --skip",
						"git add $conflicting_file",
						"git rebase --continue"
					]
				}
			]
		},
		{
			title: "Useful",
			items: [
				{
					title: "Useful",
					values: [
						"git bisect start",
						"git bisect good $id",
						"git bisect bad $id",
						"git bisect bad/good",
						"git bisect visualize",
						"git bisect reset",
						"git fsck",
						"git gc --prune",
						'git grep "foo()"'
					]
				}
			]
		}
	];
};
