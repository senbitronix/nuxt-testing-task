<template>
  <div class="catalog">
    <h1 class="catalog__title mt-10">Catalog</h1>
    <section class="catalog__management mt-30">
      <button class="btn" v-if="mode === 'cards'" @click="mode = 'list'">Change to list</button>
      <button class="btn" v-if="mode === 'list'" @click="mode = 'cards'">Change to cards</button>
      <label class="search-input-label">
        Search:
        <input class="search-input" v-model="search" type="text" />
      </label>
    </section>

    <div class="catalog__count">Count: {{ filteredCharacters.length }}</div>

    <Loader v-if="loading" />
    <Characters v-else class="mt-10" :mode="mode" :characters="filteredCharacters" />
    <div class="catalog__pagination mt-20">
      <a
        @click.prevent="page = p"
        href="#"
        class="catalog__page"
        v-for="p of viewedPages"
        :class="{ catalog__page_active: page === p }"
        :key="p"
        >{{ p }}</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/store/characters'

const characterStore = useCharacterStore()
const { characters, viewedPages, page, loading } = storeToRefs(characterStore)
characterStore.getCharacters()

const mode = ref<'cards' | 'list'>('list')
const search = ref<string>('')

const filteredCharacters = computed(() => {
  if (!search.value) {
    return characters.value
  }
  return characters.value.filter((character) => deepSearch(character, search.value))
})

watch(page, async () => {
  await characterStore.getCharacters()
  search.value = ''
})
</script>

<style lang="scss" scoped>
.catalog {
  padding: 10px;
  &__title {
    text-align: center;
  }
  &__management {
    display: flex;
    justify-content: space-between;
  }

  .search-input {
    width: 400px;
  }

  &__count {
    margin-top: 5px;
    font-size: 15px;
    text-align: right;
  }

  &__pagination {
    display: flex;
    flex-wrap: wrap;
  }

  &__page {
    padding: 5px;
    &_active {
      color: blue;
      font-size: 18px;
    }
  }
}
</style>
