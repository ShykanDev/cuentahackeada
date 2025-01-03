import { defineStore } from 'pinia'

export const SystemValues = defineStore('SystemValues', {
  state: () => ({
    showPopupExit: false,
    href: '',
  }),
  getters: {
    getShowPopupExit: (state) => state.showPopupExit,
    getHref: (state) => state.href,
  },
  actions: {
    setShowPopupExit(value: boolean): void {
      this.showPopupExit = value
    },
    setHref(value: string): void {
      this.href = value
    },
    setPageToLeave(href: string, showPopupExit: boolean): void {
      this.href = href
      this.showPopupExit = showPopupExit
    },
  },
})
