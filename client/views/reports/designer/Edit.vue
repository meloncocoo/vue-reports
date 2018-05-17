<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <nav class="level">
          <div class="level-left">
            <div class="level-item">
              <h4 class="title">编辑报表</h4>
            </div>
          </div>
          <div class="level-right">
             <div class="level-item">
              <div class="control has-addons is-right">
                <button class="button is-success is-small is-outlined" @click="save(report)">
                  <span class="icon is-small">
                    <i class="fa fa-save"></i>
                  </span>
                  <span>保存</span>
                </button>
              </div>
            </div>
            <div class="level-item">
              <div class="control has-addons is-right">
                <router-link :to="{ name: 'List' }" class="button is-danger is-small is-outlined">
                  <span class="icon is-small">
                    <i class="fa fa-times"></i>
                  </span>
                  <span>取消</span>
                </router-link>
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
                <input v-if="report" v-model.lazy="report.name" class="input" type="text">
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
                <textarea v-if="report" class="textarea" v-model="report.desc"></textarea>
              </div>
            </div>
          </div>
        </div>
        <tabs v-bind:items="tabs"></tabs>
        <div class="tab-panel">
          <router-view></router-view>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Tabs } from '../../../components/bulma'

export default {
  data () {
    return {
      loading: false,
      report: {},
      tabs: [
        { label: '条件', route: { name: 'Conditions', params: { id: 1 } } },
        { label: '维度', route: { name: 'Dimensions', params: { id: 1 } } }
        // { label: '其他' }
      ]
    }
  },

  components: {
    Tabs
  },

  created () {
    this.fetchData()
  },

  computed: {
    ...mapGetters([
      'getReportById'
    ])
  },

  methods: {
    cancel () {
      this.$router.go(-1)
    },

    save (report) {
      this.$router.go(-1)
    },

    fetchData () {
      this.loading = true
      // this.$store.dispatch('findReportById', this.$router.params.id).then((report) => {
      //   this.loading = false
      //   this.report = report
      // })
      this.report = this.getReportById(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

.app-loading {
  &.is-loading {
    background-color: $cyan;
    pointer-events: none;
    opacity: 0.1;
    z-index: 1024;
    &:after {
      @include loader;
      position: absolute;
      top: calc(50% - 2.5em);
      left: calc(50% - 2.5em);
      // width: 5em;
      // height: 5em;
      border-width: 0.25em;
      font-size: 5em;
    }
    &.is-small:after {
      font-size: $size-small
    }
    &.is-medium:after {
      font-size: $size-medium
    }
    &.is-large:after {
      font-size: $size-large
    }
  }
}
</style>
