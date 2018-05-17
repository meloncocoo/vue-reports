<template>
  <div>
    <div class="tile is-ancestor is-loading">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <nav class="level">
            <div class="level-left">
              <div class="level-item">
                <h4 class="title">报表设计器</h4>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <div class="control has-addons is-right">
                  <router-link :to="'add'" class="button is-primary is-small is-outlined">
                    <span class="icon is-small">
                      <i class="fa fa-plus"></i>
                    </span>
                    <span>新建</span>
                  </router-link>
                </div>
              </div>
            </div>
          </nav>
          <div class="table-responsive">
            <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th>#</th>
                  <th>标题</th>
                  <th>创建人</th>
                  <th>创建时间</th>
                  <th>状态</th>
                  <th style="width: 70px;" class="has-text-centered">编辑</th>
                  <th style="width: 70px;" class="has-text-centered">删除</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(report, index) in reports" :key="'report-' + index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ report.name }}</td>
                  <td>{{ report.createBy }}</td>
                  <td>{{ report.createDate }}</td>
                  <td>
                    <span class="tag" :class="[ report.status === 0 ? 'is-info' : report.status === 1 ? 'is-warning' : '' ]">
                    {{ report.status === 0 ? '草稿' : report.status === 1 ? '已发布' : '' }}
                    </span>
                  </td>
                  <td class="has-text-centered">
                    <router-link :to="{ name: 'Edit', params: { id: report.id } }" class="button is-small is-primary is-outlined">
                      <span class="icon is-small"><i class="fa fa-edit"></i></span>
                      <span>编辑</span>
                    </router-link>
                  </td>
                  <td class="has-text-centered">
                    <button class="button is-small is-danger is-outlined" @click="deleteReport(report)">
                      <span class="icon is-small"><i class="fa fa-times"></i></span>
                      <span>删除</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <pagination></pagination>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Pagination } from '../../../components/bulma'

export default {
  components: {
    Pagination
  },

  computed: mapGetters({
    reports: 'reports'
  }),

  methods: {
    ...mapActions([
      'deleteReport'
    ])
  }
}
</script>


<style lang="scss">

</style>
