export default (Alpine) => {
  Alpine.data('state', () => ({
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen
    }
  }))
}