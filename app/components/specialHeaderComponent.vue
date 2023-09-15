<script setup lang="ts">

</script>

<template>
  <div class="section">
    <header>
      <div class="container">
        <div class="header__logo">
          <img
              src="/icons/HLP.png"
              alt="logo"
              srcset="/icons/HLP-retina.png 2x"
          >
        </div>
        <nav class="header__nav">
          <ul>
            <li><a href="#">Notre Vision</a></li>
            <li><a class="expandable" href="#">Services</a></li>
            <li><a href="#">Réalisations</a></li>
            <li><a href="#">Atelier de production</a></li>
          </ul>
        </nav>
        <div class="header__cta">
          <a
              href="#"
              class="btn--primary arrow-top-right btn-padding-right-x3"
          >Contact</a>
        </div>
      </div>
    </header>
    <section>
      <div class="main__title">
        <h1>
          <span>We are</span> a studio <br>
          we are HLP Studio
        </h1>
      </div>
      <div class="main__tagline">
        <h2>
          Un rêve ? Une réalité ! <br>
          Faites de votre idée un succès.
        </h2>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  padding: 25px 5% 0 5%;
  li {
    list-style: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 900;
    font-size: 20px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__nav ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    li {
      margin: 0 40px;
      a.expandable {
        position: relative;
        &::after {
          content: url('/icons/Bottom-triangle.svg');
          position: absolute;
          bottom: 0;
          right: -22px;
        }
      }
    }
  }
  .btn {
    border: solid 2px #fff;
    display: block;
    padding: 10px 60px 10px 20px;
    position: relative;
    &::after {
      content: url('/icons/top-right-arrow.svg');
      position: absolute;
      top: 14px;
      right: 16px;
    }
  }
}

.section {
  background: url('/images/header-background.png') no-repeat border-box;
  background-size: cover;
  height: 1144px;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main__title {
  margin: auto;
  max-width: 60vw;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 120px;
    line-height: 132.5px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 1);
    position: relative;
    &::before {
      content: url('/images/papillon.png');
      position: absolute;
      top: 27%;
      left: 3%;
    }

    span {
      color: rgba(255, 255, 255, 0);
      -webkit-text-stroke: 2px rgba(255, 255, 255, 1);
    }
  }
}

.main__tagline {
  margin: 0 auto 190px auto;
  max-width: max-content;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    background-image: url('/icons/Butterfly-x2.png');
    background-repeat: no-repeat;
    background-size: contain;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    width: 35px;
    height: 35px;
  }
  &::before {
    content: '';
    position: absolute;
    background: #fff;
    width: 2px;
    height: 154px;
    transform: translateX(-50%);
    left: 50%;
    top: 150%;
  }
  h2 {
    text-align: center;
    color: #fff;
    font-weight: 300;
    text-transform: uppercase;

  }
}
</style>