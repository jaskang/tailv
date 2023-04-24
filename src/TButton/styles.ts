import { colors, type ColorKey } from '@/core/colors'

export type ButtonCssVars = {
  textColor: string
  textColorHover: string
  borderColor: string
  borderColorHover: string
  backgroundColor: string
  backgroundColorHover: string
  ringColor: string
  size: string
}

const createBtnVars = (vars: Partial<ButtonCssVars> = {}) => {
  const result: ButtonCssVars = {
    textColor: vars.textColor || colors.gray[700],
    backgroundColor: vars.backgroundColor || colors.white,
    borderColor: vars.borderColor || colors.transparent,

    textColorHover: vars.textColorHover || vars.textColor || colors.gray[700],
    backgroundColorHover: vars.backgroundColorHover || vars.backgroundColor || colors.white,
    borderColorHover: vars.borderColorHover || vars.borderColor || colors.transparent,

    ringColor: vars.ringColor || vars.backgroundColor || colors.white,
    size: vars.size || 'calc(2.25rem + 2px)',
  }
  return result
}

export const getBtnVars = (
  variant: 'default' | 'link' | 'subtle',
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  _color?: ColorKey
) => {
  const btnSizes = {
    xs: 'calc(2.25rem + 2px)',
    sm: 'calc(2.25rem + 2px)',
    md: 'calc(2.25rem + 2px)',
    lg: 'calc(2.25rem + 2px)',
    xl: 'calc(2.25rem + 2px)',
  }
  if (variant === 'link') {
    const color = _color || 'gray'
    return createBtnVars({
      textColor: colors[color][600],
      backgroundColor: 'transparent',
      textColorHover: colors[color][700],
      size: btnSizes[size],
    })
  } else if (variant === 'subtle') {
    const color = _color || 'gray'
    return createBtnVars({
      textColor: colors[color][600],
      backgroundColor: colors[color][100],
      backgroundColorHover: colors[color][200],
      ringColor: colors[color][500],
      size: btnSizes[size],
    })
  } else {
    const color = _color
    return color
      ? createBtnVars({
          textColor: colors.white,
          backgroundColor: colors[color][500],
          borderColor: colors.transparent,
          backgroundColorHover: colors[color][600],
          ringColor: colors[color][500],
          size: btnSizes[size],
        })
      : createBtnVars({
          borderColor: 'var(--t-border-color)',
          backgroundColorHover: colors.gray[50],
          ringColor: colors.indigo[500],
          size: btnSizes[size],
        })
  }
}
