function getColorRGB(_color: string) {
  let color = _color.replace('#', '')
  if (/^[0-9a-fA-F]{3}$/.test(color)) {
    const colorArr = color.split('')
    for (let i = 2; i >= 0; i--) {
      colorArr.splice(i, 0, color[i])
    }
    color = colorArr.join('')
  }
  if (/^[0-9a-fA-F]{6}$/.test(color)) {
    return {
      red: parseInt(color.slice(0, 2), 16),
      green: parseInt(color.slice(2, 4), 16),
      blue: parseInt(color.slice(4, 6), 16)
    }
  } else {
    return {
      red: 255,
      green: 255,
      blue: 255
    }
  }
}

export function mixColor(color: string, percent: number) {
  let { red, green, blue } = getColorRGB(color)
  if (percent > 0) {
    // shade given color
    red *= 1 - percent
    green *= 1 - percent
    blue *= 1 - percent
  } else {
    // tint given color
    red += (255 - red) * percent
    green += (255 - green) * percent
    blue += (255 - blue) * percent
  }
  return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

export type ClassValue = ClassValue[] | { [id: string]: any } | string | number | null | boolean | undefined

export function mergeClass(...classes: ClassValue[]): string {
  let res = ''
  for (let index = 0; index < classes.length; index++) {
    const cls = classes[index]
    if (typeof cls === 'string' || typeof cls === 'number') {
      res += ` ${cls}`
    } else if (Array.isArray(cls)) {
      res += ` ${mergeClass(...cls)}`
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
