![Jarvis](https://uploads-ssl.webflow.com/5cd2d34f316b1272aad0f523/5d075cbcb6e7f842395b0344_Jarvis%20Image.png)

# Jarvis CLI

Jarvis is a continually growing cross-platform CLI that helps with routine tasks and speeds up a few things.

Currently, Jarvis can:

- Manage git configs
- Manage GCP configs
- Manage S3 access configs
- Initialise react projects
- Create react components
- Deploy react projects to Google App Engine
- Push changes to GitHub
- Pull changes from GitHub
- Clone repos from GitHub
- Initialise git directories
- Open websites
- Search websites
- Upload files and folders to S3
- Initialise and deploy Elastic Beanstalk applications
- Display cheat sheets
- Open documentation for languages, frameworks, and platforms in your browser

## Install Jarvis

You can install Jarvis by cloning it from GitHub or installing from NPM.

```
git clone https://github.com/willptswan/jarvis.git
cd jarvis
npm link
```

```
npm install -g @willptswan/jarvis
```

Jarvis requires the following CLI's to be installed:

- Cloud SDK - [Install](https://cloud.google.com/sdk/)
- EB CLI - [Install](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb-cli3-install-advanced.html)

## Using Jarvis

Below is a list of all of the commands that Jarvis can do, if you want to know more about how each command works, then please read my [Medium Story](https://medium.com/@willptswan/building-a-cli-to-help-manage-github-accounts-react-projects-and-more-2755259be493).

#### Version

Display the current version of Jarvis.
```
jarvis version
```

#### Help
List all of the commands that Jarvis is capable of running.
```
jarvis help
```

#### Reset
Reset Jarvis, this deletes all stored configs and resets all settings.
```
jarvis reset
```

#### Config New
Create and store a new config. Valid arguments are git, gcp, eb, and s3.
```
jarvis config-new git
jarvis config-new gcp
jarvis config-new s3
jarvis config-new eb
```

#### Config Delete
Delete a stored config. Valid arguments are git, gcp, eb, and s3.
```
jarvis config-delete git
jarvis config-delete gcp
jarvis config-delete s3
jarvis config-delete eb
```

#### Config Update
Update a stored config. Valid arguments are git, gcp, eb, and s3.
```
jarvis config-update git
jarvis config-update gcp
jarvis config-update s3
jarvis config-update eb
```

#### Config Switch
Switch between stored configs. Valid arguments are git, gcp, eb, and s3.
```
jarvis config-switch git
jarvis config-switch gcp
jarvis config-switch s3
jarvis config-switch eb
```

#### Config View
View all stored configs. Valid arguments are git, gcp, s3, eb, and all.
```
jarvis config-view git
jarvis config-view gcp
jarvis config-view s3
jarvis config-view eb
jarvis config-view all
```

#### React Init
Initialise a complete boilerplate React project.
```
jarvis react-init <projectName>

e.g.

jarvis react-init my-project
jarvis react-init MyProject
jarvis react-init myProject
```
By default, Jarvis will use LESS for all styles. If you would like to use SCSS then update the useSCSS setting.

#### React Create
Create a new boilerplate React component.
```
jarvis react-create <ComponentName>

e.g.

jarvis react-create MyComponent
```
By default, Jarvis will use LESS for all styles. If you would like to use SCSS then update the useSCSS setting.

#### React Deploy
Deploy a react project to Google App Engine or Elastic Beanstalk.
```
jarvis react-deploy <platform> <version>

e.g.

jarvis react-deploy gae 1.0.0
jarvis react-deploy eb 1.0.0
```

#### React Build
Build and run a project in the dev environment.
```
jarvis react-build
```

#### Git Push
Add, commit, and push changes to GitHub.
```
jarvis git-push <version> [files]

e.g.

jarvis git-push 1.0.0 // Push all changes
jarvis git-push 1.0.0 file.js // Only push changes to file.js
jarvis git-push 1.0.0 file1.js file2.js // Push changes for all passed files
```

#### Git Pull
Pull changes from a GitHub repo.
```
jarvis git-pull
```

#### Git Clone
Clone a repo from GitHub.
```
jarvis git-clone <repoName>

e.g.

jarvis git-clone my-repo
```

#### Git Init
Initialise a git directory.
```
jarvis git-init
```

#### Google App Engine Deploy
Deploy a new version of a project to Google App Engine.
```
jarvis gae-deploy <version>

e.g.

jarvis gae-deploy 1.0.0
```

#### Elastic Beanstalk Init
Initialise an Elastic Beanstalk application and environment.
```
jarvis eb-init <applicationName>

e.g.

jarvis eb-init my-app
```

#### Elastic Beanstalk Deploy
Deploy an application to Elastic Beanstalk.
```
jarvis eb-deploy <version>

e.g.

jarvis eb-deploy 1.0.0
```

#### S3 Bundle Upload
Upload a css and js bundle to AWS S3.
```
jarvis s3-bundle-upload
```

#### S3 Upload
Upload files and folders to AWS S3.
```
jarvis s3-upload <filePath> -p
```

Single file upload:
```
jarvis s3-upload file.js
```

Multi file upload:
```
jarvis s3-upload FolderWithMultipleFiles -p
```

Folder upload:
```
jarvis s3-upload Folder
```

#### Site Open
Open a website in a new browser tab.
```
jarvis site-open <site>

e.g.

jarvis site-open https://github.com // Opens GitHub
jarvis site-open github.com // Opens GitHub
jarvis site-open so // Opens Stack Overflow
jarvis site-open npm // Opens NPM
jarvis site-open cocoa // Opens CocoaPods
jarvis site-open g // Opens Google
jarvis site-open awe // Opens Awesome
jarvis site-open gh // Opens GitHub
jarvis site-open css // Opens CSS Tricks
```

#### Site Search
Open and search a website in a new browser tab.
```
jarvis site-search <site>

e.g.

jarvis site-search so // Searches Stack Overflow
jarvis site-search npm // Searches NPM
jarvis site-search g // Searches Google
jarvis site-search gh // Searches GitHub
jarvis site-search css // Searches CSS Tricks
```

#### Settings Update
Update the settings.
```
jarvis settings-update
```

#### Settings Reset
Reset all settings to default values.
```
settings-reset
```

#### Settings View
View all of your current settings.
```
settings-View
```

#### Cheat Sheet
Display the cheat sheet for a language or framework, the section is optional.
```
cs <type> [section]

e.g.

jarvis cs javascript
jarvis cs javascript basic-object
```
Available Cheat Sheets: ActionScript, Characters, CMake, CSS, Docker, Drush, ExpressJS, Git, HTML, HTMLDOM, HTTPStatus, Javascript, jQuery, Linux, mod_rewrite, MongoShell, MySQL, NodeJS, PHP, Python, Regex, Ruby, SVN, UnderscoreJS.

#### Cheat Sheet Types
Display the available cheat sheets
```
cs-types
```

#### Cheat Sheet Type Sections
Display the available sections for a cheat sheet
````
cs-sections <type>

e.g.

jarvis cs-sections javascript
````

#### Documentation
Open documentation for a language, framework, or platform in your browser.
````
documentation <type>

e.g.

jarvis documentation javascript
````
Available Documentation:

Languages: ABAP, ActionScript, Ada, APL, ASP.NET, C, C++, C#, CSS, SCSS, LESS, Erland, Elixir, F#, Go, Haskell, HTML, Java, JavaScript, NodeJS, List, ObjectiveC, OCaml, Perl, PHP, Python, R, RubyOnRails, Scala, Swift, VisualBasic, XML, Rust, Kotlin, Ruby, TypeScript.

Frameworks: Boostrap, jQuery, lodash, request, chalk, react, express, commander, moment, debug, prop-types, react-dom, async, bluebird, fs-extra, tslib, axios, underscore, uuid, mkdirp, classnames, vue, body-parser, yargs, webpack, glob, rxjs, colors, inquirer, minimist, babel-core, core-js, aws-sdk, dotenv, yeoman-generator, redux, tensorflow, Kibana.

Platforms: Apache, Nginx, Kubernetes, Docker, Git, Heroku, Azure, GoogleCloud, AWS, MySQL, PostgreSQL, MongoDB, Redis, ApacheSpark, ElasticSearch, CockroachDB, Joomla.

#### Documentation List
Display a list of all available documentation types.
````
documentation-list
````

## License

See [LICENSE](https://github.com/willptswan/jarvis/blob/master/LICENSE) file.
