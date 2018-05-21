<template>
  <div class="tile is-parent" :class="[vertical ? 'is-vertical' : '', size ? 'is-' + size : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>
