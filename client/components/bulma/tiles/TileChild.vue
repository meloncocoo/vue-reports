<template>
  <article class="tile is-child" :class="[box ? 'box' : '', notification ? 'notification is-' + notification : '']">
    <p v-if="hasTitle" class="title">{{ title }}</p>
    <p v-if="hasSubTitle" class="subtitle">{{ subTitle }}</p>
    <div class="content">
      <slot></slot>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    box: {
      type: Boolean,
      default: false
    },
    notification: {
      type: String,
      default: ''
    }
  },

  computed: {
    hasTitle () {
      return !!this.title
    },

    hasSubTitle () {
      return !!this.subTitle
    }
  }
}
</script>

<style>

</style>
