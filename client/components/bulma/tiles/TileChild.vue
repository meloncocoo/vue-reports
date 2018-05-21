<template>
  <article class="tile is-child" :class="classObject">
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
    title: String,
    subTitle: String,
    boxed: Boolean,
    type: String
  },

  computed: {
    classObject () {
      const { boxed, type } = this
      return {
        [`notification is-${type}`]: type,
        'box': boxed
      }
    },

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
