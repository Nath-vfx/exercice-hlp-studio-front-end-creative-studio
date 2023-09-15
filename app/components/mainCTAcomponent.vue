<script setup lang="ts">

const num = defineProps<{
  num?: number
}>()

const isNumberOne = ref(false);
const isNumberTwo = ref(false);

const whatNumberIs = function () {
  if (num.num === 1) {
    isNumberOne.value = true
    isNumberTwo.value = false
    return
  } else if (num.num === 2) {
    isNumberOne.value = false
    isNumberTwo.value = true
    return
  } else {
    isNumberOne.value = false
    isNumberTwo.value = false
    return
  }
}

onMounted(() => {
  whatNumberIs()
})

</script>

<template>
  <section>
    <div class="call-to-action" :class="{'number-1': isNumberOne, 'number-2' : isNumberTwo }">
      <h2>
        Vous avez un projet ? <br>
        Dévellopper le avec nous.
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        hendrerit odio nisl, at ullamcorper ligula consequat a. Donec eget
        pellentesque dui. Nam facilisis venenatis lacus eu volutpat. In in
        odio ornare, imperdiet lectus non, auctor lorem. Etiam rhoncus
        accumsan sagittis.
      </p>
      <button class="call-to-action-button">Contact</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.call-to-action {
  color: #fff;
  height: 544px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 30%;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 0;
  }
  h2 {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 20px;
    text-align: center;
    z-index: 1;
  }
  p {
    text-align: center;
    margin-bottom: 60px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 14px;
    z-index: 1;
  }
  &-button {
    background-color: #fff;
    color: #79BEC2;
    border: none;
    padding: 12px 50px 12px 20px;
    position: relative;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    &::after {
      content: url('/icons/right-arrow-variant.svg');
      position: absolute;
      top: 56%;
      transform: translateY(-50%);
      right: 16px;
    }
  }
}

.number-1 {
  background: url('/images/laptop.png');
}
.number-2 {
  background: url('/images/landscape.png');
}
</style>