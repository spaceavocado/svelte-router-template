<script>
  import {slugify, formatDateLong} from '../utils';

  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';
  
  // Props
  export let post;

  // Internals
  let limit = 100;
  let subtitle = post.content;
  if (subtitle.length > 100) {
    subtitle = subtitle.substring(subtitle, limit-3) + '...';
  }
  let date = formatDateLong(post.published);
  let link = {
    name: 'ARTICLE',
    params: {
      id: post.id,
      slug: slugify(post.title)
    }
  };
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
    margin-top: $vs1;
  }
  .author {
    color: $c-text-3;
  }
</style>