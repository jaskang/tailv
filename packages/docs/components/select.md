<script setup>
import { Select,Button } from 'tailv'
</script>

# Select

## default

<div class="flex flex-wrap gap-2">
  <Select class="w-60" placeholder="placeholder"  :options="[
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' },
  { value: 5, label: 'Tanya Fox' },
  { value: 6, label: 'Hellen Schmvaluet' },
  { value: 7, label: 'Caroline Schultz' },
  { value: 8, label: 'Mason Heaney' },
  { value: 9, label: 'Claudie Smitham' },
  { value: 10, label: 'Emil Schaefer' },
]"/>
  <Select class="w-60" placeholder="placeholder"  :options="[
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
]"/>
</div>
