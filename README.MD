# Laravel-mix and Vue Abstraction

I abstracted vue.js and Laravel-Mix out of Laravel. The application runs using a node server but can easily be exported back to Laravel if one intends to do so. Laravel-mix is maintained by Jeffrey Ways and there are zero npm security vunerabilities. This is one of the reasons why I prefer creating frontend projects from scratch rather than using tools to set them up.

[Vue.js](https://vuejs.org) to power the front end site
[Express](https://expressjs.com/) to run the application without Laravel or to create your own node setup.
[Laravel-mix](https://laravel-mix.com/) the best wrapper for webpack out there!
[Tailwindcss](https://tailwindcss.com/) Tailwind to get you started because why not?

### Usage

```
First run npm install to install the node_modules

To start the server run node index in terminal

The scripts are as follows:

"scripts": {

"dev":  "npm run development",

"development":  "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js",

"watch":  "npm run development -- --watch",

"hot":  "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",

"prod":  "npm run production",

"production":  "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js"

},

for example just run npm run dev to compile your assets.
```

### Customization

```
mix

.js("app/resources/js/app.js",  "public/app.js")

.sass("app/resources/css/app.scss",  "public/app.css")

.options({

processCssUrls:  false,

postCss: [tailwindcss("./tailwind.config.js")]

});

mix.buildHtml({

htmlRoot:  "./app/resources/views/index.html",  // Your html root file

output:  "./public/index.html",  // The html output file

partialRoot:  "./public"

});

```

### Credits

The libraries used in the making of this project:

#### cross-env

#### express

#### laravel-mix

#### tailwindcss

#### vue

#### vue-router

#### vuex

#### mix-html-builder

#### posthtml

#### posthtml-include

#### posthtml-loader

#### resolve-url-loader

#### sass

#### sass-loader

#### vue-template-compiler

Made with Love by [Pierre Davis](http://www.charlesdavis.co.za).

Released under the MIT license.
