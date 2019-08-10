<script>
  import site from '../store/site';
  import articles from '../store/article';
  import {onMount} from 'svelte';

  // Components
  import Hero from '../component/hero.svelte';
  import Post from '../component/post.svelte';
  import ButtonLink from '../component/button-link.svelte';

  // Internals
  $: latest = [];

  onMount(() => {
    latest = $articles.list({limit:3});
  });
</script>

<svelte:head>
	<title>{$site.title}</title>
  <meta name="description" content="Boilerplate template project for spaceavocado/svelte-router - Simple Svelte Router for Single Page Applications (SPA)." />
</svelte:head>

<template lang="pug">
  Hero(
    title='{$site.brand}'
    subtitle="{$site.title + ' by Space Avocado'}"
    bg='/assets/img/hero.jpg')
  .vs-4.vs-sm-3
  .container
    .layout
      .col-12.col-md-2
      .col-12.col-md-8.centered
        h2.heading-2 Override the Digital Divide
        .vs-2
        p.callout Leverage agile frameworks to provide a robust synopsis for high level overviews.
          | Iterative approaches to corporate strategy foster collaborative thinking to further the
          | overall value proposition. Organically grow the holistic world view of disruptive innovation
          | via workplace diversity and empowerment.
        .vs-2
        p Bring to the table win-win survival strategies to ensure proactive domination. At the end of
          | the day, going forward, a new normal that has evolved from generation X is on the runway
          | heading towards a streamlined cloud solution. User generated content in real-time will have
          | multiple touchpoints for offshoring.
  .vs-4
  .container
    h2.heading-2.centered Latest Articles
  .vs-3
  .container
    .layout
      .col-12.col-md-2
      .col-12.col-md-8
        .posts
          +each('latest as article, i')
            Post(post="{article}")
            +if('i < latest.length-1')
              .vs-3
              .keyline-1
              .vs-3
  .vs-3
  .container
    .layout.centered
      ButtonLink(to="{{name: 'ARTICLES'}}") View All
  .vs-4.vs-sm-3
</template>

<style lang="scss">
  :global(.button-link) {
    margin: 0 auto;
  }
  .callout {
    @include font-size($fs-md);
    @include line-height($fs-md * $lhr);
  }
</style>