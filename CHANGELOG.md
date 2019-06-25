# Change Log

#### 1.1.0

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
