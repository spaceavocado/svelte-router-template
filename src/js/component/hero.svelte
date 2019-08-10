<script>
  // Props
  export let title = 'Hero Title';
  export let subtitle = null;
  export let bg = null;

  if (bg != null) {
    bg = `background-image: url('${bg}');`;
  } 
</script>

<template lang="pug">
  .hero(style='{bg}')
    .overlay
    .container
      .layout
        .col-12
          .heading
            h1.heading-1 {title}
            +if('subtitle')
              .vs-1
              p {subtitle}
</template>

<style lang="scss">
  .hero {
    background: no-repeat center center;
    background-color: $c-bg-2;
    background-attachment: scroll;
    background-size: cover;
    position: relative;

    .heading {
      padding: 200px 0;
      text-align: center;
      color: $c-text-2;

      @include media-query($grid-sm, max) {
        padding: 100px 0;
      }

      h1 {
        text-transform: uppercase;
      }
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #212529;
      opacity: .5;
    }
  }
</style>