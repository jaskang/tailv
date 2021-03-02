interface Hsva {
  h: number
  s: number
  v: number
  a?: number
}

export const RGB_MAX_VALUE = 255

const HEX_REG = /^#([a-f\d]{3}|[a-f\d]{6})$/i

const RGB_REG = /^rgba?\s?\(/i

const HSL_REG = /^hsla?\s?\(/i

const HSV_REG = /^hsva?\s?\(/i

const parseAlpha = (a: any) => (a !== void 0 && !isNaN(+a) && 0 <= +a && +a <= 1 ? +a : 1)

const boundValue = (value: number, max: number) => {
  value = Math.min(max, Math.max(0, value))
  if (Math.abs(value - max) < 0.000001) {
    return 1
  }
  return (value % max) / ~~max
}

export const HSL2HSV = (h: number, s: number, l: number, a?: number): Hsva => {
  l *= 2
  s *= l <= 1 ? l : 2 - l
  const _v = (l + s) / 2
  const _s = (2 * s) / (l + s)
  return {
    h,
    s: _s,
    v: _v,
    a: parseAlpha(a),
  }
}

export const RGB2HSV = (r: number, g: number, b: number, a?: number): Hsva => {
  r = boundValue(r, 255)
  g = boundValue(g, 255)
  b = boundValue(b, 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  const delta = max - min
  let hue = 0
  const sat = max === 0 ? 0 : delta / max
  const val = max

  if (max === min) {
    hue = 0
  } else {
    switch (max) {
      case r:
        hue = (g - b) / delta + (g < b ? 6 : 0)
        break
      case g:
        hue = (b - r) / delta + 2
        break
      case b:
        hue = (r - g) / delta + 4
        break
    }
    hue /= 6
  }

  return {
    h: hue * 360,
    s: sat,
    v: val,
    a: parseAlpha(a),
  }
}

export const HEX2RGB = (hexColor: string) => {
  let color = hexColor.replace(/^#/, '')
  if (color.length === 3) {
    const colors: string[] = []
    for (let i = 0; i < 3; i++) {
      colors.push(color.charAt(i), color[i])
    }
    color = colors.join('')
  }

  const r = parseInt([color[0], color[1]].join(''), 16)
  const g = parseInt([color[2], color[3]].join(''), 16)
  const b = parseInt([color[4], color[5]].join(''), 16)

  return {
    r,
    g,
    b,
  }
}

export const RGB2HEX = (r: number, g: number, b: number): string => {
  let color = '#'
  ;[r, g, b].forEach(v => {
    let hex = v.toString(16)
    if (hex.length < 2) {
      hex = '0' + hex
    }
    color += hex
  })
  return color
}

/**
 * 解析输入的任意颜色值
 * 输出h.s.v.a
 * @param color
 */
export const parseColor = (color: string): Hsva | null => {
  if (!color) {
    return null
  }

  // hex
  if (HEX_REG.test(color)) {
    const { r, g, b } = HEX2RGB(color)
    return RGB2HSV(r, g, b)
  }

  // rgb
  if (RGB_REG.test(color)) {
    const colors = color
      .replace(RGB_REG, '')
      .replace(/\)/, '')
      .trim()
      .split(',')
      .filter((v: string) => v.trim() !== '')
      .map((v: string, index: number) => (index === 3 ? parseAlpha(v) : parseInt(v, 10)))
    // 不必校验每个值是否合法，最终校验生成的color即可
    const [r, g, b, a] = colors
    const hsv: Hsva = RGB2HSV(r, g, b)
    hsv.a = parseAlpha(a)
    return hsv
  }

  // hsv/hsl
  const isHsl = HSL_REG.test(color)
  if (HSV_REG.test(color) || isHsl) {
    const reg = isHsl ? HSL_REG : HSV_REG
    const colors = color
      .replace(reg, '')
      .replace(/\)/, '')
      .trim()
      .split(',')
      .filter((v: string) => v.trim() !== '')
      .map((v: string, index: number) => (index === 3 ? parseAlpha(v) : parseFloat(v)))
    const [h, s, v, a] = colors
    if (!isHsl) {
      return {
        h,
        s,
        v,
        a,
      }
    } else {
      return HSL2HSV(h, s, v, a)
    }
  }

  return null
}

const parseAmount = (amount: number): number => {
  const value = amount <= 1 && amount >= -1 ? amount : 0
  return value
}

export const colorDarken = (color: string, amount: number): string => {
  let { r, g, b } = HEX2RGB(color)
  const percent = parseAmount(amount)
  if (percent > 0) {
    r -= r * percent
    g -= g * percent
    b -= b * percent
  } else {
    r += (255 - r) * percent * -1
    g += (255 - g) * percent * -1
    b += (255 - b) * percent * -1
  }
  return RGB2HEX(r, g, b)
}

export const colorLighten = (color: string, amount: number): string => colorDarken(color, amount * -1)
