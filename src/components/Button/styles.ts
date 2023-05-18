import { classed, type VariantProps } from '@/variants'
import { computed, toValue, type MaybeRefOrGetter, toRef } from 'vue'

export const createBtnCls = classed('t-button', {
  variants: {
    variant: {
      default: '',
      link: '',
      subtle: '',
    },
    color: {
      type: '',
    },
    size: {
      xs: '',
      sm: '',
      md: '',
      lg: '',
      xl: '',
    },
    rounded: {
      true: '',
      false: '',
    },
    square: {
      true: '',
      false: '',
    },
    circle: {
      true: '',
      false: '',
    },
    block: {
      true: '',
      false: '',
    },
    loading: {
      true: '',
      false: '',
    },
    disabled: {
      true: '',
      false: '',
    },
  },
})

export function useCls(variant: () => VariantProps<typeof createBtnCls>) {
  const variantRef = toRef(variant)
  return computed(() => createBtnCls(toValue(variantRef)))
}
