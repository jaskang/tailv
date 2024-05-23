# ListBox

## Default

```vue demo
<script setup>
import { ref } from 'vue'
import { PaperAirplaneIcon, InboxIcon, TrashIcon, ArchiveBoxIcon, CircleStackIcon } from '@heroicons/vue/24/outline'

const items = ref([
  { key: 'Inbox', label: 'Inbox', icon: InboxIcon },
  { key: 'Sent', label: 'Sent', icon: PaperAirplaneIcon },
  { key: 'Trash', label: 'Trash', icon: TrashIcon },
  {
    key: 'Archive',
    label: 'Archive',
    icon: ArchiveBoxIcon,
    children: [
      { key: '1-1', label: '1st menu item' },
      { key: '1-2', label: '2nd menu item' },
    ],
  },
  { key: 'Drafts', label: 'Drafts', icon: CircleStackIcon },
  {
    type: 'group',
    label: 'group2',
    children: [
      { key: '3-1', label: '5d menu item' },
      { key: '3-2', label: '6th menu item' },
    ],
  },
  {
    key: 'item-4',
    label: 'item-4',
    children: [
      { key: '4-1', label: '5d menu item' },
      { key: '4-2', label: '6th menu item' },
    ],
  },
  { key: 'item-5', type: 'divider' },
  { key: 'item-3', label: 'item 4' },
])

const current = ref('Archive')
</script>
<template>
  <div class="flex flex-wrap gap-2">
    <ListBox :items="items" class="w-40 rounded-md" />
  </div>
</template>
```
