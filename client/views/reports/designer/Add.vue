<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <h4 class="title">创建报表</h4>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <div class="control has-addons is-right">
                <router-link :to="'add'" class="button is-success is-small">
                  <span class="icon is-small">
                    <i class="fa fa-save"></i>
                  </span>
                  <span @click="addReport(report)">保存</span>
                </router-link>
              </div>
            </div>
          </div>
        </nav>

        <div class="field is-horizontal">
          <div class="field-label is-small">
            <label class="label">标题：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="report.name" class="input is-small" type="text" placeholder="Small sized input">
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'

export default {
  data () {
    return {
      report: {}
    }
  },

  methods: {
    // ...mapActions([
    //   'addReport'
    // ])
    addReport (report) {
      this.$store.dispatch('addReport', report).then(() => {
        this.$router.go(-1)
      })
    }
  }
}

</script>
