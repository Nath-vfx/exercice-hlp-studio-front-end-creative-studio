<script setup lang="ts">
import {definePageMeta} from "#imports";

const httpClient = useNuxtApp().$api


const projects = ref([])
const articles = ref([])

const getProjects = async function () {
  await httpClient.get('/api/projects?populate=*&pagination[pageSize]=3')
      .then((response) => {
        console.log(response.data)
        projects.value = response.data.data
      }).catch((err) => {
        console.error(err)
      })
}

const getArticles = async function () {
  await httpClient.get('/api/articles?populate=*&pagination[pageSize]=4')
      .then((response) => {
        console.log(response.data.data)
        articles.value = response.data.data
      }).catch((err) => {
        console.error(err)
      })
}

onMounted(() => {
  getProjects();
  getArticles();
})

definePageMeta({
  layout: "specific",
})
</script>

<template>
<main>
  <main-services-component/>
  <main-valors-component/>
  <main-projects-component :projects="projects"/>
  <main-c-t-acomponent :num="1"/>
  <main-customers-component/>
  <customers-testimonies-component/>
  <main-articles-component :articles="articles"/>
  <main-c-t-acomponent :num="2"/>
</main>
</template>

<style scoped>

</style>