<template>
  <Loader v-if="loadingSingle" />
  <div v-else class="character">
    <img class="character__ava" :src="`${currentCharacter?.image}`" />
    <ul>
      <li>Name: {{ currentCharacter?.name }}</li>
      <li>Gender: {{ currentCharacter?.gender }}</li>
      <li>Race: {{ currentCharacter?.species }}</li>
      <li>Location: {{ currentCharacter?.location.name }}</li>
      <li>Origin: {{ currentCharacter?.origin.name }}</li>

      <li>Status: {{ currentCharacter?.status }}</li>
      <li>Species: {{ currentCharacter?.species }}</li>
      <li>Type: {{ currentCharacter?.type || '-' }}</li>
      <li>Url: {{ currentCharacter?.url }}</li>
      <li>Created: {{ currentCharacter?.created }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/store/characters'
const route = useRoute()

const characterStore = useCharacterStore()
const { currentCharacter, loadingSingle } = storeToRefs(characterStore)
if (typeof route.params.id === 'string') {
  await characterStore.getCurrentCharacter(+route.params.id)
}

if (!currentCharacter.value) {
  throw createError({ statusCode: 404, statusMessage: 'Character not found' })
}
</script>

<style lang="scss" scoped>
.character {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background: white;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  &__ava {
    border-radius: 50%;
    height: 200px;
  }
}
</style>
