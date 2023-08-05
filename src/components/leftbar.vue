<template>
  <div class="left-bars">
    <div class="left-bar">
      <router-link to="/" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span>Ana Sayfa</span></router-link
      >
      <router-link to="/kategoriler" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span>Kategoriler</span></router-link
      >
      <router-link to="/yazarlar" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span>Yazarlar</span></router-link
      >
      <router-link to="" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span>Lorem</span></router-link
      >
      <router-link to="" class="button"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="button-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span>Lorem</span></router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.left-bars {
  width: 28rem;
  height: 95rem;
  background-color: #97bdbf;
}
.left-bar {
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
  gap: 10rem;
  padding-top: 12rem;
}
.button {
  font-size: 2.2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
}
.button-icon {
  width: 2.5rem;
}
span {
  text-transform: uppercase;
  letter-spacing: 0.3rem;
}
</style>
