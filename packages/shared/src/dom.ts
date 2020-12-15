const styleSet = new Set<string>()

export function injectCss(id: string, css: string, top: boolean = false) {
  if (styleSet.has(id)) {
    return
  }
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.setAttribute('type', 'text/css')
  style.id = id
  style.innerHTML = css
  if (top && head.firstChild) {
    head.insertBefore(style, head.firstChild)
  } else {
    head.appendChild(style)
  }
  styleSet.add(id)
}

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
    el.className = (curClass || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '').trim()
  }
}
