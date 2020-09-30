function play(e) {
  let sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!sound) return
  sound.currentTime = 0
  sound.play()
  key.classList.add("playing")
}

function removePlaying(e) {
  if (e.propertyName !== "transform") return

  this.classList.remove("playing")
}

const keys = document.querySelectorAll(".key")
keys.forEach((key) => key.addEventListener("transitionend", removePlaying))

const beat = (key) => {
  console.log(key)
  let sound = document.querySelector(`audio[data-key="${key}"]`)
  if (!sound) return
  sound.currentTime = 0
  sound.play()
}

window.addEventListener("keydown", play)
