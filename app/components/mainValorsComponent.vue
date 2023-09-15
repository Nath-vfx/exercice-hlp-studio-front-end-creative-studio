<script setup lang="ts">

</script>

<template>
  <section>
    <div class="valors">
      <div class="paragraphe">
        <h3 class="paragraphe-title-span">À propos</h3>
        <h2 class="paragraphe-title">
          Les Valeurs qui Nous Animent : <br>
          Notre Engagement en Action
        </h2>
        <p class="paragraphe-p">
          Des idées audacieuses, des solutions sur mesure. En tant
          qu'experts en communication et marketing digital, nous croyons en
          la puissance des stratégies personnalisées pour propulser votre
          marque vers de nouveaux sommets !
        </p>
      </div>
      <div class="valors-list">
        <div class="valors-list-item">
          <div class="valors-list-item-icon">
            <img src="/icons/Bell.svg" alt="">
          </div>
          <h4>
            Made in Nord <br>
            Franche Comté
          </h4>
        </div>
        <div class="valors-list-item">
          <div class="valors-list-item-icon">
            <img src="/icons/Lightning.svg" alt="">
          </div>
          <h4>Réactivité</h4>
        </div>
        <div class="valors-list-item">
          <div class="valors-list-item-icon">
            <img src="/icons/Heart.svg" alt="">
          </div>
          <h4>Engagement</h4>
        </div>
        <div class="valors-list-item">
          <div class="valors-list-item-icon">
            <img src="/icons/Light-bulb.svg" alt="">
          </div>
          <h4>Innovation</h4>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.valors {
  background-color: #252525;
  padding-top: 80px;
  padding-bottom: 80px;
  h2, h4, p {
    color: #fff;
  }
  .paragraphe {
    h2, h3, p {
      text-align: center;
      width: 33%;
      margin: 0 auto;
    }
    margin-bottom: 80px;
  }
  &-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin: 0 20%;
    &-item {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
      align-items: center;
      width: 280px;
      height: auto;
      &:not(:last-child) {
        border-right: #fff solid 1px;
      }
      &-icon {
        width: 80px;
        height: 80px;
        background-color: #79BEC2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        margin-bottom: 40px;
      }
      h4 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
}
</style>