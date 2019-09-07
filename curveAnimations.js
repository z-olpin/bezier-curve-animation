const ao = e => {
  const rand = `${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}, ${Math.random().toFixed(2)}`
  rand.split(', ').map((e, i) => document.getElementById(`point_${1 + i}`).innerHTML = `${e}`)
  const ball1 = document.getElementById("ball1")
  const ball2 = document.getElementById("ball2")
  const ball3 = document.getElementById("ball3")
  const ball4 = document.getElementById("ball4")
  const balls = [ball1, ball2, ball3, ball4]
  balls.forEach(element => {
    element.style['animation-play-state'] = 'paused'
    element.style['animation-play-state'] = 'running'
    element.style['animation-timing-function'] = `cubic-bezier(${rand})`
  })
}

const butt = document.getElementById("butt")
butt.addEventListener('click', ao)