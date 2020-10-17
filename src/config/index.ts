const config = {
  prefixCls: 'el'
}

export function getCompName(name: string) {
  return (
    config.prefixCls.charAt(0).toUpperCase() + config.prefixCls.slice(1) + name.charAt(0).toUpperCase() + name.slice(1)
  )
}

export function getBlockCls(block: string) {
  return `${config.prefixCls}-${block.charAt(0).toLowerCase() + block.slice(1)}`
}

export default config
