<template>
  <div :class="classObject">
    <div class="dropdown-trigger" v-on:click.stop="toggle(!isActive)">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{ displayLabel }}</span>
        <span class="icon is-small">
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <dropdown-item
          v-for="(item, value) in items"
          v-bind:item="item"
          :key="'item-' + value"
          v-bind:selected="item.selected"
          v-on:selected="onSelected"
        ></dropdown-item>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownItem from './DropdownItem'

const getWindow = () => window.document

export default {
  props: {
    label: String,
    items: Array,
    value: Number,
    hoverable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      isActive: false,
      selected: this.items && this.items.find(item => item.value === this.value)
    }
  },

  components: {
    DropdownItem
  },

  computed: {
    classObject () {
      return {
        'dropdown': true,
        'is-active': this.isActive,
        'is-hoverable': this.hoverable
      }
    },

    displayLabel () {
      return (this.selected && this.selected.label) || this.label
    }
  },

  methods: {
    onSelected (item) {
      let that = this

      if (item) {
        console.info('onSelected')
        item.selected = true
        this.items.forEach(i => {
          i.selected = false
          if (i.value === item.value) {
            i.selected = true
            that.selected = i
          }
        })
      }
    },

    input (item) {
      if (item) {
        this.isActive = false
        this.selected = item
        this.items.find(i => i.value === item.value).selected = true
        this.$emit('selected', item)
      }
    },

    toggle (target) {
      if (!this.hoverable) {
        if (target) {
          this.open()
        } else {
          this.close()
        }
      }
    },

    open () {
      this.isActive = true
      setTimeout(() => getWindow().addEventListener('click', this.clickOutEvent), 10)
    },

    close () {
      this.isActive = false
      getWindow().removeEventListener('click', this.clickOutEvent)
    },

    clickOutEvent (evt) {
      this.close()
    }
  },

  destroyed () {
    getWindow().removeEventListener('click', this.clickOutEvent)
  }
}
</script>

<style lang="scss">
.fade-leave-active {
  transition: opacity .3 ease;
}
.fade-enter, .fase-leave-to {
  opacity: 0;
}
</style>
