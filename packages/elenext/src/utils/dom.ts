export function createEl(id: string, cls?: string) {
  const el = document.createElement('div')
  el.id = id
  if (cls) {
    el.className = cls
  }
  document.body.appendChild(el)
  return el
}

export function removeEl(el: Element) {
  if (el.parentNode) el.parentNode.removeChild(el)
}

export function normalizeClass(value: unknown): string {
  let res = ''
  if (typeof value === 'string') {
    res = value
  } else if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      res += normalizeClass(value[i]) + ' '
    }
  } else if (value !== null && typeof value === 'object') {
    for (const name in value) {
      if ((value as Record<string, boolean>)[name]) {
        res += name + ' '
      }
    }
  }
  return res.trim()
}

export function injectCss(css: string, id: string) {
  if (!document.head.querySelector('#' + id)) {
    const node = document.createElement('style')
    node.textContent = css
    node.type = 'text/css'
    node.id = id
    document.head.appendChild(node)
  }
}

export function hasClass(el: Element, cls: string) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export function addClass(el: Element, cls: string) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
}

/* istanbul ignore next */
const trim = function (str: string) {
  return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export function removeClass(el: Element, cls: string) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
}
