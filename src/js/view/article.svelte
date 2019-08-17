<script>
  import {router} from '@spaceavocado/svelte-router';
  import {site} from '../store/site';
  import articles from '../store/article';
  import {formatDateLong} from '../utils';
  import {fade} from 'svelte/transition';

  // Props
  export let id = 0;

  // Internals
  let article;

  try {
    article = $articles.get(id);
  } catch(e) {
    $router.replace('/page-not-found');
  }

</script>

<svelte:head>
	<title>{$site.title} | {article.title}</title>
</svelte:head>

<template lang="pug">
  .view(in:fade)
    .vs-xs-3.vs-sm-4
    .container
      h1.heading-1.centered {article.title}
      .vs-xs-2
      p.centered Posted by #[span.author {article.author}] on #[span.date {formatDateLong(article.published)}]
    .vs-xs-3.vs-sm-4
    .container
      .row
        .col-xs-12.col-md-8.col-md-offset-2
          .content {article.content}
    .vs-xs-3.vs-sm-4
</template>

<style lang="scss">
  .author {
    color: $c-text-3;
  }
  .content {
    @include font-size($fs-md);
    @include line-height($fs-md * $lhr);
  }
</style>