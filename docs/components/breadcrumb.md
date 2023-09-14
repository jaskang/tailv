# Breadcrumb

```vue preview
<script setup lang="tsx">
const home = () => <HomeIcon class="h-3 w-3" />
</script>
<template>
  <ZBreadcrumb :items="[{ title: home }, { title: 'sdfs' }, { title: 'asdfasdf' }]"></ZBreadcrumb>
</template>
```