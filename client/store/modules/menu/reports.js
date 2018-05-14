import lazyLoading from './lazyLoading'

export default {
  name: '报表',
  path: '/reports',
  meta: {
    icon: 'fa-bar-chart',
    expanded: false,
    link: 'charts/index.vue'
  },
  component: lazyLoading('reports', true),

  children: [
    {
      name: '设计器',
      path: 'designer',
      redirect: 'designer/list',
      component: lazyLoading('reports/designer', true),
      meta: {
        link: 'reports/designer/index.vue'
      },

      children: [
        {
          name: '报表列表',
          path: 'list',
          component: lazyLoading('reports/designer/List'),
          meta: {
            link: 'reports/designer/List.vue'
          }
        },
        {
          name: '新建报表',
          path: 'add',
          component: lazyLoading('reports/designer/Add'),
          meta: {
            link: 'reports/designer/Add.vue'
          }
        }
      ]
    }
  ]
}
