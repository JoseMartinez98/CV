import { createPinia,defineStore } from 'pinia'

export default createPinia()
export const useCounterStore = defineStore('counter', {
    state: () => ({ count: 0 }),
    actions: {
      increment() { this.count++ }
    }
  })
  