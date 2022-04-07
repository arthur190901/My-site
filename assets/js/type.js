const textDisplay = document.getElementById('text')
const phrases = ['Привет, меня зовут Артур.', 'Я люблю писать код!', 'Я очень рад видеть здесь именно тебя']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop() {
  isEnd = true
  textDisplay.innerHTML = currentPhrase.join('')
  if(i < phrases.length) {

    if(!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
    }

    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
    }

    if(j == phrases[i].length) {
      isDeleting = true
      isEnd = true
    }

    if(isDeleting & j === 0) {
      currentPhrase = []
      isDeleting = false
      i++
      if(i == phrases.length) {
        i = 0
      }
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50
  const normalSpeed = Math.random() * (300 - 200) + 200
  const time = isEnd ? 220 : isDeleting ? spedUp : normalSpeed
  setTimeout(loop, time)
}

loop() 