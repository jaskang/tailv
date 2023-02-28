<script setup lang="ts"></script>
<template>
  <div class="e-button-group"><slot /></div>
</template>
<style lang="scss">
.e-button-group {
  @apply relative z-0 inline-flex rounded-sm shadow-sm;
  > .e-button {
    @apply relative rounded-none first:rounded-l-md last:rounded-r-md focus:z-10 focus:ring-offset-0;
    + .e-button {
      @apply -ml-px;
    }
  }
}
</style>
