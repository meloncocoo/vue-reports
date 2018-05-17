import moment from 'moment'

const state = {
  items: [
    { id: 1, name: '报表1', desc: 'DESC', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 2, name: '报表2', desc: 'DESC', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 3, name: '报表3', desc: 'DESC', createBy: '张三', createDate: '2018/05/01', status: 1 },
    { id: 4, name: '报表4', desc: 'DESC', createBy: '张三', createDate: '2018/05/01', status: 0 },
    { id: 5, name: '报表5', desc: 'DESC', createBy: '张三', createDate: '2018/05/01', status: 1 }
  ]
}

const mutations = {
  fetchReports (state, items) {
    state.items = items
  },
  addReport (state, item) {
    state.items.push(item)
  },
  deleteReport (state, item) {
    state.items.splice(state.items.indexOf(item), 1)
  }
}

const actions = {
  addReport ({ commit, state }, report) {
    return new Promise((resolve, reject) => {
      if (report) {
        report.id = state.items.length === 0 ? 1 : Math.max.apply(Math, state.items.map(r => r.id)) + 1
        report.createBy = 'SYSTEM'
        report.status = 0
        report.createDate = moment(new Date()).format('YYYY/MM/DD HH:mm:ss')
        commit('addReport', report)
        resolve()
      }
    })
  },
  deleteReport ({ commit, state }, report) {
    if (report) {
      commit('deleteReport', report)
    }
  },
  findReportById ({ commit, state }, id) {
    return new Promise((resolve, reject) => {

    })
  }
}

const getters = {
  getReportById: (state) => (id) => {
    return state.items.find(report => report.id === id)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
