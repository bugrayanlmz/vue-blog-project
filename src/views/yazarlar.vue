<template>
  <div>
    <div class="image3-div">
      <img src="../components/resimler/main-3.png" alt="" class="main3-image" />
    </div>
    <div class="yazarlar">
      <h1 class="yazarlar-header">YAZARLAR</h1>
      <div class="yazarlar-boxes">
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16.png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Alp Altan</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (1).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Samed Karakus</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (2).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Sena Iriz</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (3).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Fatmanur Ozcetin</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (4).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Alper Mercan</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (5).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Silan Ekin</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (6).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Elif Turan</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
        <div class="yazarlar-box">
          <img
            src="../components/resimler/Ellipse 16 (7).png"
            alt=""
            class="yazarlar-img"
          />
          <p class="yazarlar-name">Ertugrul Can</p>
          <p class="yazarlar-information">1825 uye, 12 yazi</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main3-image {
  height: 45rem;
  width: 151rem;
}
.image3-div {
  height: 45rem;
  width: 151rem;
}
.yazarlar {
  background-color: #f5f5f5;
  position: absolute;
  top: 65rem;
  right: 7rem;
  width: 110rem;
  height: 80rem;
}
.yazarlar-header {
  text-align: center;
  font-size: 4.5rem;
  margin-bottom: 6rem;
  color: #5f9ea0;
  text-shadow: 0px 8px 24px rgba(52, 52, 52, 0.5);
}
.yazarlar-boxes {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  row-gap: 6rem;
}
.yazarlar-img {
  width: 20rem;
}
.yazarlar-name {
  font-size: 2rem;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #5f9ea0;
}
.yazarlar-information {
  font-size: 1.3rem;
  font-weight: bold;
}
.yazarlar-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
