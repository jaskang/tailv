

export const FlatMenu = ()=>{
  return <div>
    
  </div>
}
export const VerticalMenu = defineComponent({
  name: 'ZVerticalMenu',
  props,
  emits: {} as {
    click(payload: MouseEvent): void
  },
  slots: Object as SlotsType<{
    default: { foo: string; bar: number }
    item: { data: number }
  }>,
  setup(props, { slots, emit }) {
    const { cssVars, cls } = useStyle(() => {
      return {
        ...props,
      }
    })

    const hasIcon = computed(() => !!slots.icon || props.loading)
    const onClick = (e: MouseEvent) => {
      if (!props.disabled) {
        emit('click', e)
      }
    }
    return () => (
      <div style={cssVars.value} className={cls.value}>
        {slots.default?.()}
      </div>
    )
  },
})
