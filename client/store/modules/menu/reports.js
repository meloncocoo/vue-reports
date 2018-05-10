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
      component: lazyLoading('reports/Designer'),
      meta: {
        link: 'reports/Designer.vue'
      }
    }
  ]
}
