# Svelte Router Template

Boilerplate template project for [spaceavocado/svelte-router](https://github.com/spaceavocado/svelte-router) - Simple Svelte Router for Single Page Applications (SPA). 

## Live Preview
[https://spaceavocado.github.io/svelte-router-template/](https://spaceavocado.github.io/svelte-router-template/)

## Setup
1. Clone this repository or [create your repository from this template](https://help.github.com/en/articles/creating-a-repository-from-a-template).
2. Install packages:
	```npm install ``` or ```yarn install ```

## Essential Information

 - [Webpack](https://webpack.js.org/) based project.
 - JS transpiled with [Babel](https://babeljs.io/).
 - SCSS for Svelte integrated with [Svelte Preprocess](https://github.com/kaisermann/svelte-preprocess), please see [svelte.config.js](https://github.com/spaceavocado/svelte-router-template/blob/master/svelte.config.js) for integration details.
 - [Pug](https://pugjs.org/) for Svelte integrated with [Svelte Preprocess](https://github.com/kaisermann/svelte-preprocess), please see the [Svelte Pug syntax limitations](https://github.com/kaisermann/svelte-preprocess#pug).
 - The template is set to use the Svelte Router HTML5 history mode, to switch it to HASH mode, please see the [Router Options](https://github.com/spaceavocado/svelte-router#router-options).
	```javascript
	createRouter({
	  mode: ROUTER_MODE.HASH,
	});
	```

## Local Development Server
To run the development server that provides live reloading, run:
```npm run start``` or  ```yarn start```

## Production Build
```npm run build:prod``` or  ```yarn build:prod```

The productions files are located in **/publish** folder:

 - index.html
 - dist
 - assets

## License
Svelte Router is released under the MIT license. See [LICENSE.txt](https://github.com/spaceavocado/svelte-router-template/blob/master/LICENSE.txt).