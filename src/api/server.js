export const isLocalDev = false // 控制本地联调

export const AGENTTERM = isLocalDev ? '' : `/agent-term` // 门户端
export const ANGENTSETTLE = isLocalDev ? '' : `/agent-settle` // 财务结算
