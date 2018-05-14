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
                  <router-link :to="'add'" class="button is-primary is-small">
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
                  <th style="width: 140px;">操作</th>
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
                  <td>
                    <a class="button is-small is-primary">
                      <span class="icon is-small"><i class="fa fa-edit"></i></span>
                      <span>编辑</span>
                    </a>
                    <a class="button is-small is-danger">
                      <span class="icon is-small"><i class="fa fa-times"></i></span>
                      <span>删除</span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav class="pagination is-right is-small" role="navigation" aria-label="pagination">
              <a class="pagination-previous">Previous</a>
              <a class="pagination-next">Next page</a>
              <ul class="pagination-list">
                <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span class="pagination-ellipsis">&hellip;</span></li>
                <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
              </ul>
            </nav>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    reports: 'reports'
  })
}
</script>


<style lang="scss">

</style>
