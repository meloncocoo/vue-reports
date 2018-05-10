<template>
  <div>
    <div class="tile is-ancestor">
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
                  <a class="button is-primary">
                    <span class="icon is-small">
                      <i class="fa fa-plus"></i>
                    </span>
                    <span>新建</span>
                  </a>
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
                <tr>
                  <td>1</td>
                  <td>报表1</td>
                  <td>张三</td>
                  <td>2018/05/08</td>
                  <td><span class="tag is-info">草稿</span></td>
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
                <tr>
                  <td>2</td>
                  <td>报表2</td>
                  <td>李四</td>
                  <td>2018/05/08</td>
                  <td><span class="tag is-info">草稿</span></td>
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

<style lang="scss">

</style>
