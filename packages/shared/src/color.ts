interface RGBType {
  r: number
  g: number
  b: number
}

const HEX2RGB = (hex: string): RGBType => {
  const HEX_NUMBER_REGEX = /^#/

  if (!HEX_NUMBER_REGEX.test(hex)) {
    throw Error('hex color not #xxx or #xxxxxx')
  }

  let value = hex
  // 缩写转换 ("03F" -> "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i

  value = value.replace(shorthandRegex, (_match, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value)

  if (!result) {
    throw new Error(`${hex} is not color string(#FFF/#00000)`)
  }

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  }
}

const RGB2HEX = (r: number, g: number, b: number): string =>
  '#' +
  Math.floor((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)

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
