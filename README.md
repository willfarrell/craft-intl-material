<h1 align="center">
  <img src="https://raw.githubusercontent.com/willfarrell/craft-react-material/master/docs/images/header.svg" alt="React Logo" width="200">
  <br>
  CRAFT: Create React App From Template
  <br>
  <br>
</h1>

<!-- Social & Package Details -->
<p align="center">
  <a href="https://github.com/willfarrell/craft-react-material"><img src="https://img.shields.io/github/stars/willfarrell/craft-react-material.svg?style=social&label=Stars" alt="Stars" /></a>
  <a href="https://www.npmjs.com/package/craft-react-material"><img src="https://img.shields.io/npm/v/craft-react-material.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/craft-react-material"><img src="https://img.shields.io/npm/dm/craft-react-material.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/craft-react-material"><img src="https://img.shields.io/npm/l/craft-react-material.svg" alt="npm license" /></a>
  <a href="http://packagequality.com/#?package={repo}"><img src="http://npm.packagequality.com/shield/{repo}.svg" alt="Package Quality" /></a>
</p>
<!-- Standards -->
<p align="center">
  <a href="https://standardjs.com"><img alt="Standard - JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"></a>
  <a href="https://github.com/prettier/prettier"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
  <a href="https://conventionalcommits.org"><img alt="Conventional Commits" src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg"></a>
  <a href="https://github.com/conventional-changelog/standard-version"><img alt="Standard Version" src="https://img.shields.io/badge/release-standard%20version-brightgreen.svg"></a>
</p>
<!-- CI/CD -->
<p align="center">
  <a href="https://travis-ci.org/willfarrell/craft-react-material"><img src="https://img.shields.io/travis/willfarrell/craft-react-material/master.svg" alt="travis"></a>
  <a href="https://coveralls.io/github/willfarrell/craft-react-material"><img src="https://img.shields.io/coveralls/github/willfarrell/craft-react-material.svg" alt="Coveralls"></a>
  <!-- sonarqube - https://github.com/QualInsight/qualinsight-plugins-sonarqube-badges/wiki/Quality-Gate-status-badges -->
  <a href="https://snyk.io/test/github/willfarrell/craft-react-material"><img src="https://snyk.io/test/github/willfarrell/craft-react-material/badge.svg" alt="Known Vulnerabilities" /></a>
  <a href="https://david-dm.org/willfarrell/craft-react-material"><img src="https://img.shields.io/david/willfarrell/craft-react-material.svg" alt="dependencies" /></a>
  <a href="https://david-dm.org/willfarrell/craft-react-material?type=dev"><img src="https://img.shields.io/david/dev/willfarrell/craft-react-material.svg" alt="dev dependencies" /></a>
  <a href="https://david-dm.org/willfarrell/craft-react-material?type=optional"><img src="https://img.shields.io/david/optional/willfarrell/craft-react-material.svg" alt="optional dependencies" /></a>
  <a href="https://david-dm.org/willfarrell/craft-react-material?type=peer"><img src="https://img.shields.io/david/peer/willfarrell/craft-react-material.svg" alt="peer dependencies" /></a>
</p>

## Initialize
```bash
$ npm install -g craftool create-react-app
$ craft MyApp https://github.com/willfarrell/craft/archive/master.zip
$ cd MyApp
$ npm install
```

### public
- [ ] Update index.html w/ Application Name
- [ ] Update humans.txt
- [ ] Update robots.txt
- [ ] Update security.txt

#### favicons
- [ ] Create a 4096x4096 png icon
- [ ] Add favicons (https://realfavicongenerator.net)

### Docs
- [ ] Update `docs/README.md`
- [ ] Delete this file 

## Features
### App 
- i18n built in
- .well-known files
- polyfills
- Material-UI
- theme template

### Dev
- root module import supported
- Code Quality
  - `prettier-standard` (format & linting)
- Testing
  - jest & enzyme with polyfills (frontend unit & integration tests)
  - mocha & chai (module unit & integration tests)

- Build you remember to build your [Storybook](https://storybook.js.org) first

## Sources
- https://github.com/stoyan/craft
- https://github.com/facebookincubator/create-react-app
- https://github.com/AnomalyInnovations/serverless-stack-demo-client/tree/code-splitting-in-create-react-app
