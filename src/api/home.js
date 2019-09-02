import axios from '@/libs/http'
import { AGENTTERM, ANGENTSETTLE } from '@/api/server'

const api = AGENTTERM
const setapi = ANGENTSETTLE
// 业务员信息
export const querySalesMan = params => {
  return axios.request({
    url: api + '/atSalesMan/querySalesManByAgentId',
    method: 'get',
    params
  })
}

// 代理商所代理的产品
export const products = params => {
  return axios.post(
    api + '/portal/agentManage/proxyProduct/channelProductList',
    params
  )
}

// 代理商所代理的产品7.31迭代
export const productsIter = params => {
  return axios.post(
    api + '/portal/agentManage/homePorduct/list',
    params
  )
}

// 得到二维码接口
export const getCodeMes = params => {
  return axios.post(
    api + '/portal/agentManage/proxyProduct/qrCode',
    params
  )
}
// 业务统计
export const statistics = params => {
  return axios.post(api + '/portal/business/statistics', params)
}

// // 当月预计收益
// export const getMonthIncome = params => {
//   return axios.request({
//     url: api + '/agentSettlementDetail/getMonthIncome',
//     method: 'get',
//     params
//   })
// }

// 我的业务数据新增的左边板块
export const getProductMes = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getSettlementStatistics',
    method: 'get',
    params
  })
}

// 我的业务数据新增的右边板块
export const getFinanceData = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getFinanceStatistics',
    method: 'get',
    params
  })
}

// 我的代理商新增的右边规模板块
export const getNumStatis = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getNumStatistics',
    method: 'get',
    params
  })
}

// 我的代理商新增的右边表格板块
export const getAgentTable = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getAgentStatistics',
    method: 'get',
    params
  })
}

// 业务员数据统计
export const getSalesman = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getSalesmanStatistics',
    method: 'get',
    params
  })
}

// 代理商金融业务排名
export const getBankRank = params => {
  return axios.request({
    url: setapi + '/agentStatistics/getAgentLoanStatistics',
    method: 'get',
    params
  })
}

// 获取所有公告
export const getNoticeList = params => {
  return axios.request({
    url: api + '/portal/agentNotice/list',
    method: 'get',
    params
  })
}

// 获取公告信息
export const getNoticeMes = params => {
  return axios.request({
    url: api + '/portal/agentNotice/get',
    method: 'get',
    params
  })
}
