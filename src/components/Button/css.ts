import { type ArrayCSSInterpolation, css, type CSSInterpolation } from '@emotion/css'

export const cssName = () => {
  const cls = css([
    `
    --z-btn-text-color: inherit;
    --z-btn-bg-color: #fff;
    --z-btn-border-color: #fff;
    --z-btn-bg-color-hover: var(--z-btn-bg-color);
    --z-btn-border-color-hover: var(--z-btn-border-color);

    --z-btn-outline-color: var(--z-primary-color);
    --z-btn-h: calc(2.25rem + 2px);

    appearance: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    height: var(--z-btn-h);
    color: var(--z-btn-text-color);
    background-color: var(--z-btn-bg-color);
    text-align: center;
    font-weight: 500;
    border: none;
    outline: none;
    outline-offset: 2px;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    .z-btn_icon {
      display: block;
      width: 1em;
      height: 1em;
      line-height: 1em;
      transform: scale3d(1.25, 1.25, 1);
      > svg {
        display: block;
        width: 100%;
        height: 100%;
      }
      + .z-btn_body{
        margin-left: 0.4em;
      }
    }
    .z-btn_body {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:enabled {
      cursor: pointer;
      &:hover {
        background-color: var(--z-btn-bg-color-hover);
        border-color: var(--z-btn-border-color-hover);
      }
      &:focus-visible {
        outline: var(--z-btn-outline-color) solid 2px;
      }
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  `,
    ...genVariantStyle(),
    ...genSizeStyle(),
    ...genOtherStyle(),
  ])
  return { css: cls }
}

function genVariantStyle(): ArrayCSSInterpolation {
  return [
    {
      '&.z-btn-default': {
        'box-shadow': 'var(--shadow-sm)',
        border: '1px solid var(--z-btn-border-color)',
      },
      '&.z-btn-outline': {
        border: '1px solid var(--z-btn-border-color)',
      },
      '&.z-btn-solid': {
        'box-shadow': 'var(--shadow-sm)',
        color: '#fff',
      },
      '&.z-btn-soft': {
        'box-shadow': 'var(--shadow-sm)',
      },
      '&.z-btn-plain': {},
      '&.z-btn-link': {
        '&:enabled:hover': {
          'text-decoration': 'underline solid green 2px',
          'text-underline-offset': '4px',
        },
      },
    },
  ]
}

function genSizeStyle() {
  return [
    {
      '&.z-btn--xs': {
        '--z-btn-h': 'calc(1.75rem + 2px)',
        'font-size': '0.75rem',
        padding: '0 0.5rem',
      },
      '&.z-btn--sm': {
        '--z-btn-h': 'calc(2rem + 2px)',
        'font-size': '0.875rem',
        padding: '0 0.75rem',
      },
      '&.z-btn--md': {
        '--z-btn-h': 'calc(2.25rem + 2px)',
        'font-size': '1rem',
        padding: '0 1rem',
      },
      '&.z-btn--lg': {
        '--z-btn-h': 'calc(2.5rem + 2px)',
        'font-size': '1.125rem',
        padding: '0 1.25rem',
      },
      '&.z-btn--xl': {
        '--z-btn-h': 'calc(2.75rem + 2px)',
        'font-size': '1.25rem',
        padding: '0 1.5rem',
      },
    },
  ]
}

function genOtherStyle() {
  return [
    {
      '&.z-btn--block': {
        width: '100%',
      },
      '&.z-btn--pill': {
        'border-radius': '9999px',
      },
      '&.z-btn--square': {
        width: 'var(--z-btn-h)',
        padding: '0 !important',
      },
    },
  ]
}
