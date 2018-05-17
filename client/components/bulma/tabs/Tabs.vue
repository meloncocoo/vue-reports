<template>
  <div class="tabs">
    <ul>
      <router-link tag="li" v-for="(item, index) in items" :key="'item-' + index" :to="item.route">
        <a>{{ item.label }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'items'
  ]
}
</script>
