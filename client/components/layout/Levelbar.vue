<template>
  <nav class="level app-level">
    <div class="level-left">
      <div class="level-item">
        <strong>{{ name }}</strong>
      </div>
    </div>

    <div class="level-right is-hidden-mobile">
      <breadcrumb :list="list"></breadcrumb>
    </div>
  </nav>
</template>

<script>
import { Breadcrumb } from '../bulma/'

export default {
  components: {
    Breadcrumb
  },

  data () {
    return {
      list: null
    }
  },

  created () {
    this.getList()
  },

  computed: {
    codelink () {
      if (this.$route.meta && this.$route.meta.link) {
        return 'http://baidu.com?' + this.$route.meta.link
      } else {
        return null
      }
    },

    name () {
      return this.$route.meta.label || this.$route.name
    }
  },

  methods: {
    getList () {
      let matched = this.$route.matched.filter(item => item.name)
      let first = matched[0]

      if (first && (first.name !== 'Home' || first.path !== '')) {
        matched = [{ name: 'Home', path: '/' }].concat(matched)
      }

      this.list = matched
    }
  },

  watch: {
    $route () {
      this.getList()
    }
  }
}
</script>
