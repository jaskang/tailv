<script setup>
import { Popover,Button } from 'tailv'
</script>

# Popover

## default

<div class="flex flex-wrap gap-2 not-prose">
  <Popover trigger="click"> 
    <Button>Button</Button>
    <template #content>
      asdfasdfsa
    </template>
  </Popover> 
</div>
