# Change Log

#### V2.0.0

- Removed updateIndexHTML() from ReactBuild.
- Removed updateIndexHTML() from ReactDeploy.
- Removed S3BundleUpload.handler(true) from ReactDeploy.
- Removed S3BundleUpload.js.
- Removed s3-bundle-upload command from index.js.
- Modified react component templates.
- Removed ElasticBeanstalk support. (Not knowledgeable enough about AWS ElasticBeanstalk to keep and maintain this feature)
- Updated and modernised ReactInit
- Removed circular dependencies in src/config by merging ConfigGCP, ConfigGit, and ConfigS3 into Config
- Updated third party packages.
- Updated tabs in Log.js to be smaller so logs are easier to read.
- Added project-lines command.
- Added project-stats command.
- Added Format.js utility.
- Added new-line space after titles in Help.

#### V1.4.0

- ReactDeploy & ReactBuild no longer replace /build and replace the whole string instead.

#### V1.3.0

- Changed ReactDeploy to replace /build instead of ./build
- Changed IndexHTML template to use /build instead of ./build
- Changed ReactDeploy to replace s3 url with /build instead of ./build
- Removed options for sass loader in webpack configs
- Updated React templates so that babel works for async await
- Removed <style> related bits from react/templates/app/Head.js

#### V1.2.0

- Jarvis is now cross platform, all commands should now work on macOS, Windows, and Linux
- site-open & site-search now use the default browser instead of Chrome
- Added cs command to display cheat sheets for languages and frameworks
- Added cs-types command to display all available cheat sheets
- Added cs-sections command to display a cheat sheets sections
- Added documentation command to display documentation for langauges, frameworks, and platforms
- Added 93 documentation types
- Added documentation-list command to display available documentation
- Overhauled logging system, Jarvis now uses chalk

#### V1.1.1

- Updated autoCheckUpdates setting default value to true

#### V1.1.0

New:

- Added s3-upload command
- Added checkActiveConfig setting
- Added useSCSS setting
- Added autoCheckUpdates setting
- Added ability to init all settings and new settings
- Added settings-update command
- Added settings-reset command
- Added settings-view command
- Added settings to Jarvis reset command
- react-init now supports SCSS
- react-create now supports SCSS
- Added functionality to automatically check for updates every day
- Added CSS Tricks to site-open and site-search commands
- Added Medium to site-open and site-search commands
- Regions are now validated when creating new, and updating existing AWS configs
- Elastic Beanstalk configs are now supported
- Added eb-init command
- Added eb-deploy command
- react-init now supports Elastic Beanstalk applications
- react-deploy now supports Elastic Beanstalk applications

Updates:

- Removed custom scrollbar from react-init template

Fixes:

- Fixed Environment.js react-init template
- Fixed component tests in react-init template
- Fixed component test in react-create template
- Fixed issue with updating git configs where the ssh config file wouldn't update as expected


#### V1.0.5

- Fixed git-clone success message

#### V1.0.4

- Fixed wrong version number

#### V1.0.3

- Fixed git-clone

#### V1.0.2

- Fixed issues with deploying to Google App Engine (changes in react-init & react-deploy)
- Added react-build command
- Made activating newly added git configs optional
- Added gcloud auth login step when adding new gcp configs

#### V1.0.1

- Added some more near-future plans to README.md

#### V1.0.0

- Initial upload
