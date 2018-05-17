<template>
  <h4>{{ conditions }}</h4>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    localComputed () { },
    ...mapState('conditions', [
      'conditions'
    ])
  }
}
</script>
