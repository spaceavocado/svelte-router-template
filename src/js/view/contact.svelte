<script>
  import {site} from '../store/site';
</script>

<svelte:head>
	<title>{$site.title} | Contact</title>
</svelte:head>

<template lang="pug">
  .vs-xs-3.vs-sm-4
  .container
    h1.heading-1 Contact
  .vs-xs-3
  .container
    .row
      .col-xs-12.col-md-5
        p.callout 
          | Podcasting operational change management inside of workflows to establish a framework. Taking
          | seamless key performance indicators offline to maximise the long tail. Keeping your eye on
          | the ball while performing a deep dive on the start-up mentality to derive convergence on
          | cross-platform integration.
        .vs-xs-3.vs-md-0
      .col-xs-12.col-md-3.col-md-offset-1
        h2.heading-2 1 809 222 8271
        .vs-xs-2
        strong Monday to Wednesday
        p 8:00 AM–8:00 PM EST
        .vs-xs-2
        strong Thursday
        p 8:00 AM–8:00 PM EST
        .vs-xs-2
        strong Friday
        p 10:00 AM–4:00 PM EST
        .vs-xs-2
        strong We are closed on all holidays.
        .vs-none.vs-sm-3
      .col-xs-12.col-md-3
        h2.heading-2 Mail Address
        .vs-xs-2
        p Some Brand Enterprises, LLC
        p 102 Peterson Road, Suite 29
        p Pattsrurgh, PB 16227
  .vs-xs-3.vs-sm-4
</template>

<style lang="scss">
  .callout {
    @include font-size($fs-md);
    @include line-height($fs-md * $lhr);
  }
</style>