import App from './app.svelte';
import {createSite} from './store/site';

createSite({
  baseurl: __BASEURL__,
  brand: 'Some Brand',
  title: 'Svelte Router Boilerplate Template',
});

new App({
  target: document.body,
});
