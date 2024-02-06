<template>
  <header>
    <nav class="nav">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/characters">Catalog</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.router-link-exact-active {
  color: rgb(61, 61, 252);
}

.nav {
  padding: 30px;
  background: rgb(255, 255, 255);
  ul {
    display: flex;
    gap: 20px;
  }
}
.container {
  margin: 0 auto;
  max-width: 800px;
}
</style>
