import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.data('state', () => ({
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen
  }
}))

Alpine.start()