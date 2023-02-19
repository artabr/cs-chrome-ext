<div align="center">
<img src="public/ui-icon-128.png" alt="logo"/>
<h1>UI Enhancements for Contentstack<br/>Chrome Extension</h1>

![GitHub action badge](https://github.com/artabr/cs-chrome-ext/actions/workflows/build.yml/badge.svg)
![](https://badges.aleen42.com/src/vitejs.svg)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)

</div>

## Table of contents

- [Intro](#intro)
- [Features](#features)
- [Development](#development)
- [Documents](#documents)
- [Thanks to](#thanks)
- [Acknowledgements](#acknowledgements)


## Intro <a name="intro"></a>
This project aims to enhance user experience of the administrative panel of the Contentstack headless CMS.

> Please note, this projects is an unofficial extension.

## Features <a name="features"></a>
- Lets to configure the width of the left sidebar on the Entries tab


## Development <a name="development"></a>

1. Clone this repository
2. Run `pnpm i` (check your node version >= 16.6, recommended >= 18)
3. Run `pnpm run dev`
4. Load Extension on Chrome
   1. Open - Chrome browser
   2. Access - chrome://extensions
   3. Check - Developer mode
   4. Click - Load unpacked extension
   5. Select - `dist` folder in this project (after dev or build)
5. If you want to build for production, run `pnpm run build`

> This project only supports [pnpm](https://pnpm.io/) package manager.


## Documents <a name="documents"></a>
- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [ChromeExtension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)


## Thanks to <a name="thanks"></a>

Special thanks to [JongHak Seo](https://github.com/Jonghakseo) for the amazing starting point for building Chrome extensions.

Please check out his work here [Chrome Extension Boilerplate with React + Vite + TypeScript](https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite)


## Acknowledgements <a name="acknowledgements"></a>

[Ui icons created by Freepik - Flaticon](https://www.flaticon.com/free-icons/ui)
