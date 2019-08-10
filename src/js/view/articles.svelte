<script>
  import {router} from '@spaceavocado/svelte-router';
  import {site} from '../store/site';
  import articles from '../store/article';
  import {onMount} from 'svelte';

  // Components
  import Post from '../component/post.svelte';
  import ButtonLink from '../component/button-link.svelte';

  // Props
  export let page;
  export let year;
  export let month;

  // Internals
  page = page || 1;
  page = parseInt(page);
  let pageSize = 3;
  let pages = 0;
  let filtered = false;
  let filter = '';

  if (year && month) {
    filtered = true;
    year = parseInt(year);
    month = parseInt(month);
    filter = new Date(year, month, 1).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
    });
    pages = Math.ceil($articles.total(year, month) / pageSize);
  } else {
    pages = Math.ceil($articles.total() / pageSize);
  }

  // Unexptected page
  if (page < 0 || page > pages) {
    $router.replace('/page-not-found');
  }

  // next, prev page link
  const goTo = (change) => {
    if (filtered) {
      return {
        name: 'ARTICLES_FILTERED_PAGED',
        params: {
          page: page + change,
          year,
          month,
        }
      };
    } else {
      return {
        name: 'ARTICLES_PAGED',
        params: {
          page: page + change,
        }
      };
    }
  }

  $: posts = [];
  onMount(() => {
    posts = $articles.list({page, pageSize});
  });
</script>

<svelte:head>
	<title>{$site.title} | Override the Digital Divide</title>
</svelte:head>

<template lang="pug">
  .vs-4.vs-sm-3
  .container
    h1.heading-1.centered Override the Digital Divide
    +if('filtered')
      .vs-2
      p.heading-2.centered {filter}
  .vs-4
  .container
    .layout
      .col-12.col-md-2
      .col-12.col-md-8
        .posts
          +each('posts as article, i')
            Post(post="{article}")
            +if('i < posts.length-1')
              .vs-3
              .keyline-1
              .vs-3
  .vs-3
  .container
    .layout
      .pagination
        +if('page > 1')
          ButtonLink(to="{goTo(-1)}") Newer
        +if('page < pages')
          ButtonLink(to="{goTo(1)}") Older
  .vs-4.vs-sm-3
</template>

<style lang="scss">
  .pagination {
    margin: 0 auto;
    :global(.button-link + .button-link) {
      margin-left: $vs2;
    }
  }
</style>