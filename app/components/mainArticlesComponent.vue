<script setup lang="ts">

const apiUrl = useRuntimeConfig().public.apiUrl

defineProps({
  articles: {
    type: Array,
    default: null
  }
})

</script>

<template>
  <section v-if="articles">
    <div class="articles">
      <div class="paragraphe">
        <div class="left-box">
          <h3 class="paragraphe-title-span">
            Une approche centrée sur vous
          </h3>
          <h2 class="paragraphe-title">
            Des idées, de la créativité et une conception de pointe qui
            transforment vos activités.
          </h2>
        </div>
        <div class="right-box">
          <p class="paragraphe-p">
            Explorez notre source d'inspiration et d'expertise. Notre blog
            est un espace où nous partageons des idées, des conseils et des
            tendances dans le domaine du marketing et de la communication.
            Plongez dans nos articles pour rester informé et nourrir votre
            propre succès.
          </p>
        </div>
      </div>
      <div class="articles__list">
        <div v-for="article in articles" :key="article.id" class="articles__list-article">
          <div class="poster">
            <img :src="apiUrl+article.attributes.Poster.data.attributes.url" alt="Une image d'un magnifique paysage" >
          </div>
          <div class="content">
            <p class="content-over-title">{{article.attributes.category.data.attributes.Name}}</p>
            <h3 class="content-title">{{article.attributes.Title}}</h3>
            <p class="content-text">
              {{article.attributes.Tagline}}
            </p>
            <button class="cta">Lire plus</button>
          </div>
        </div>
      </div>
      <button class="projects-cta">Voir le blog</button>
    </div>
  </section>
</template>

<style scoped lang="scss">
.articles {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  .paragraphe {
    display: flex;
    flex-direction: row;
    position: relative;
    padding: 40px 16.66%;
    border-top: 1px solid #c6c6c6;
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
      top: -14px;
      padding: 0 20px;
      background-color: #fff;
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
  &__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: max-content max-content;
    column-gap: 20px;
    row-gap: 155px;
    margin: 0 16.66%;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: #c6c6c6;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    &-article {
      display: flex;
      flex-direction: row;
      gap: 20px;
      .poster {
        width: 305px;
        height: 305px;
        img {
          aspect-ratio: 1/1;
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
      .content {
        display: flex;
        flex-direction: column;
        width: 290px;
        &-over-title {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 12px;
          padding: 4px 40px;
          border: 1px solid black;
          border-radius: 20px;
          width: max-content;
          margin-bottom: 20px;
        }
        &-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 28px;
          line-height: 48.5px;
          font-weight: 900;
        }
        &-text {
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 27.5px;
        }
        .cta {
          color: #79BEC2;
          font-family: 'Roboto', sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          border: none;
          background: none;
          font-size: 16px;
          position: relative;
          width: max-content;
          margin-bottom: 10px;
          margin-top: auto;
          &::after {
            content: url('/icons/right-arrow-blue.svg');
            position: absolute;
            top: -2px;
            right: -35px;
            transform: scale(.75) rotate(-45deg);
          }
        }
      }

    }
  }
  .projects-cta {
    margin: 80px auto;
  }

}
</style>