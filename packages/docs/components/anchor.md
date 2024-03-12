<script setup>
import { ref } from 'vue'
import { Anchor } from 'tailv'

const picked = ref('A')

</script>

# Anchor

<div class="">
  <Anchor :items="[{label: 'A', key: 'A'}, {label: 'B', key: 'B', children:[{label: 'B-1', key: 'B-1'}, {label: 'B-2', key: 'B-2' }, {label: 'B-3', key: 'B-3'}] }, {label: 'C', key: 'C'}]"  />  
</div>
