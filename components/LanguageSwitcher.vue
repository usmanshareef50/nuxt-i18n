<script setup>
const { locale, locales, setLocaleCookie } = useI18n();

watch(locale, (newValue, oldValue) => {
  setLocaleCookie(newValue);
});
</script>
<template>
  <form>
    <select v-model="locale">
      <option v-for="lang in locales" :value="lang.code">
        {{ lang.name }}  
      </option>
    </select>
  </form>
</template>
