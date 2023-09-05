// magic number to avoid repeated retrieval
const PAGE_OFFSET = 71
export function resolveTitle(theme) {
  return (
    (typeof theme.outline === 'object' && !Array.isArray(theme.outline) && theme.outline.label) ||
    theme.outlineTitle ||
    'On this page'
  )
}
export function getHeaders(range) {
  const headers = [...document.querySelectorAll('.VPDoc h2,h3,h4,h5,h6')]
    .filter(el => el.id && el.hasChildNodes())
    .map(el => {
      const level = Number(el.tagName[1])
      return {
        title: serializeHeader(el),
        link: '#' + el.id,
        level,
      }
    })
  return resolveHeaders(headers, range)
}
function serializeHeader(h) {
  let ret = ''
  for (const node of h.childNodes) {
    if (node.nodeType === 1) {
      if (node.classList.contains('VPBadge') || node.classList.contains('header-anchor')) {
        continue
      }
      ret += node.textContent
    } else if (node.nodeType === 3) {
      ret += node.textContent
    }
  }
  return ret.trim()
}

export function resolveHeaders(headers, range) {
  if (range === false) {
    return []
  }
  const levelsRange =
    (typeof range === 'object' && !Array.isArray(range) ? range.level : range) || 2
  const [high, low] =
    typeof levelsRange === 'number'
      ? [levelsRange, levelsRange]
      : levelsRange === 'deep'
      ? [2, 6]
      : levelsRange
  headers = headers.filter(h => h.level >= high && h.level <= low)
  const ret = []
  outer: for (let i = 0; i < headers.length; i++) {
    const cur = headers[i]
    if (i === 0) {
      ret.push(cur)
    } else {
      for (let j = i - 1; j >= 0; j--) {
        const prev = headers[j]
        if (prev.level < cur.level) {
          ;(prev.children || (prev.children = [])).push(cur)
          continue outer
        }
      }
      ret.push(cur)
    }
  }
  return ret
}
