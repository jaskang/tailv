

import { type PropType,defineComponent,type SlotsType } from 'vue'
import { useStyle } from '../utils/style'
import { createButtonStyle, type ColorName } from '@zonda/style'

const Button = defineComponent({
  name:'ZButton',
  props:{
    variant: {
      type: String as PropType<'default' | 'ghost' | 'link' | 'outline' | 'soft' | 'solid'>,
      default: 'default',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    color: {
      type: String as PropType<ColorName>,
      default: 'primary',
    },
    pill: Boolean,
    square: Boolean,
    block: Boolean,
    loading: Boolean,
    disabled: Boolean,
  }
  emits:[],
  slots: {} as SlotsType<{ default?(_: {}): any; icon?(_: {}): any }>,
  setup(props,{emit,slots}){

const { css, style, icon } = useStyle(() =>
  createButtonStyle({
    variant: props.variant,
    size: props.size,
    color: props.color,
    pill: props.pill,
    square: props.square,
    block: props.block,
    disabled: props.disabled,
  })

)
 return ()=> <button class={css} disabled={props.disabled} style={style} type="button">
  {
    (loading || loading.icon) && <i class={icon}> 
     {
      loading?   <LoadingIcon class="animate-spin" /> : slots.icon()
     }
   
    
  </i>
  }
 {slots.default()}
</button>


  }
})