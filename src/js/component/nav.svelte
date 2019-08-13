<script>
  import {site} from '../store/site';

  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';
</script>

<template lang="pug">
  nav
    .vs-xs-2
    .container
      .flex
        RouterLink(to='/' cls='brand') {$site.brand}
        .spacer
        ul
          li
            RouterLink(to="{{name: 'ARTICLES'}}") Articles
          li
            RouterLink(to="{{name: 'ARCHIVE'}}") Archive
          li
            RouterLink(to="{{name: 'CONTACT'}}") Contact
    .vs-xs-2
</template>

<style lang="scss">
  nav {
    ul {
      li {
        display: inline-block;
        padding-right: $vs-2;
        &:last-child {
          padding-right: 0;
        }
      }
    }
    :global(a) {
      font-weight: 700;
      padding: $vs-1/2 0;
      display: inline-block;
      &.active {
        border-bottom: 2px solid $c-text-1;
      }
    }
    :global(a.brand) {
      text-transform: uppercase;
      &.active {
        border: 0;
      }
    }
  }
</style>