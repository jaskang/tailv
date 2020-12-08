<template>
  <div @click="submitForm">TestInner</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TestInner',
  emits: {
    // No validation
    click: () => {
      // console.log('valid')
      return false
    },

    // Validate submit event
    submit: ({ email, password }: any) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    onclick() {
      const ret = this.$emit('click')
      console.log(ret)
    },
    submitForm() {
      this.$emit('submit', {})
      // this.$emit('submit', { email: 'email', password: 'password' })
    }
  }
})
</script>
<style lang="less" scoped></style>
