<template>
  <div class="hello">
    <img style="width: 80px; height: 80px;" alt="Vue logo" src="./../assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  }
});
</script>
<style lang="less" scoped>
.hello {
  padding: 30px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    width: 80px;
    height: 80px;
  }
}
</style>
