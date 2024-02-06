<template>
  <div v-if="!characters.length">Персонажи не найдены</div>
  <main class="characters">
    <ul v-if="mode === 'list'" class="characters-list">
      <li v-for="character of characters" class="characters-list-item" :key="character.id">
        <NuxtLink class="characters-list-item__link link" :to="`characters/${character.id}`">
          <div class="ava characters-list-item__ava">
            <img :src="character.image" alt="" />
          </div>
          <div class="characters-list-item__main">
            <div class="characters-list-item__info">Name: {{ character.name }}</div>
            <div class="characters-list-item__info">Gender: {{ character.gender }}</div>
            <div class="characters-list-item__info">Race: {{ character.species }}</div>
          </div>
          <div class="characters-list-item__status">{{ character.status }}</div>
        </NuxtLink>
      </li>
    </ul>
    <div v-if="mode === 'cards'" class="characters-cards">
      <NuxtLink
        v-for="character of characters"
        class="characters-cards-item link"
        :key="character.id"
        :to="`characters/${character.id}`"
      >
        <div class="ava characters-cards-item__ava">
          <img :src="character.image" alt="" />
        </div>
        <div class="characters-cards-item__info">Name: {{ character.name }}</div>
        <div class="characters-cards-item__info">Gender: {{ character.gender }}</div>
        <div class="characters-cards-item__info">Race: {{ character.species }}</div>
        <div class="fg-1"></div>

        <div class="characters-cards-item__status">{{ character.status }}</div>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Character } from '~/types/character'

const { characters, mode } = defineProps<{
  characters: Character[]
  mode: 'cards' | 'list'
}>()
</script>

<style lang="scss" scoped>
.ava {
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
  }
}
.characters-list {
  &-item {
    margin-top: 5px;
    background-color: white;
    padding: 5px 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
    &__link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }
    &__ava {
      width: 50px;
      height: 50px;
    }
    &__status {
      flex-grow: 1;
      text-align: right;
    }
  }
}
.characters-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 10px;
  &-item {
    min-height: 200px;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__ava {
      width: 100px;
      height: 100px;
    }
    &__info {
      margin-top: 5px;
      text-align: center;
    }
    &__status {
      margin-top: 20px;
      text-align: right;
    }
  }
}
</style>
