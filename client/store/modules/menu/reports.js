import lazyLoading from './lazyLoading'

export default {
  name: 'Reports',
  path: '/reports',
  meta: {
    icon: 'fa-bar-chart',
    expanded: false,
    link: 'charts/index.vue'
  },
  component: lazyLoading('reports', true),

  children: [
    {
      name: 'Designer',
      path: 'designer',
      component: lazyLoading('reports/Designer'),
      meta: {
        link: 'reports/Designer.vue'
      }
    }
  ]
}
