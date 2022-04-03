function changeColor() {
  let hex_colors = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']

  let hexcode = '';

  for(let i=0; i < 6; i++) {
    let random_index = Math.floor(Math.random() * hex_colors.length)

    hexcode += hex_colors[random_index]
  }
  document.getElementById('hex-code').innerHTML = hexcode
  document.getElementsByTagName('body')[0].style.background = '#' + hexcode
}