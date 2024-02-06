import { defineStore } from 'pinia'
import { useApi } from '~/composables/useApi'
import type { Character, CharactersResponse, SingleCharacterResponse } from '~/types/character'

export const useCharacterStore = defineStore('characters', () => {
  const api = useApi()
  const characters = ref<Array<Character>>([])
  const currentCharacter = ref<Character>()
  const loading = ref<boolean>(true)
  const loadingSingle = ref<boolean>(true)
  const count = ref<number | null>(null)
  const page = ref<number | null>(1)
  const viewedPages = computed(() => {
    return Math.ceil((count.value || 1) / 20)
  })

  async function getCharacters(): Promise<void> {
    try {
      loading.value = true
      const {
        data: { results, info }
      } = await api.get<CharactersResponse['data']>(`/character`, {
        params: { page: page.value }
      })
      characters.value = results
      count.value = info.count
    } catch (error) {
      characters.value = []
      console.log(error)
    } finally {
      loading.value = false
    }
  }

  async function getCurrentCharacter(characterID: number): Promise<void> {
    try {
      loadingSingle.value = true
      const response: SingleCharacterResponse = await api.get(`/character/${characterID}`)
      currentCharacter.value = response.data
    } catch (error) {
      console.log(error)
    } finally {
      loadingSingle.value = false
    }
  }

  return {
    characters,
    currentCharacter,
    loading,
    loadingSingle,
    count,
    page,
    viewedPages,
    getCharacters,
    getCurrentCharacter
  }
})
