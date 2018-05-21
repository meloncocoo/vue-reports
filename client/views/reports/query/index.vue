<template>
  <tile>
    <tile-parent vertical>
      <tile-child title="TEST" subTitle="SubTitle" notification="warning" box>
        Content
      </tile-child>
     <tile-child title="TEST" subTitle="SubTitle" notification="warning" box>
        Content
      </tile-child>
    </tile-parent>
    <tile-parent size="5">
      <tile-child notification="primary" box>

      </tile-child>
    </tile-parent>
  </tile>
</template>

<script>
import { Tile, TileParent, TileChild } from '../../../components/bulma'

export default {
  components: {
    Tile,
    TileParent,
    TileChild
  }
}
</script>
