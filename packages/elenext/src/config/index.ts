const config = {
  prefixCls: 'el'
}

export function getCompName(name: string) {
  return config.prefixCls.charAt(0).toUpperCase() + config.prefixCls.slice(1) + name
}

export function getBlockCls(block: string) {
  return `${config.prefixCls}-${block}`
}

export default config
