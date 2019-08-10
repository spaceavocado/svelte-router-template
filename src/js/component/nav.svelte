<script>
  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';
</script>

<template lang="pug">
  nav
    .vs-2
    .container
      .flex
        RouterLink(to='/' cls='brand') Some Brand
        .spacer
        ul
          li
            RouterLink(to="{{name: 'ARTICLES'}}") Articles
          li
            RouterLink(to="{{name: 'ARCHIVE'}}") Archive
          li
            RouterLink(to="{{name: 'CONTACT'}}") Contact
    .vs-2
</template>

<style lang="scss">
  nav {
    ul {
      li {
        display: inline-block;
        padding-right: $vs2;
        &:last-child {
          padding-right: 0;
        }
      }
    }
    :global(a) {
      font-weight: 700;
    }
    :global(a.brand) {
      text-transform: uppercase;
    }
  }
</style>