<template>
  <div class="columns">
    <div class="column">
      <nav class="panel">
        <p class="panel-heading">
          可选条件
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="查询">
            <span class="icon is-small is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div v-for="(item, index) in conditions" :key="'item-' + index" class="panel-block">
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="panel-icon">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
                {{ item.name }}
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button is-small is-outlined is-success" v-bind:disabled="item.selected" @click="select(item)">选择</button>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
    <div class="column">
      <nav class="panel">
        <p class="panel-heading">
          已选条件
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="查询">
            <span class="icon is-small is-left">
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <div v-for="(item, index) in selected" :key="'item-' + index" class="panel-block">
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <span class="panel-icon">
                  <i class="fa fa-book" aria-hidden="true"></i>
                </span>
                {{ item.name }}
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <button class="button is-small is-outlined is-danger" @click="deselect(item)">取消</button>
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selected: []
    }
  },

  computed: {
    ...mapState('conditions', {
      conditions: 'items'
    })
  },

  beforeMount () {
    this.conditions.map((item) => {
      item.selected = !this.selected.map((selected) => item.id === selected.id )
    })
  },

  methods: {
    select (item) {
      if (item && this.selected.indexOf(item) < 0) {
        item.selected = true
        this.selected.push(item)
      }
    },

    deselect (item) {
      if (item) {
        item.selected = false
        this.selected.splice(this.selected.indexOf(item), 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-block {
  display: block;
}
</style>
