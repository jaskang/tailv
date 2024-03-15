<script setup lang="ts">
import { useData } from 'vitepress'

const { theme, frontmatter } = useData()
</script>

<template>
  <footer v-if="theme.footer && frontmatter.footer !== false" class="VPFooter">
    <div class="container">
      <p v-if="theme.footer.message" class="message" v-html="theme.footer.message"></p>
      <p v-if="theme.footer.copyright" class="copyright" v-html="theme.footer.copyright"></p>
    </div>
  </footer>
</template>
