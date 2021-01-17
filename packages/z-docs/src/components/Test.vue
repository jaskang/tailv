<template>
  <div>Test</div>
  <TestInner @submit="clickHandler" />
  <br />
  <br />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestInner from './TestInner.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TestInner
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickHandler(e: any) {
      console.log(e)
    }
  }
})
</script>
<style lang="scss" scoped></style>
