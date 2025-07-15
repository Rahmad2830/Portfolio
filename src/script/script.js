export default (Alpine) => {
  Alpine.data('state', () => ({
    isOpen: false,
    toggle() {
      this.isOpen = !this.isOpen
    }
  }))
  Alpine.data("typing", () => ({
    fullText: "Developer",
    text: '',
    index: 0,
    init() {
      this.type()
    },
    type() {
      if(this.index < this.fullText.length) {
        this.text += this.fullText[this.index]
        this.index++
        setTimeout(() => this.type(), 150)
      } else {
        setTimeout(() => this.erase(), 2000)
      }
    },
    erase() {
      if(this.index > 0) {
        this.text = this.text.slice(0, -1)
        this.index--
        setTimeout(() => this.erase(), 150)
      } else {
        setTimeout(() => this.type(), 1000)
      }
    }
  }))
}