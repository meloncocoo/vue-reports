<template>
  <div>
    <a v-if="item.type === 'link'" :class="classObject" href="javascript:;" @click="onSelected(item)">{{ item.label }}</a>
    <hr v-if="item.type === 'divider'" :class="classObject">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    selected: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classObject () {
      const { item, selected } = this
      console.info('classObject: ' + selected)
      return {
        'dropdown-item': item.type === 'link',
        'dropdown-divider': item.type === 'divider',
        'is-active': selected
      }
    }
  },

  watch: {
    selected (value) {
      console.info(value)
    }
  },

  methods: {
    onSelected (item) {
      this.$emit('selected', item)
    }
  }
}
</script>

<style>

</style>
