<script setup lang="ts">

</script>

<template>
  <footer>
    <div class="main-footer">
      <div class="slogan">
        <div class="logo">
          <img src="/icons/HLP.png" alt="" srcset="/icons/HLP-retina.png 2x">
        </div>
        <div class="slogan-text">
          <h2>
            Créons ensemble une communication flexible & durable pour votre entreprise
          </h2>
        </div>
      </div>
      <div class="navigation">
        <h4>Notre vision</h4>
        <ul>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
        </ul>
      </div>
      <div class="navigation">
        <h4>Services</h4>
        <ul>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
        </ul>
      </div>
      <div class="navigation">
        <h4>Réalisations</h4>
        <ul>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
        </ul>
      </div>
      <div class="navigation">
        <h4>Atelier de production</h4>
        <ul>
          <li><a href="">Lorem ipsum</a></li>
          <li><a href="">Lorem ipsum</a></li>
        </ul>
      </div>
      <div class="contact">
        <button>Contact</button>
        <ul>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Pinterest</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-legals">
      <ul>
        <li><a href="#">Mentions légales</a></li>
        <li><a href="#"></a>CGV</li>
        <li><a href="#"></a>CGU</li>
      </ul>
      <p>© 2023 © 2023 HLP Studio - Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: linear-gradient(90deg, rgba(181,59,142,1) 0%, rgba(121,190,194,1) 100%);
  color: white;
  padding-bottom: 14px;
  .footer-legals {
    background-color: #252525;
    display: flex;
    padding: 40px 8.33%;
    border-top: #C5C5C5 solid 1px;
    justify-content: space-between;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    ul {
      display: flex;
      li {
        margin-right: 12px;
      }
    }
  }
  .main-footer {
    background-color: #252525;
    display: grid;
    width: 100vw;
    grid-template-columns: repeat(6, max-content);
    column-gap: 6.33%;
    padding: 0 8.33% 0 8.33%;
    .slogan {
      color: #79BEC2;
      max-width: 306px;
      position: relative;
      &::after {
        content: '';
        width: 21px;
        height: 21px;
        background: #79BEC2;
        border-radius: 21px;
        position: absolute;
        bottom: 178px;
        right: 64px;
      }
      &-text {
        h2 {
          font-size: 28px;
          font-family: 'Bricolage Grotesque', sans-serif;
        }
      }
    }
    .contact {
      border-left: #C5C5C5 1px solid;
      padding-left: 60px;
      button {
        border: solid 2px #79BEC2;
        background: none;
        display: block;
        position: relative;
        color: #79BEC2;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        padding: 10px 60px 10px 20px;
        margin-bottom: 60px;
        &::after {
          content: url('../icons/right-arrow-blue.svg');
          position: absolute;
          transform: scale(.75) translateY(-50%);
          top:48%;
          right: 20px;
        }
      }
      li {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin: 40px 0;
      }
    }

    .slogan, .navigation, .contact {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .navigation {
      li {
        margin-bottom: 12px
      }
      a {
        text-decoration: none;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 14px;
      }
      h4 {
        font-family: 'Bricolage Grotesque', sans-serif;
        font-size: 18px;
        font-weight: 800;
        margin-bottom: 38px;
      }
    }
  }
}

</style>