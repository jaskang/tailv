import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ElIcon',
  props: { name: String },
  setup() {
    return () => <i class={'el-icon-' + name}></i>
  }
})
