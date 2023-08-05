<template>
  <div class="main-nav">
    <div class="first-nav">
      <img src="./resimler/image 1.png" alt="logo" />
      <div class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="search-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <input type="text" placeholder="Arama" class="search-input" />
      </div>
    </div>
    <div class="second-nav">
      <button class="login-button">Oturum Aç</button>
      <button class="create-blog">
        BLOGUNUZU <br />
        OLUŞTURUN
      </button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.search-icon {
  width: 2rem;
  stroke: #5f9ea0;
}
::placeholder {
  color: #5f9ea0;
  font-size: 1.4rem;
}
.search-input {
  border: none;
  padding: 0.3rem;
  outline: none;
}
.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 4rem;
  background-color: #fff;
  border-radius: 1.5rem;
  gap: 0.5rem;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  padding-left: 1rem;
}
.main-nav {
  margin-top: 3rem;
  margin-left: 8rem;
  margin-bottom: 3rem;
}
.first-nav {
  display: flex;
  align-items: center;
  gap: 7rem;
}
.second-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  margin-right: 8rem;
  gap: 3.5rem;
}
.login-button {
  display: inline-block;
  border: 1px solid #5f9ea0;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 1.8rem;
  padding-right: 1.8rem;
  background-color: #fff;
  border-radius: 1rem;
  color: #5f9ea0;
  font-weight: bold;
  cursor: pointer;
}
.login-button:hover {
  background-color: #5f9ea0;
  color: #fff;
  transition: 0.2s;
}
.create-blog {
  display: inline-block;
  border: 1px solid #5f9ea0;
  background-color: #5f9ea0;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 1rem;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.create-blog:hover {
  background-color: #fff;
  color: #5f9ea0;
  transition: 0.2s;
}
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
