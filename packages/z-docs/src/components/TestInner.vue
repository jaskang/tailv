<template>
  <div @click="submitForm">TestInner</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestInner',
  emits: ['click'],
  methods: {
    onclick() {
      const ret = this.$emit('click')
      console.log(ret)
    },
    submitForm() {
      this.$emit('click', {})
      // this.$emit('submit', { email: 'email', password: 'password' })
    },
  },
})
</script>
<style lang="scss" scoped></style>
