<template>
  <h1>ElPopper</h1>

  <Preview>
    <ElPopper>
      ElPopper 1
      <ElPopper>
        ElPopper 2
        <template #reference>
          <div>reference 2</div>
        </template>
      </ElPopper>
      <template #reference>
        <div>
          reference 1
        </div>
      </template>
    </ElPopper>
  </Preview>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Preview from '../components/Preview.vue';
import { ElPopper } from '@/index';
export default defineComponent({
  components: {
    Preview,
    ElPopper
  }
});
</script>
