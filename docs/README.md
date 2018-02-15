<h1 align="center">
  <img src="https://raw.githubusercontent.com/{username}/{repo}/master/docs/images/header.svg" alt="React Logo" width="200">
  <br>
  Application / Module Name
  <br>
  <br>
</h1>

<!-- Social & Package Details -->
<p align="center">
  <a href="https://github.com/{username}/{repo}"><img src="https://img.shields.io/github/stars/{username}/{repo}.svg?style=social&label=Stars" alt="Stars" /></a>
  <a href="https://www.npmjs.com/package/{package}"><img src="https://img.shields.io/npm/v/{package}.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/{package}"><img src="https://img.shields.io/npm/dm/{package}.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/{package}"><img src="https://img.shields.io/npm/l/{package}.svg" alt="npm license" /></a>
  <a href="http://packagequality.com/#?package={package}"><img src="http://npm.packagequality.com/shield/{package}.svg" alt="Package Quality" /></a>
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
  <a href="https://travis-ci.org/{username}/{repo}"><img src="https://img.shields.io/travis/{username}/{repo}/master.svg" alt="travis"></a>
  <a href="https://coveralls.io/github/{username}/{repo}"><img src="https://img.shields.io/coveralls/github/jekyll/jekyll.svg" alt="Coveralls"></a>
  <!-- sonarqube - https://github.com/QualInsight/qualinsight-plugins-sonarqube-badges/wiki/Quality-Gate-status-badges -->
  <a href="https://snyk.io/test/github/{username}/{repo}"><img src="https://snyk.io/test/github/{username}/{repo}/badge.svg" alt="Known Vulnerabilities" /></a>
  <a href="https://david-dm.org/{username}/{repo}"><img src="https://img.shields.io/david/{username}/{repo}.svg" alt="dependencies" /></a>
  <a href="https://david-dm.org/{username}/{repo}?type=dev"><img src="https://img.shields.io/david/dev/{username}/{repo}.svg" alt="dev dependencies" /></a>
  <a href="https://david-dm.org/{username}/{repo}?type=optional"><img src="https://img.shields.io/david/optional/{username}/{repo}.svg" alt="optional dependencies" /></a>
  <a href="https://david-dm.org/{username}/{repo}?type=peer"><img src="https://img.shields.io/david/peer/{username}/{repo}.svg" alt="peer dependencies" /></a>
</p>

## Initialize
```bash
$ npm install
$ npm start
```

## Testing
```bash
$ npm test
# npm run test:unit == istanbul mocha
# npm run test:integration == istanbul jest
# npm run test:e2e == ??
```

## Deploying
```bash
$ npm run ci
# npm run ci:legal == license-to-fail
# npm run ci:lint == prettier-standard
# npm run ci:sec == retire & depcheck
# npm run ci:test == coveralls & mocha / jest
# npm run ci:build == create-react-app / webpack
# npm run ci:size == size-limit
```
