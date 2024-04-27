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

## 无边框

```vue demo
<script setup>
import { ref } from 'vue'
</script>
<template>
  <Textarea noBorder placeholder="请输入内容" />
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
  <div class="overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
    <div class="">
      <Textarea noBorder placeholder="请输入内容" />
    </div>
    <div class="flex items-center justify-between border-t bg-gray-50 p-2 dark:border-t-gray-700 dark:bg-gray-800">
      <div>
        <Button variant="ghost" size="sm" square>
          <CodeBracketIcon class="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="sm" square>
          <PaperAirplaneIcon class="h-4 w-4" />
        </Button>
      </div>
      <Button color="primary" size="sm" square>
        <PaperAirplaneIcon class="h-4 w-4" />
      </Button>
    </div>
  </div>
</template>
```
