<script setup lang="ts">

</script>

<template>
  <section>
    <div class="main__services">
      <div class="main__services-service">
        <img
            src="/icons/Azimuth.png"
            alt="Azimuth"
            srcset="/icons/Azimuth-x2.png 2x">
        <p>Conseils et accompagnement</p>
      </div>
      <div class="main__services-service">
        <img
            src="/icons/Mylivn.png"
            alt="Mylivn"
            srcset="/icons/Mylivn-x2.png 2x">
        <p>Production de contenus</p>
      </div>
      <div class="main__services-service">
        <img
            src="/icons/laser-beam.png"
            alt="Laser Beam"
            srcset="/icons/laser-beam-x2.png 2x">
        <p>
          Stratégie marketing <br>
          et communication
        </p>
      </div>
      <div class="main__services-service">
        <img
            src="/icons/Counselor.png"
            alt="Counselor"
            srcset="/icons/Counselor-x2.png 2x"
        >
        <p>Service goodies</p>
      </div>
      <div class="main__services-cta">
        <button class="btn btn--primary arrow-right btn-padding-right-x2">
          Contact
        </button>
      </div>
    </div>
    <div class="approch">
      <div class="fictive"></div>
      <div class="approch__our-engagement paragraphe">
        <h3 class="paragraphe-title-span">Une approche centrée sur vous</h3>
        <h2 class="paragraphe-title">
          Des idées, de la créativité et une conception de pointe qui
          transforment vos activités.
        </h2>
        <p class="paragraphe-p">
          Nous croyons fermement qu'une approche personnalisée est la clé
          d'une collaboration fructueuse. C'est pourquoi, nous prenons le
          temps de vous écouter attentivement, de comprendre vos besoins
          uniques et de cerner vos aspirations. Chaque projet que nous
          entreprenons est conçu sur mesure pour refléter l'essence même de
          votre marque et susciter une connexion profonde avec votre public
          cible. Votre satisfaction est notre priorité absolue. Nous nous
          engageons à vous offrir un service client d'exception, à rester
          accessibles et à être à l'écoute de vos besoins tout au long de
          notre collaboration.
          <strong>
            Votre succès est la plus grande récompense que nous puissions
            recevoir.
          </strong>
        </p>
      </div>
      <div class="approch__experts-domains">
        <h3>Domaines d'expertise</h3>
        <ul>
          <li>Identité de marque</li>
          <li>Identité visuel</li>
          <li>Stratégie de marque</li>
          <li>Conception graphique</li>
          <li>Branding Numérique</li>
          <li>Communication de marque</li>
          <li>Marketing d'influence</li>
          <li>Goodies pour évènement de marque</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
//Services grid

.main__services {
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  &-service {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;
    border-bottom: 1px solid #C6C6C6;
    margin-top: 3px;
    img {
      margin-bottom: 40px;
    }
  }
  &-service:not(:nth-child(4)) {
    border-right: 1px solid #C6C6C6;
  }

  &-cta {
    background-color: #252525;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    text-transform: uppercase;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 900;
    font-size: 14px;
    text-align: center;
    justify-self: start;
    max-width: 190px;
  }
}

.approch {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 113px 1fr;
  .fictive {
    grid-column: 1/4;
    grid-row: 1;
    width: 100%;
    height: auto;
    border-right: #C6C6C6 solid 1px;
  }

  &__our-engagement {
    grid-column: 1 / 4;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    border-right: #C6C6C6 solid 1px;
    border-top: #C6C6C6 solid 1px;
    padding: 5% 5% 10% 20vw;
    position: relative;
    .paragraphe-title-span {
      position: absolute;
      top: -15px;
      background-color: #fff;
      padding: 0 20px;
      transform: translateX(-20px);
    }
    .paragraphe-title {
      margin-bottom: 40px;
    }
  }
  &__experts-domains {
    grid-column: 4 / 6;
    grid-row: 2;
    border-top: #C6C6C6 solid 1px;
    padding: 10% 20vw 10% 10%;
    h3 {
      text-transform: uppercase;
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 200;
      margin-bottom: 20px;
    }
    ul {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 14px;
      li {
        line-height: 35px;
      }
    }
  }
}
</style>