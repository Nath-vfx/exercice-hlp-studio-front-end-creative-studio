<script setup lang="ts">

</script>

<template>
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
</style>