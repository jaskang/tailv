<template>
  <div>Test</div>
  <TestInner @submit="clickHandler" />
  <br />
  <WrapSlot>
    <template v-if="true">
      <span>template span</span>
      <span>template span</span>
    </template>
  </WrapSlot>
  <br />
  <WrapSlot>
    <!-- span -->
    <template v-if="true">
      <Button>span1-2</Button>
    </template>
  </WrapSlot>

  <br />
  <WrapSlot>
    <!-- span -->
    <span>span</span>
  </WrapSlot>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestInner from './TestInner.vue'
import WrapSlot from './WrapSlot'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    TestInner,
    WrapSlot
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
