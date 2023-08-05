<template>
  <div>
    <div class="image2-div">
      <img src="../components/resimler/main-2.png" alt="" class="main2-image" />
    </div>
    <div class="main2-all-table">
      <h1 class="main2-header">KATEGORILER</h1>
      <div class="main2-table">
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36.png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Egitim</h1>
        </div>
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36 (1).png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Spor</h1>
        </div>
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36 (2).png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Bilim</h1>
        </div>
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36 (3).png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Tarih</h1>
        </div>
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36 (4).png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Dunya</h1>
        </div>
        <div class="table2">
          <img
            src="../components/resimler/Rectangle 36 (5).png"
            class="table2-image"
            alt=""
          />
          <h1 class="table2-header">Moda</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main2-image {
  height: 45rem;
  width: 151rem;
}
.image2-div {
  height: 45rem;
  width: 151rem;
}
.main2-all-table {
  width: 115rem;
  height: 90rem;
  background-color: #f5f5f5;
  position: absolute;
  right: 5rem;
}
.main2-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8.5rem;
  margin-left: 1rem;
}
.table2-image {
  width: 32rem;
}
.main2-header {
  text-align: center;
  font-size: 4.5rem;
  margin-bottom: 9rem;
  margin-top: 7rem;
  color: #5f9ea0;
  text-shadow: 0px 8px 24px rgba(52, 52, 52, 0.5);
}
.table2-header {
  text-align: center;
  font-size: 3.5rem;
  color: #5f9ea0;
  font-weight: bold;
}
</style>
