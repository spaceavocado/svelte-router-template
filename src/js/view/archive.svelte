<script>
  import {site} from '../store/site';
  import articles from '../store/article';
  import {onMount} from 'svelte';

  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';

  const monthLink = (year, month) => {
    return {
      name: 'ARTICLES_FILTERED',
      params: {year, month},
    }
  };
  const monthName = (year, month) => new Date(year, month, 1)
    .toLocaleDateString("en-US", {
      month: 'long',
    });

  $: archive = [];
  onMount(() => {
    archive = $articles.archive();
  });
</script>

<svelte:head>
	<title>{$site.title} | Archive</title>
</svelte:head>

<template lang="pug">
  .vs-xs-3.vs-sm-4
  .container
    h1.heading-1.centered Archive
  .vs-xs-3.vs-sm-4
  .container
    .row
      .col-xs-12.col-md-8.col-md-offset-2
        .archive
          +each('archive as year')
            .year
              h2.heading-2 {year[0]}
              .vs-xs-2
              .keyline-1
              .vs-xs-2
              .months
                +each('year[1] as month')
                  .month
                    RouterLink(to="{monthLink(year[0], month)}") {monthName(year[0], month)}
  .vs-xs-3.vs-sm-4
</template>

<style lang="scss">
  .year + .year {
    margin-top: $vs-3;
  }
  .month {
    @include font-size($fs-md);
    @include line-height($fs-md * $lhr);
  }
  .month + .month {
    margin-top: $vs-1;
  }
</style>