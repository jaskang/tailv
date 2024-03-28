<script setup>
import { ref } from 'vue'
import { Menu } from 'tailv'
import { PaperAirplaneIcon,InboxIcon,TrashIcon ,ArchiveBoxIcon,CircleStackIcon} from '@heroicons/vue/24/outline'

const items = ref([
  { key: 'Inbox', label: 'Inbox',icon: InboxIcon  },
  { key: 'Sent', label: 'Sent',icon: PaperAirplaneIcon  },
  { type: 'divider' },
  { key: 'Trash', label: 'Trash',icon: TrashIcon  },
  {
    label: 'Archive',
    icon: ArchiveBoxIcon,
    children: [
      { key: '1-1', label: '1st menu item' },
      { key: '1-2', label: '2nd menu item' },
    ],
  },
  { key: 'Drafts', label: 'Drafts',icon: CircleStackIcon  },
  { type: 'title',label: 'group2' },
  { key: 'item-3', label: 'item 4' },
  {
    key: 'item-4',
    label: 'item-4',
    children: [
      { key: '3-1', label: '5d menu item' },
      { key: '3-2', label: '6th menu item' },
    ],
  },
])

</script>

# Menu

## Default

<div class="flex flex-wrap gap-2 not-prose">
  <div class="">
    <Menu :items="items" class="border rounded-md border-slate-200 w-40" /> 
  </div>
</div>
