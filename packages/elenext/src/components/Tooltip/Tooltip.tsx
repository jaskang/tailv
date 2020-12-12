import { App, computed, defineComponent, PropType } from 'vue'
import { getBlockCls, getCompName } from '../../utils'
import { mergeClass } from '@elenext/shared'
import { Popper } from '../Popper'
import { Placement } from '../Popper/Popper'

const blockCls = getBlockCls('Tooltip')
const Tooltip = defineComponent({
  name: getCompName('Tooltip'),
  props: {
    effect: {
      type: String as PropType<'dark' | 'light'>,
      default: 'dark'
    },
    content: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 0
    },
    modelValue: Boolean,
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover'
    },
    transition: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => mergeClass(blockCls, props.popperClass, 'is-' + props.effect))
    return () => (
      <Popper
        modelValue={props.modelValue}
        popperClass={classes.value}
        placement={props.placement}
        trigger={props.trigger}
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, props.offset]
            }
          }
        ]}
        v-slots={{
          popper: slots.content ? slots.content : () => props.content,
          default: slots.default
        }}
      />
    )
  }
})

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
