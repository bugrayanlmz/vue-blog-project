<template>
  <div>
    <div class="image-div">
      <img src="../components/resimler/main-1.png" alt="" class="main-image" />
    </div>
    <div class="main-table">
      <div class="table">
        <img
          src="../components/resimler/Rectangle 13.png"
          class="table-image"
          alt=""
        />
        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
      <div class="table">
        <img
          src="../components/resimler/Rectangle 14.png"
          class="table-image"
          alt=""
        />
        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
      <div class="table">
        <img
          src="../components/resimler/Rectangle 14.png"
          class="table-image"
          alt=""
        />
        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
      <div class="table">
        <img
          src="../components/resimler/Rectangle 13.png"
          class="table-image"
          alt=""
        />

        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
      <div class="table">
        <img
          src="../components/resimler/Rectangle 14.png"
          class="table-image"
          alt=""
        />
        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
      <div class="table">
        <img
          src="../components/resimler/Rectangle 14.png"
          class="table-image"
          alt=""
        />
        <div class="under-image-table">
          <button class="table-what">SPOR</button>
          <h2 class="table-header">What is lorem ipsum ?</h2>
          <p class="table-name">Bugra Yanilmaz</p>
          <p class="table-date">21.12.2022</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.main-image {
  height: 45rem;
  width: 151rem;
}
.image-div {
  height: 45rem;
  width: 151rem;
}
body {
  position: relative;
}
.main-table {
  width: 114rem;
  height: 65rem;
  background-color: #f5f5f5;
  position: absolute;
  right: 6rem;
  top: 60rem;
}
.main-table {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  gap: 5rem;
}
.under-image-table {
  display: flex;
  flex-direction: column;
  margin-left: 1.8rem;
  gap: 1.6rem;
}
.table {
  display: flex;
  flex-direction: column;
}
.table-image {
  width: 30rem;
}
.table-what {
  width: 9rem;
  padding: 0.6rem 1.5rem 0.6rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background-color: #97bdbf;
  color: #fff;
  font-weight: bold;
  box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
}
.table-header {
  font-size: 2.2rem;
  font-weight: bold;
}
.table-name {
  font-size: 1.2rem;
  font-weight: bold;
}
.table-date {
  font-size: 1.1rem;
}
</style>
