const overlay = document.querySelector('.overlay')
// const burger = document.querySelector('.burger')

let t1 = gsap.timeline()

// t1.to('.overlay', { delay: 1.4, duration: 5, top: 1000 })

t1.to('.overlay', {
  delay: 1.4,
  duration: 5,
  top: 100000,
  ease: Power2.easeInOut,
})
  .to('.bar1', { x: -4 }, 2)
  .to('.bar2', { x: 4 }, 2)
  //   .from('.headers', { y: 50 }, 2)
  //   .from('.headers', { opacity:0, y: 30 })
  //   .to('.headers', { duration: 1, y: 0 }, 2)
  //   .to('.headers', { opacity:1, duration: .7 }, 2)
  .fromTo('.headers', { y: 30 }, { y: 0, duration: 1 , ease: "power2.inOut"}, 2)
  .fromTo('.headers', { opacity:0 }, { opacity:1, duration: .7, ease: "power2.inOut" }, 2)

// .to(burger, { duration: 1, top: 1000, ease: Power2.easeInOut }, 2)
