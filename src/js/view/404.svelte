<script>
  import {site} from '../store/site';
</script>

<svelte:head>
	<title>{$site.title} | Page not Found</title>
</svelte:head>

<template lang="pug">
  .vs-4.vs-sm-3
  .container
    h1.heading-1 Page not Found
  .vs-4.vs-sm-3
</template>