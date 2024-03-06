<script setup>
import { Tooltip,Button } from 'tailv'
</script>

# Tooltip

## default

<div class="flex flex-wrap gap-2">
  <Tooltip content="content"> 
    <Button>Button</Button>
  </Tooltip> 
</div>

## nested

<div class="flex flex-wrap gap-2">
  <Tooltip> 
    <Button>Button</Button>
    <template #content>
      content
      <Tooltip> 
        <Button>Button</Button>
        <template #content>
          content
        </template>
      </Tooltip> 
    </template>
  </Tooltip> 
</div>
