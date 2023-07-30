<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});
</script>

<template>
  <div :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <NuxtPage />
  </div>
</template>
