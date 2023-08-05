<template>
  <div class="navbar">
    <div class="navbar-left">
      <p class="navbar-text">Iletisim</p>
      <p class="navbar-text">bakirchain@bakircay.edu.tr</p>
    </div>
    <div class="navbar-right">
      <div class="navbar-right-text">
        <p class="navbar-text">Sosyal Medya</p>
        <p class="navbar-text">Hesaplari</p>
      </div>
      <div class="navbar-image">
        <img src="../components/resimler/Vector.png" alt="" />
        <img src="../components/resimler/Subtract.png" alt="" />
        <img src="../components/resimler/Subtract (1).png" alt="" />
        <img src="../components/resimler/Subtract (2).png" alt="" />
        <img src="../components/resimler/Subtract (3).png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  width: 151rem;
  height: 28rem;
  background-color: #5f9ea0;
  display: flex;
  justify-content: space-between;
}
.navbar-left {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-top: 12rem;
  margin-left: 4rem;
}
.navbar-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 9rem;
  margin-right: 4rem;
}
.navbar-text {
  font-size: 2rem;
  font-weight: bold;
  color: #fff7f7;
}
.navbar-image {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
}
.navbar-right-text {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.8rem;
}
.navbar-image img {
  color: #fff7f7;
  width: 4rem;
}
</style>
