<template>
  <div class="tile is-parent" :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    vertical: Boolean,
    size: String
  },

  computed: {
    classObject () {
      const { vertical, size } = this

      return {
        'is-vertical': vertical,
        [`is-${size}`]: size
      }
    }
  }
}
</script>

<style>

</style>
