<template>
<div class="tile is-ancestor">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

</style>
