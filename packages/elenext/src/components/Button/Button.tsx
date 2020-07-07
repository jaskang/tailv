import { inject, computed, defineComponent } from 'vue'
import { ElFormSymbol, ElFormItemSymbol, useGlobal } from '../../provides/index'
import { injectCss } from '../../utils/dom'

import styles from './Button.scss'

injectCss(styles, 'ElButton')

const ElButton = defineComponent({
  name: 'ElButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String
    },
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },
  setup(props, { emit, attrs, slots }) {
    const elForm = inject(ElFormSymbol, null)
    const elFormItem = inject(ElFormItemSymbol, null)
    const elGlobalConfig = useGlobal()
    const buttonSize = computed(() => {
      return props.size || elFormItem?.elFormItemSize || elGlobalConfig?.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || elForm?.disabled
    })

    // return {
    //   buttonSize,
    //   buttonDisabled
    // }

    return () => (
      <button
        disabled={buttonDisabled.value || props.loading}
        autofocus={props.autofocus}
        type={props.nativeType as 'button'}
        class={[
          'el-button',
          props.type ? 'el-button--' + props.type : '',
          buttonSize ? 'el-button--' + buttonSize.value : '',
          {
            'is-disabled': buttonDisabled.value,
            'is-loading': props.loading,
            'is-plain': props.plain,
            'is-round': props.round,
            'is-circle': props.circle
          }
        ]}
        {...attrs}
      >
        {props.loading && <i class="el-icon-loading"></i>}
        {props.icon && !props.loading && <i class={props.icon}></i>}
        <span>{slots.default?.()}</span>
      </button>
    )
  }
})

export default ElButton
