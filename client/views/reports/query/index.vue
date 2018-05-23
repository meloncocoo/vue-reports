<template>
  <tile>
    <tile-parent vertical>
      <tile-child title="TEST" subTitle="SubTitle" type="warning" boxed>
        Content
      </tile-child>
     <tile-child title="TEST" subTitle="SubTitle" type="" boxed>
        <label class="switch is-warning checked"><input type="checkbox" value="false"></label>
      </tile-child>
    </tile-parent>
    <tile-parent>
      <tile-child boxed>
        <dropdown :label="'Selection...'" :items="dropdownItems" :value="dValue" v-on:selected="onSelected"></dropdown>
        <p>
          Selection Value: {{ dValue }}
        </p>
      </tile-child>
    </tile-parent>
    <tile-parent>
      <tile-child type="info">
        <vb-switch type="success" v-model="value"></vb-switch>
      </tile-child>
    </tile-parent>
  </tile>
</template>

<script>
import { Tile, TileParent, TileChild, VbSwitch, Dropdown } from '../../../components/bulma'

export default {
  components: {
    Tile,
    TileParent,
    TileChild,
    VbSwitch,
    Dropdown
  },

  data () {
    return {
      value: false,
      dValue: 2,
      dropdownItems: [
        { value: 1, type: 'link', label: 'Dropdown item' },
        { value: 2, type: 'link', label: 'Other dropdown item' },
        { value: 3, type: 'link', label: 'Active dropdown item' },
        { value: 4, type: 'link', label: 'Other dropdown item' },
        { type: 'divider' },
        { value: 5, type: 'link', label: 'With a divider' }
      ]
    }
  },

  methods: {
    onSelected (item) {
      if (item && item.value) {
        this.dValue = item.value
      }
    }
  }
}
</script>
