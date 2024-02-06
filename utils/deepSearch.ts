export function deepSearch(object: Record<string, unknown>, searchText = ''): Boolean {
  for (const key in object) {
    const value = object[key]

    if (typeof value === 'object') {
      if (deepSearch(value as Record<string, unknown>, searchText)) {
        return true
      }
    } else if (value?.toString().toLowerCase().includes(searchText.toLowerCase())) {
      return true
    }
  }
  return false
}
