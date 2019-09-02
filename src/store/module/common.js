import {
  getNation,
  searchNation,
  bankList
} from '@/api/common'

export default {
  state: {
    nationList: {},
    bankList: {}
  },
  mutations: {
    setNation: (state, payload) => {
      state.nationList = payload
    },
    setBankList(state, payload) {
      state.bankList = payload
    }
  },
  actions: {
    /**
     * 民族列表
     * @param commit
     * @param payload
     * @returns {Promise<T | never>}
     */
    getNation({ commit }, payload) {
      return new Promise((resolve, reject) => {
        getNation(payload).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    },
    /**
     * 模糊查询民族
     * @param commit
     * @param payload
     * @returns {Promise<any>}
     */
    searchNation({ commit }, payload) {
      return new Promise((resolve, reject) => {
        searchNation(payload).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    },
    /**
     * 获取银行列表&模糊查询
     * @param commit
     * @param payload
     * @returns {Promise<any>}
     */
    getBankList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        bankList(payload).then(res => {
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    }
  }
}
