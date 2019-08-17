<script>
  import {router} from '@spaceavocado/svelte-router';
  import {site} from '../store/site';
  import articles from '../store/article';
  import {onMount, beforeUpdate} from 'svelte';
  import {fade} from 'svelte/transition';

  // Components
  import Post from '../component/post.svelte';
  import ButtonLink from '../component/button-link.svelte';

  // Props
  export let page;
  export let year;
  export let month;

  // next, prev page link
  const goTo = (change) => {
    if (filter) {
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

  // Internals
  const pageSize = 3;
  let pages = 0;
  let filter = null;
  let posts = [];
  let next;
  let prev;
  
  $: {
    page = page || 1;
    if (year && month) {
      filter = new Date(year, month, 1).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'long',
      });
      pages = Math.ceil($articles.total(year, month) / pageSize);
    } else {
      filter = null;
      pages = Math.ceil($articles.total() / pageSize);
    }

    // Unexptected page
    if (page < 0 || page > pages) {
      $router.replace('/page-not-found');
    }
    posts = $articles.list({page, pageSize, year, month});
    next = goTo(1);
    prev = goTo(-1);
  };
</script>

<svelte:head>
	<title>{$site.title} | Override the Digital Divide</title>
</svelte:head>

<template lang="pug">
  .view(in:fade)
    .vs-xs-3.vs-sm-4
    .container
      h1.heading-1.centered Override the Digital Divide
      +if('filter')
        .vs-xs-2
        p.heading-2.centered {filter}
    .vs-xs-3.vs-sm-4
    .container
      .row
        .col-xs-12.col-md-8.col-md-offset-2
          .posts
            +each('posts as article, i')
              Post(post="{article}")
              +if('i < posts.length-1')
                .vs-xs-3
                .keyline-1
                .vs-xs-3
    .vs-xs-3
    .container
      .row
        .pagination
          +if('page > 1')
            ButtonLink(to="{prev}") Newer
          +if('page < pages')
            ButtonLink(to="{next}") Older
    .vs-xs-3.vs-sm-4
</template>

<style lang="scss">
  .pagination {
    margin: 0 auto;
    :global(.button-link + .button-link) {
      margin-left: $vs-2;
    }
  }
</style>