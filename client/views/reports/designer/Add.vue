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
                <button class="button is-success is-small is-outlined" @click="addReport(report)">
                  <span class="icon is-small">
                    <i class="fa fa-save"></i>
                  </span>
                  <span>保存</span>
                </button>
              </div>
            </div>
            <div class="level-item">
              <div class="control has-addons is-right">
                <button class="button is-danger is-small is-outlined" @click="cancel()">
                  <span class="icon is-small">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>取消</span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">标题：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input v-model="report.name" class="input" type="text">
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">描述：</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <textarea class="textarea" v-model="report.desc"></textarea>
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
    addReport (report) {
      this.$store.dispatch('addReport', report).then(() => {
        this.$router.go(-1)
      })
    },

    cancel () {
      this.$router.go(-1)
    }
  }
}

</script>
