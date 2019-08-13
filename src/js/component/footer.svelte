<script>
  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';
</script>

<template lang="pug">
  footer
    .vs-xs-3.vs-sm-4
    .container
      .row
        .col-xs-12.col-md-3
          RouterLink(to='/' cls='brand') Some Brand
          .vs-xs-1
        .col-xs-12.col-md-4
          p
            strong Corporate Headquarters
          p Some Brand Enterprises, LLC
          p 102 Peterson Road, Suite 29
          p Pattsrurgh, PB 16227
          .vs-xs-1
        .col-xs-12.col-md-5
          ul
            li
              RouterLink(to="{{name: 'ARTICLES'}}") Articles
            li
              RouterLink(to="{{name: 'ARCHIVE'}}") Archive
            li
              RouterLink(to="{{name: 'CONTACT'}}") Contact
      .vs-xs-3
      .row
        .col-xs-12.col-md-3
        .col-xs-12.col-md-9
          p.copyright
            | © 2019 SOME BRAND Enterprises. All Rights Reserved. Website designed
            | by #[a(href="https://github.com/spaceavocado") Space Avocado].
    .vs-xs-3.vs-sm-4
  </template>

<style lang="scss">
  footer {
    background-color: $c-bg-2;
    :global(.brand) {
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  ul {
    li {
      display: inline-block;
      padding-right: $vs-2;
      &:last-child {
        padding-right: 0;
      }
    }
    @include media-query(md) {
      text-align: right;
    }
  }

  p.copyright {
    @include font-size($fs-sm);
    @include line-height($fs-sm * $lhr);
  }
</style>