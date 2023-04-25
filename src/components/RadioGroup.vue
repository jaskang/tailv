<script lang="ts">
import { defineComponent, provide, ref, toRef, type ExtractPropTypes, computed } from 'vue'
import { type RadioGroupContext } from './Radio'
import { PropTypes } from '@/utils'
import { useControllable } from '@/hooks/controllable'

export default defineComponent({
  props: {
    value: PropTypes.any(),
    name: PropTypes.string().def(''),
    disabled: Boolean,
  },
  emits: ['update:value', 'change'],
  setup(props, { emit }) {
    const [value, setValue] = useControllable(
      computed(() => props.value),
      val => {
        emit('update:value', val)
        emit('change', val)
      },
      computed(() => false)
    )

    provide<RadioGroupContext>('RadioGroupContext', {
      props: computed(() => {
        return {
          value: value.value,
          name: props.name,
          disabled: props.disabled,
        }
      }),
      onRadioChange: (val: any) => setValue('onUpdate:value', val),
    })
  },
})
</script>
<template>
  <slot />
</template>
<!-- 
xxx
dsu-static.wesure.cn/app13/claim-health/button.xxx.js

static.wesure.cn/app13/h5-claim-health/button.xxx.js
|   |   |
a & b & c
A & B & C
/.*js/i
tryfile(js)/ index.html
网关服务器出现。
xxx.com/a.js

xxx.com/index.html

404: Not Found

sit-s.wesure.com a.com/x.pdf?t= sit-s.wesure.com
s.wesure.com a.com/x.pdf?t= wesure.com  
-->
