<script setup lang="ts"></script>
<template>
  <div class="mdvue-demo">
    <div class="mdvue-demo__preview">
      aaaa
      <slot name="preview" />
    </div>
    <div class="mdvue-demo__code">
      <slot />
    </div>
  </div>
</template>
