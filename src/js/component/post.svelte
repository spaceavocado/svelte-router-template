<script>
  import {slugify, formatDateLong} from '../utils';

  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';
  
  // Props
  export let post;

  // Internals
  const limit = 100;
  let subtitle;
  let date;
  let link;

  $: {
    subtitle = post.content;
    if (subtitle.length > 100) {
      subtitle = subtitle.substring(subtitle, limit-3) + '...';
    }
    date = formatDateLong(post.published);
    link = {
      name: 'ARTICLE',
      params: {
        id: post.id,
        slug: slugify(post.title)
      }
    };
  }
</script>

<template lang="pug">
  +if('post')
    .post
      RouterLink(to='{link}')
        h2.heading-2 {post.title}
        h3.subtitle {subtitle}
    .meta Posted by #[span.author {post.author}] on #[span.date {date}]
</template>

<style lang="scss">
  .subtitle {
    color: $c-text-1;
    @include font-size($fs-md);
    @include line-height($fs-md * $lhr);
  }
  .meta {
    margin-top: $vs-1;
  }
  .author {
    color: $c-text-3;
  }
</style>