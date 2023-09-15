<script setup lang="ts">

</script>

<template>
  <div class="our-customers">
    <ul class="our-customers-list">
      <li v-for="item in 8">
        <img
            src="/icons/client-chateau-pontarme.png"
            alt="Logo du château de Pontarmé"
            srcset="/icons/client-chateau-pontarme-x2.png 2x"
        >
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.our-customers {
  width: 100vw;
  height: auto;
  margin: 120px 0;
  &-list {
    display: flex;
    align-items: center;
    clip-path: inset(0 0 0 0);
    overflow-x: hidden;
    li {
      margin: 0 40px;
      transform: translateX(-50%);
      gap: 40px;
    }
  }
}
</style>