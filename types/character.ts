export type Character = {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

type Location = {
  name: string
  url: string
}

type Origin = Location

export type CharactersResponse = {
  data: {
    results: Character[]
    info: { count: number; next: string; pages: number; prev: null | number }
  }
}

export type SingleCharacterResponse = {
  data: Character
}
