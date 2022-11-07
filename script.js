// var options = {
//   animate: true,
//   patternWidth: 100,
//   patternHeight: 100,
//   grainOpacity: 0.05,
//   grainDensity: 1,
//   grainWidth: 1,
//   grainHeight: 1,
// }

// grained('#grained', options)

const overlay = document.querySelector('.overlay')
// const burger = document.querySelector('.burger')

// gsap.registerPlugin(ScrollTrigger)

let t1 = gsap.timeline()
let t2 = gsap.timeline()
let t3 = gsap.timeline()

// t1.to('.overlay', { delay: 1.4, duration: 5, top: 1000 })

t1

  .to('.overlay', {
    delay: 1.4,
    duration: 5,
    top: 100000,
    ease: Power2.easeInOut,
  })
  .to('.overlay', { display: 'none' }, 3)
  .to('.bar1', { x: 4 }, 2)
  .to('.bar2', { x: -4 }, 2)
  .fromTo('.headers', { y: 30 }, { y: 0, duration: 1, ease: 'power2.inOut' }, 2)
  .fromTo(
    '.headers',
    { opacity: 0 },
    { opacity: 1, duration: 0.7, ease: 'power2.inOut' },
    2
  )
  .fromTo(
    ['.availContainer', '.goldDot'],
    { y: 10, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.5, ease: 'power2.inOut' },
    2.5
  )
  .to('.rotate', { transform: 'translateY(-100%)', duration: 0.3 }, 5)
  .to('.rotate', { delay: 3.5, transform: 'translateY(-200%)', duration: 0.3 })
  .to('.rotate', { delay: 3.5, transform: 'translateY(-300%)', duration: 0.3 })
  .to('.rotate', { delay: 3.5, transform: 'translateY(-400%)', duration: 0.3 })
  .to('.rotate', { delay: 3.5, transform: 'translateY(-500%)', duration: 0.3 })
  .to('.rotate', { delay: 3.5, transform: 'translateY(-600%)', duration: 0.3 })
  .to(
    '.lineContainer',
    {
      duration: 0.4,
      '--translateX': '100%',
      ease: 'power4.Out',
    },
    2.7
  )
  .to('.lineContainer', { '--visibility': 'hidden' }, '>.1')

// should be done on scroll

const menu = document.querySelector('.nav')

menu.addEventListener('click', (e) => {
  console.log('hello')
  t2.to(
    '.cover',

    {
      backgroundImage: `radial-gradient(
    farthest-corner at 70% -100%,
    #13131300 0%,
    #131313 56%
  )`,
      duration: 0.5,
      ease: 'power3.Out',
    }
  )
})


t3.to('.goldSplash', { rotation: -360, duration: 80, repeat: -1, ease: 'none' }, 1)


var now = new Date()
console.log(now)