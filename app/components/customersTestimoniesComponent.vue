<script setup lang="ts">

</script>

<template>
  <section>
    <div class="customers-testimonies">
      <div class="paragraphe">
        <div class="left-box">
          <h3 class="paragraphe-title-span">Témoignages client</h3>
          <h2 class="paragraphe-title">
            lls en parlent mieux que nous : paroles de clients satisfaits
          </h2>
          <ul class="customers-testimonies__customers-types">
            <li class="customers-testimonies__customers-types-type-1">
              Type client 1
            </li>
            <li class="customers-testimonies__customers-types-type-2">
              Type client 2
            </li>
            <li class="customers-testimonies__customers-types-type-3">
              Type client 3
            </li>
          </ul>
        </div>
        <div class="right-box">
          <p class="paragraphe-p">
            Découvrez comment nos clients ont transformé leur vision en
            réalité grâce à nos services. Leurs témoignages sincères
            reflètent l'impact positif et la valeur ajoutée que nous
            apportons à chaque collaboration. Laissez leurs expériences
            parler de notre engagement envers l'excellence.
          </p>
        </div>
      </div>
      <div class="customers-testimonies-list">
        <div class="customers-testimonies-list__card">
          <img
              class="customers-testimonies-list__card-logo"
              src="/icons/logo-fictif.svg"
              alt=""
          >
          <h3 class="customers-testimonies-list__card-title">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="customers-testimonies-list__card-p">
            <strong>Mauris sed ante a erat semper luctus.</strong> Maecenas
            quis tortor nec odio maximus auctor.Mauris sed ante a erat
            semper luctus. Maecenas quis tortor nec odio maximus auctor.
          </p>
          <div class="customers-testimonies-list__card-customer">
            <p class="customers-testimonies-list__card-customer-name">
              Nom Prénom
            </p>
            <p class="customers-testimonies-list__card-customer-activity">
              Activité professionnelle
            </p>
          </div>
        </div>
        <div class="customers-testimonies-list__card">
          <img
              class="customers-testimonies-list__card-logo"
              src="/icons/logo-fictif.svg"
              alt=""
          >
          <h3 class="customers-testimonies-list__card-title">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="customers-testimonies-list__card-p">
            <strong>Mauris sed ante a erat semper luctus.</strong> Maecenas
            quis tortor nec odio maximus auctor.Mauris sed ante a erat
            semper luctus. Maecenas quis tortor nec odio maximus auctor.
          </p>
          <div class="customers-testimonies-list__card-customer">
            <p class="customers-testimonies-list__card-customer-name">
              Nom Prénom
            </p>
            <p class="customers-testimonies-list__card-customer-activity">
              Activité professionnelle
            </p>
          </div>
        </div>
        <div class="customers-testimonies-list__card">
          <img
              class="customers-testimonies-list__card-logo"
              src="/icons/logo-fictif.svg"
              alt=""
          >
          <h3 class="customers-testimonies-list__card-title">
            Lorem ipsum dolor sit amet
          </h3>
          <p class="customers-testimonies-list__card-p">
            <strong>Mauris sed ante a erat semper luctus.</strong> Maecenas
            quis tortor nec odio maximus auctor.Mauris sed ante a erat
            semper luctus. Maecenas quis tortor nec odio maximus auctor.
          </p>
          <div class="customers-testimonies-list__card-customer">
            <p class="customers-testimonies-list__card-customer-name">
              Nom Prénom
            </p>
            <p class="customers-testimonies-list__card-customer-activity">
              Activité professionnelle
            </p>
          </div>
        </div>
        <div class="customers-testimonies-list__navigation">
          <div class="active">1</div>
          /
          <div class="">2</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customers-testimonies {
  background-color: #252525;
  padding: 127px 0;
  .paragraphe {
    color: white;
    display: flex;
    margin: 0 16.66%;
    flex-direction: row;
    position: relative;
    margin-bottom: 80px;
    &-p {
      font-size: 14px;
      font-weight: 400;
    }
    &-title {
      margin-bottom: 40px;
      line-height: 48.5px;
    }
    &-title-span {
      position: absolute;
      top: -40px;
      padding: 0 20px;
      transform: translateX(-20px);
    }
  }
  .left-box {
    flex-basis: 100%;
  }
  .right-box {
    flex-basis: 100%;
    p {
      width: 92%;
      margin-left: auto;
    }
  }
  &__customers-types {
    display: flex;
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 14px;
    margin-left: 24px;
    li:not(:first-child) {
      margin-left: 80px;
    }
    li {
      position: relative;
      &::before{
        content: '';
        position: absolute;
        width: 21px;
        height: 21px;
        border-radius: 21px;
        left: -28px;
        bottom: 2px;
      }
    }
    &-type-1{
      &::before{
        background: #79BEC2;
      }
    }
    &-type-2{
      &::before{
        background: #B53B8E;
      }
    }
    &-type-3{
      &::before{
        background: #8CC279;
      }
    }
  }
  &-list {
    display: grid;
    margin: 0 16.66%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: max-content;
    margin-bottom: 80px;
    position: relative;
    &__card {
      background-color: white;
      border-top: #79BEC2 solid 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 413px;
      height: 591px;
      &-logo {
        width: min-content;
        margin-top: 30px;
      }
      &-title {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 19px;
        text-align: center;
        text-transform: uppercase;
        margin: 40px 120px 20px 120px;
      }
      &-p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        margin: 0 76px 60px 80px;
        line-height: 27.5px;
      }
      &-customer {
        text-align: center;
        border-top: #252525 solid .25px;
        font-family: 'Bricolage Grotesque', sans-serif;
        text-transform: uppercase;
        padding: 40px 30px 30px 30px;
        margin-bottom: 40px;
        &-name {
          font-weight: 700;
          font-size: 18px;
        }
        &-activity {
          font-weight: 400;
          font-size: 15px;
        }
      }
    }
    &__navigation  {
      position: absolute;
      display: flex;
      background-color: white;
      width: 304px;
      height: 78px;
      bottom: -40px;
      left: 50%;
      transform: translateX(-50%);
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
      font-family: 'Lato', sans-serif;
      font-size: 17px;
      font-weight: 300;
      div {
        padding: 5px;
        position: relative;
        &:nth-child(1) {
          &::before {
            content: url('/icons/left-arrow-black.svg');
            position: absolute;
            right: 100px;
            top: 60%;
            transform: translateY(-50%);
            cursor: pointer;
          }
        }
        &:nth-child(2) {
          &::after {
            content: url('/icons/right-arrow-black.svg');
            position: absolute;
            left: 100px;
            top: 60%;
            transform: translateY(-50%);
            cursor: pointer;
          }
        }
      }
      .active {
        font-weight: 700;
        font-size: 20px;
      }

    }
  }
}
</style>