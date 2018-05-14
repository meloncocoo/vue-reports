import moment from 'moment'

const state = {
  items: [
    { id: 1, name: '报表1', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 2, name: '报表2', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 3, name: '报表3', createBy: '张三', createDate: '2018/05/01', status: 1 },
    { id: 4, name: '报表4', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 5, name: '报表5', createBy: '张三', createDate: '2018/05/01', status: 1 }
  ]
}

const mutations = {
  fetchReports (state, items) {
    state.items = items
  },
  addReport (state, item) {
    state.items.push(item)
  }
}

const actions = {
  addReport ({ commit, state }, report) {
    return new Promise((resolve, reject) => {
      if (report) {
        report.createBy = 'SYSTEM'
        report.status = 0
        report.createDate = moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
        commit('addReport', report)
        resolve()
      // } else {
      //   reject()
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
