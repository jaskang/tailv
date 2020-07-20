import { onMounted, getCurrentInstance } from 'vue'

const useProvideChildren = () => {}
const useChildren = () => {
  onMounted(() => {
    const ctx = getCurrentInstance()
  })
}
