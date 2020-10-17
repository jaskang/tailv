import { defineComponent, Transition, computed, PropType, reactive } from 'vue'
import { getBlockCls, getCompName } from '../../config'

// import './Alert.scss'

const TYPE_CLASSES_MAP = {
  success: 'el-icon-success',
  warning: 'el-icon-warning',
  error: 'el-icon-error'
}

const blockCls = getBlockCls('Alert')
const Alert = defineComponent({
  name: getCompName('Alert'),
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<'success' | 'warning' | 'info' | 'error'>,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String as PropType<'light' | 'dark'>,
      default: 'light'
    }
  },
  setup(props, { emit, attrs, slots }) {
    const data = reactive({
      visible: true
    })
    const typeClass = computed(() => `${blockCls}--${props.type}`)

    const iconClass = computed(() => TYPE_CLASSES_MAP[props.type as 'success' | 'warning' | 'error'] || 'el-icon-info')

    const isBigIcon = computed(() => (props.description || slots.default ? 'is-big' : ''))

    const isBoldTitle = computed(() => (props.description || slots.default ? 'is-bold' : ''))

    const close = () => {
      data.visible = false
      emit('close')
    }
    return () => (
      <Transition name="el-alert-fade">
        <div
          class={[blockCls, typeClass.value, props.center ? 'is-center' : '', 'is-' + props.effect]}
          v-show={data.visible}
          role="alert"
        >
          {props.showIcon && <i class={['el-alert__icon', iconClass.value, isBigIcon.value]}></i>}

          <div class="el-alert__content">
            {(slots.title || props.title) && (
              <span class={['el-alert__title', isBoldTitle.value]}>{slots.title?.() || props.title}</span>
            )}
            {slots.default && !props.description && <p class="el-alert__description">{slots.default?.()}</p>}
            {props.description && !slots.default && <p class="el-alert__description">{props.description}</p>}
            <i
              v-show={props.closable}
              class={{
                'el-alert__closebtn': true,
                'is-customed': props.closeText !== '',
                'el-icon-close': props.closeText === ''
              }}
              onClick={close}
            >
              {props.closeText}
            </i>
          </div>
        </div>
      </Transition>
    )
  }
})

export default Alert
