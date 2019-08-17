<script>
  import {site} from '../store/site';
  import articles from '../store/article';
  import {fade} from 'svelte/transition';

  // Components
  import Hero from '../component/hero.svelte';
  import Post from '../component/post.svelte';
  import ButtonLink from '../component/button-link.svelte';

  // Internals
  $: latest = $articles.list({limit:3});
</script>

<svelte:head>
	<title>{$site.title}</title>
  <meta name="description" content="Boilerplate template project for spaceavocado/svelte-router - Simple Svelte Router for Single Page Applications (SPA)." />
</svelte:head>

<template lang="pug">
  .view(in:fade)
    Hero(
      title='{$site.brand}'
      subtitle="{$site.title + ' by Space Avocado'}"
      bg="{$site.baseurl + '/assets/img/hero.jpg'}")
    .vs-xs-3.vs-sm-4
    .container
      .row
        .col-xs-12.col-md-8.col-md-offset-2
          h2.heading-2.centered Override the Digital Divide
          .vs-xs-2
          p.callout.centered Leverage agile frameworks to provide a robust synopsis for high level
            | overviews. Iterativeapproaches to corporate strategy foster collaborative thinking to
            | further the overall value proposition. Organically grow the holistic world view offset
            | disruptive innovation.
          .vs-xs-2
          p.centered Bring to the table win-win survival strategies to ensure proactive domination. At the end of
            | the day, going forward, a new normal that has evolved from generation X is on the runway
            | heading towards a streamlined cloud solution. User generated content in real-time will have
            | multiple touchpoints for offshoring.
    .vs-xs-3.vs-sm-4
    .container
      h2.heading-2.centered Latest Articles
    .vs-xs-3
    .container
      .row
        .col-xs-12.col-md-8.col-md-offset-2
          .posts
            +each('latest as article, i')
              Post(post="{article}")
              +if('i < latest.length-1')
                .vs-xs-3
                .keyline-1
                .vs-xs-3
    .vs-xs-3
    .container
      .row.centered
        ButtonLink(to="{{name: 'ARTICLES'}}") View All
    .vs-xs-3.vs-sm-4
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