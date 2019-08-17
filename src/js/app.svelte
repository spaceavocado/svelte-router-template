<script>
  import {site} from './store/site';
  import createRouter, {ROUTER_MODE} from '@spaceavocado/svelte-router';
  import RouterView from '@spaceavocado/svelte-router/component/view';
  import {fade} from 'svelte/transition';

  // View components
  import ViewHome from './view/home.svelte';
  import View404 from './view/404.svelte';
  import ViewArticles from './view/articles.svelte';
  import ViewArticle from './view/article.svelte';
  import ViewArchive from './view/archive.svelte';
  import ViewContact from './view/contact.svelte';

  // Componentns
  import Nav from './component/nav.svelte';
  import Footer from './component/footer.svelte';

  // Internals
  let mask = false;

  // Create a new router
  let router = createRouter({
    mode: ROUTER_MODE.HISTORY,
    basename: $site.baseurl,
    routes: [
      { 
        path: '/',
        name: 'HOME',
        component: ViewHome,
      },
      { 
        path: '/articles',
        children: [
          {
            path: '',
            name: 'ARTICLES',
            component: ViewArticles,
          },
          {
            path: '/:page(\\d+)',
            name: 'ARTICLES_PAGED',
            component: ViewArticles,
            props: true,
          },
          {
            path: '/:year(\\d+)/:month(\\d+)',
            name: 'ARTICLES_FILTERED',
            component: ViewArticles,
            props: true,
          },
          {
            path: '/:year(\\d+)/:month(\\d+)/:page(\\d+)',
            name: 'ARTICLES_FILTERED_PAGED',
            component: ViewArticles,
            props: true,
          }
        ]
      },
      { 
        path: '/article/:id(\\d+)-:slug',
        name: 'ARTICLE',
        component: ViewArticle,
        props: (route) => {
          return {
            id: route.params.id,
          }
        },
      },
      {
        path: '/archive',
        name: 'ARCHIVE',
        component: ViewArchive
      },
      { 
        path: '/contact',
        name: 'CONTACT',
        component: ViewContact,
      },
      {
        path: '*',
        component: View404,
      },
    ],
  });

  // Simple page/route transition mask
  $router.onBeforeNavigation(() => {
    mask = true;
  });
  $router.onNavigationChanged(() => {
    setTimeout(() => {
      mask = false;
    }, 10);
  });
</script>

<Nav />
<div class="content">
  {#if mask}  
    <div class="mask" out:fade></div>
  {/if}
  <RouterView />
</div>
<Footer />

<style lang="scss">
.content {
  position: relative;
  .mask {
    z-index: 10;
    background-color: $c-bg-1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>