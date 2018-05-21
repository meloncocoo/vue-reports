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
        <vb-switch type="warning" size="" :value="value"></vb-switch>
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
import { Tile, TileParent, TileChild, VbSwitch } from '../../../components/bulma'

export default {
  components: {
    Tile,
    TileParent,
    TileChild,
    VbSwitch
  },

  data () {
    return {
      value: false
    }
  },

  watch: {
    value () {
      window.alert(this.value)
    }
  }
}
</script>
