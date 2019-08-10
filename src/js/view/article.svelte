<script>
  import {router} from '@spaceavocado/svelte-router';
  import site from '../store/site';
  import articles from '../store/article';
  import {formatDateLong} from '../utils';

  // Props
  export let id = 0;

  // Internals
  id = parseInt(id);
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
  .vs-4.vs-sm-3
  .container
    h1.heading-1.centered {article.title}
    .vs-2
    p.centered Posted by #[span.author {article.author}] on #[span.date {formatDateLong(article.published)}]
  .vs-4
  .container
    .layout
      .col-12.col-md-2
      .col-12.col-md-8
        .content {article.content}
  .vs-4.vs-sm-3
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