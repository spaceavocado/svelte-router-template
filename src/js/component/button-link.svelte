<script>
  // Components
  import RouterLink from '@spaceavocado/svelte-router/component/link';

  // Props
  export let to;
</script>

<template lang="pug">
  .button-link
    RouterLink(to='{to}')
      slot
</template>

<style lang="scss">
  .button-link {
    display: inline-block;
    border: 2px solid $c-text-1;
    border-radius: $vs-2;
    font-weight: 700;
    cursor: pointer;
    transition: background-color $at1 $ac1, border $at1 $ac1;
    &:hover {
      border: 2px solid $c-text-3;
      background-color: $c-text-3;
      :global(a) {
        color: $c-text-2;
        transition: none;
      }
    }
    :global(a) {
      padding: $vs-1 $vs-2 $vs-1;
      display: inline-block;
    }
  }
</style>