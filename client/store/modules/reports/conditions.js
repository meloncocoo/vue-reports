export default {
  namespaced: true,
  state: {
    items: [
      { id: '10', name: '账期' },
      { id: '20', name: '地市' },
      { id: '30', name: '区县' },
      { id: '40', name: '归属区域' },
      { id: '50', name: '渠道类型' },
      { id: '60', name: '渠道星级' },
      { id: '70', name: '地域类型' },
      { id: '80', name: '连锁属性' },
      { id: '90', name: '经营性质' },
      { id: '11', name: '经营时长' },
      { id: '12', name: '度量' }
    ]
  },
  getters: {
    filterConditions: (state) => (name) => {
      return state.items.filter(item => item.name.contains(name))
    }
  }
}
