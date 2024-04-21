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
  <Textarea placeholder="请输入内容">
    <template #toolbar>
      <div class="flex items-center justify-between">
        <div>
          <Button variant="ghost">
            <template #icon>
              <CodeBracketIcon />
            </template>
          </Button>
          <Button variant="ghost">
            <template #icon>
              <PaperAirplaneIcon />
            </template>
          </Button>
        </div>
        <Button color="primary">
          <template #icon>
            <PaperAirplaneIcon />
          </template>
        </Button>
      </div>
    </template>
  </Textarea>
</template>
```
