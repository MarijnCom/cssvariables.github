var root = document.querySelector(':root')
var rootStyle = getComputedStyle(root)
var red = rootStyle.getPropertyValue('--red2')
console.log(red)
root.style.setProperty('--red2','green')

var item = document.querySelector('.leer')
item.style.setProperty('--yellow2','orange')
