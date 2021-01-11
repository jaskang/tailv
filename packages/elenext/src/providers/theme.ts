import { computed, inject } from 'vue'

export interface ThemeOption {
  'global-color-white': string
  'global-color-black': string

  'global-color-primary': string
  'global-color-success': string
  'global-color-warning': string
  'global-color-danger': string
  'global-color-info': string

  // =================================================
  // global
  // =================================================
  'global-text-color-primary': string
  'global-text-color-regular': string
  'global-text-color-placeholder': string

  'global-font-size-large': string
  'global-font-size-base': string
  'global-font-size-small': string

  'global-background-color-base': string

  'global-font-family': string

  'global-line-height': number

  'global-row-height-large': string
  'global-row-height': string
  'global-row-height-small': string

  'global-padding-vertical': string
  'global-padding-horizontal': string

  'global-border-color-base': string
  'global-border-color-hover': string
  'global-border-color-light': string
  'global-border-color-lighter': string
  'global-border-color-extra-light': string

  'global-border-radius-base': string
  'global-border-radius-small': string
  'global-border-radius-circle': string

  'global-box-shadow-base': string
  'global-box-shadow-dark': string
  'global-box-shadow-light': string

  'global-disabled-font-color': string
  'global-disabled-background-color': string
  'global-disabled-border-color': string

  'global-transition-all': string
  'global-transition-fade': string
  'global-transition-fade-linear': string
  'global-transition-md-fade': string
  'global-transition-border': string
  'global-transition-color': string

  'global-index-normal': number
  'global-index-top': number
  'global-index-popper': number
}

const TEMEMS = {
  'global-color-white': '#ffffff',
  'global-color-black': '#000000',
  'global-color-primary': '#409eff',
  'global-color-success': '#67c23a',
  'global-color-warning': '#e6a23c',
  'global-color-danger': '#f56c6c',
  'global-color-info': '#909399',

  // =================================================
  // global
  // =================================================
  'global-text-color-primary': '#303133',
  'global-text-color-regular': '#606266',
  'global-text-color-placeholder': '#c0c4cc',

  'global-font-size-large': '16px',
  'global-font-size-base': '14px',
  'global-font-size-small': '12px',

  'global-background-color-base': '#f5f7fa',

  'global-font-family': `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
  sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,

  'global-line-height': 1.5,

  'global-row-height-large': '40px',
  'global-row-height': '32px',
  'global-row-height-small': '28px',

  'global-padding-vertical': '15px',
  'global-padding-horizontal': '15px',

  'global-border-color-base': '#dcdfe6',
  'global-border-color-hover': '#c0c4cc',
  'global-border-color-light': '#e4e7ed',
  'global-border-color-lighter': '#ebeef5',
  'global-border-color-extra-light': '#f2f6fc',

  'global-border-radius-base': '4px',
  'global-border-radius-small': '2px',
  'global-border-radius-circle': '100%',

  'global-box-shadow-base': '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
  'global-box-shadow-dark': '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.12)',
  'global-box-shadow-light': '0 2px 12px 0 rgba(0, 0, 0, 0.1)',

  'global-disabled-font-color': 'var(--global-text-color-placeholder)',
  'global-disabled-background-color': 'var(--global-background-color-base)',
  'global-disabled-border-color': 'var(--global-text-color-placeholder)',

  'global-transition-all': 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
  'global-transition-fade': 'opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)',
  'global-transition-fade-linear': 'opacity 200ms linear',
  'global-transition-md-fade':
    'transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1)',
  'global-transition-border': 'border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',
  'global-transition-color': 'color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1)',

  'global-index-normal': 1,
  'global-index-top': 1000,
  'global-index-popper': 2000
}

export function useTheme() {
  const config: any = inject('EConfigProvider')
  const theme = computed<ThemeOption>(() => {
    const configTheme = config?.theme || {}
    return { ...configTheme, ...TEMEMS }
  })
  return { theme: theme.value }
}
