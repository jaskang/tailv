<template>
  <h1>ElButton</h1>
  <el-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <template #reference> <el-button>hover 激活</el-button></template>
  </el-popover>
  <Preview title="不同尺寸">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference> <el-button>hover 激活</el-button></template>
    </el-popover>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <template #reference><el-button>click 激活</el-button></template>
    </el-popover>
    <template #template>
      {{`
      <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference><el-button>hover 激活</el-button></template>
      </el-popover>

      <el-popover
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      >
        <template #reference><el-button>click 激活</el-button></template>
      </el-popover>
      `}}
    </template>
  </Preview>
  <Preview>
    <ElPopper>
      sdfasfasfsd
      <template #reference>
        <div>reference</div>
      </template>
    </ElPopper>
  </Preview>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Preview from '../components/Preview.vue';
import { ElPopover, ElPopper, ElButton } from '@/index';
export default defineComponent({
  components: {
    Preview,
    ElButton,
    ElPopover,
    ElPopper
  }
});
</script>
