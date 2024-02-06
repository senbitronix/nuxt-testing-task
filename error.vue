<template>
  <div class="card">
    <h1 class="mt-7 text-7xl font-bold">{{ error.statusCode }}</h1>
    <p class="mt-7 text-6xl">Ooops.</p>
    <p class="mt-7">{{ error.message }}</p>
    <button class="btn my-7" @click="handleError">Go Home...</button>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<style ;ang="scss" scoped>
.card {
  width: 200px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  margin: 0 auto;
  background-color: rgb(160, 160, 249);
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
