<template>
  <nav class="level app-level">
    <div class="level-left">
      <div class="level-item">
        <strong>{{ name }}</strong>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {

  },

  computed: {
    name () {
      return this.$route.name
    }
  }
}
</script>
