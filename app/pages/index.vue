<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  layout: "specific",
})
</script>

<template>
<main>
  <main-services-component/>
  <main-valors-component/>
  <main-projects-component/>
  <main-c-t-acomponent :num="1"/>
  <main-customers-component/>
  <customers-testimonies-component/>
  <main-articles-component/>
  <main-c-t-acomponent :num="2"/>
</main>
</template>

<style scoped>

</style>