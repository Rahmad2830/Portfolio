document.addEventListener("alpine:init", () => {
  Alpine.data("state", () => ({
    isOpen: false,
    scrolled: false,
    init() {
      window.addEventListener("scroll", () =>{
        this.scrolled = window.scrollY > 100
      })
    },
    toggle() {
      this.isOpen = !this.isOpen
    },
    close() {
      this.isOpen = false
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
  Alpine.data("infiniteScroll", () => ({
    list: [
      {
        id: 1,
        name: "Javascript",
        image: "img/JavaScript.svg"
      },
      {
        id: 2,
        name: "HTML",
        image: "img/HTML5.svg"
      },
      {
        id: 3,
        name: "CSS",
        image: "img/CSS3.svg"
      },
      {
        id: 4,
        name: "Tailwind",
        image: "img/TailwindCSS.svg"
      },
      {
        id: 5,
        name: "Bootstrap",
        image: "img/Bootstrap.svg"
      },
      {
        id: 6,
        name: "Flask",
        image: "img/Flask.svg"
      },
      {
        id: 7,
        name: "Hugo",
        image: "img/Hugo.svg"
      },
      {
        id: 8,
        name: "Alpine.js",
        image: "img/Alpine.js.svg"
      }
    ],
    init() {
      const scroller = document.querySelector(".scroller")
      const scrollerInner = document.querySelector(".scroller__inner")
      
      const clone = scrollerInner.cloneNode(true)
      const clone2 = scrollerInner.cloneNode(true)
      
      scroller.appendChild(clone)
      scroller.appendChild(clone2)
    }
  }))
  Alpine.data("project", () => ({
    list: [
      {
        id: 1,
        title: "Rental Camera Service",
        stack: [
          {
            fm: "Alpine.js",
            fmImage: "img/Alpine.js.svg"
          },
          {
            fm: "Tailwind CSS",
            fmImage: "img/TailwindCSS.svg"
          },
        ],
        image: "img/sewaKamera.webp",
        description: "Landing page for rental camera service via Whatsapp",
        link: "https://landing-sewa-kamera.vercel.app"
      },
      {
        id: 2,
        title: "Mini Donut Shop",
        stack: [
          {
            fm: "Alpine.js",
            fmImage: "img/Alpine.js.svg"
          },
          {
            fm: "Tailwind CSS",
            fmImage: "img/TailwindCSS.svg"
          },
        ],
        image: "img/tokoDonat.webp",
        description: "Landing page for a donut shop checkout via Whatsapp",
        link: "https://donut-ecru.netlify.app"
      },
    ]
  }))
})