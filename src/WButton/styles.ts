import { colors, type ColorKey } from '@/core/colors'

const createBtnVars = (
  vars: {
    textColor?: string
    textColorHover?: string
    borderColor?: string
    borderColorHover?: string
    backgroundColor?: string
    backgroundColorHover?: string
    outlineColor?: string
  } = {}
) => ({
  '--w-btn-text-color': vars.textColor || colors.gray[700],
  '--w-btn-bg-color': vars.backgroundColor || colors.white,
  '--w-btn-border-color': vars.borderColor || colors.transparent,

  '--w-btn-text-color--hover': vars.textColorHover || 'var(--w-btn-text-color)',
  '--w-btn-bg-color--hover': vars.backgroundColorHover || 'var(--w-btn-bg-color)',
  '--w-btn-border-color--hover': vars.borderColorHover || 'var(--w-btn-border-color)',

  '--w-btn-outline-color': vars.outlineColor || 'var(--w-btn-bg-color)',
})

export const getBtnVars = (variant: 'default' | 'link' | 'subtle', _color?: ColorKey) => {
  if (variant === 'link') {
    const color = _color || 'gray'
    return createBtnVars({
      textColor: colors[color][600],
      backgroundColor: 'transparent',
      textColorHover: colors[color][700],
    })
  } else if (variant === 'subtle') {
    const color = _color || 'gray'
    return createBtnVars({
      textColor: colors[color][600],
      backgroundColor: colors[color][100],
      backgroundColorHover: colors[color][200],
      outlineColor: colors[color][500],
    })
  } else {
    const color = _color
    return color
      ? createBtnVars({
          textColor: colors.white,
          backgroundColor: colors[color][500],
          borderColor: colors.transparent,
          backgroundColorHover: colors[color][600],
          outlineColor: colors[color][500],
        })
      : createBtnVars({
          borderColor: colors.gray[300],
          backgroundColorHover: colors.gray[50],
          outlineColor: colors.indigo[500],
        })
  }
}
