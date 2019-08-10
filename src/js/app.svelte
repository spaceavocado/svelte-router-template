<script>
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

createRouter({
  mode: ROUTER_MODE.HASH,
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

</script>

<Nav />
<RouterView />
<Footer />