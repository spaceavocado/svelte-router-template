<script>
  import {site} from './store/site';
  import createRouter, {ROUTER_MODE} from '@spaceavocado/svelte-router';
  import RouterView from '@spaceavocado/svelte-router/component/view';

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

  // Create a new router
  createRouter({
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
            props: (route) => {
              return {
                page: parseInt(route.params.page),
              }
            },
          },
          {
            path: '/:year(\\d+)/:month(\\d+)',
            name: 'ARTICLES_FILTERED',
            component: ViewArticles,
            props: (route) => {
              return {
                year: parseInt(route.params.year),
                month: parseInt(route.params.month),
              }
            },
          },
          {
            path: '/:year(\\d+)/:month(\\d+)/:page(\\d+)',
            name: 'ARTICLES_FILTERED_PAGED',
            component: ViewArticles,
            props: (route) => {
              return {
                page: parseInt(route.params.page),
                year: parseInt(route.params.year),
                month: parseInt(route.params.month),
              }
            },
          }
        ]
      },
      { 
        path: '/article/:id(\\d+)-:slug',
        name: 'ARTICLE',
        component: ViewArticle,
        props: (route) => {
          return {
            id: parseInt(route.params.id),
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
</script>

<Nav />
<RouterView />
<Footer />