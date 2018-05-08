<template>
  <levelbar></levelbar>
</template>

<script>
import Levelbar from './Levelbar'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      sidebar: 'sidebar'
    }),
    hiddenSidebarStyle () {
      return this.sidebar.hidden ? { 'margin-left': 0 } : null
    }
  },

  components: {
    Levelbar
  }
}
</script>

<style lang="scss">
// @import '~bulma/sass'
</style>
