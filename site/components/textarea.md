# Textarea

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <Textarea placeholder="请输入内容" />
</template>
```

## 基础用法

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <Textarea placeholder="请输入内容" resize="vertical" />
    <Textarea placeholder="请输入内容" resize="horizontal" />
    <Textarea placeholder="请输入内容" resize="both" />
  </div>
</template>
```

## 状态

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <div class="flex flex-col gap-y-4">
    <Textarea placeholder="请输入内容" />
    <Textarea placeholder="请输入内容" status="success" />
    <Textarea placeholder="请输入内容" status="warning" />
    <Textarea placeholder="请输入内容" status="danger" />
  </div>
</template>
```

## 无边框

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <Textarea noBorder placeholder="请输入内容" resize="vertical" />
</template>
```

## 禁用

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <Textarea disabled placeholder="请输入内容" />
</template>
```

## 工具条

```vue demo
<script setup>
import {
  PaperAirplaneIcon,
  CodeBracketIcon,
  TrashIcon,
  ArchiveBoxIcon,
  CircleStackIcon,
} from '@heroicons/vue/24/outline'

import { ref } from 'vue'
</script>
<template>
  <div class="">
    <Textarea class="rounded-b-none focus:z-10" placeholder="请输入内容" />
    <div
      class="flex items-center justify-between rounded-md rounded-t-none border border-t-0 border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800"
    >
      <div>
        <Button variant="ghost" square>
          <CodeBracketIcon class="h-4 w-4" />
        </Button>
        <Button variant="ghost" square>
          <PaperAirplaneIcon class="h-4 w-4" />
        </Button>
      </div>
      <Button color="primary">
        <PaperAirplaneIcon class="mr-2 h-4 w-4" />
        send
      </Button>
    </div>
  </div>
</template>
```
