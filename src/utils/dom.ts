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

type ClassValue = ClassValue[] | { [id: string]: any } | string | number | null | boolean | undefined

export function normalizeClass(...classes: ClassValue[]): string {
  let res = ''
  for (let index = 0; index < classes.length; index++) {
    const cls = classes[index]
    if (typeof cls === 'string' || typeof cls === 'number') {
      res += ` ${cls}`
    } else if (Array.isArray(cls)) {
      res += ` ${normalizeClass(...cls)}`
    } else if (typeof cls === 'object') {
      if (cls) {
        for (const key in cls) {
          if (cls[key]) {
            res += ` ${key}`
          }
        }
      }
    }
  }
  return res.trim()
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
