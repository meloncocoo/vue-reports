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
          name: 'List',
          path: 'list',
          component: lazyLoading('reports/designer/List'),
          meta: {
            link: 'reports/designer/List.vue',
            label: '报表列表'
          }
        },
        {
          name: '新建报表',
          path: 'add',
          component: lazyLoading('reports/designer/Add'),
          meta: {
            link: 'reports/designer/Add.vue'
          }
        },
        {
          name: 'Edit',
          path: 'edit/:id',
          component: lazyLoading('reports/designer/Edit'),
          redirect: { name: 'Conditions' },
          meta: {
            link: 'reports/designer/Edit.vue',
            label: '编辑报表'
          },
          children: [
            {
              name: 'Conditions',
              path: 'conds',
              component: lazyLoading('reports/designer/edit/Conditions'),
              meta: {
                label: '条件设置'
              }
            },
            {
              name: 'Dimensions',
              path: 'dimens',
              component: lazyLoading('reports/designer/edit/Dimensions'),
              meta: {
                label: '维度设置'
              }
            }
          ]
        }
      ]
    }
  ]
}
