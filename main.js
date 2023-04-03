let canvas = document.querySelector('#canvas')
console.log(canvas)

function draw() {
  let context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#FFFFFF";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let height = 200 * Math.cos(Math.PI / 6);

  context.beginPath();
  context.moveTo(100, 300);
  context.lineTo(300, 300);
  context.lineTo(200, 300 - height);
  context.closePath();

  // the outline
  context.lineWidth = 10;
  context.stroke();

  // the fill color
  //context.fillStyle = "#FFCC00";
  context.fill();
}

draw()

let numberT
let numberL
let numberR

let inputN = document.querySelector('#input')
inputN.addEventListener("input", initTop)

let inputR = document.querySelector('#inputR')
inputR.addEventListener("input", initRight)

let inputL = document.querySelector('#inputL')
inputL.addEventListener("input", initLeft)

function initTop(e) {
  let topN = document.querySelector('#top')
  numberT  = e.target.value
  topN.textContent = numberT
  if (numberR) {
    console.log('also right')
    topAndRight()
    return
  }
  else if (numberL) {
    console.log('also left')
    topAndLeft()
    return
  }
  return numberT
}

function initRight(e) {
  let rightN = document.querySelector('#right')
  numberR = e.target.value
  rightN.textContent = numberR
  
  if (numberT) {
    console.log('also top')
    topAndRight()
  }
  else if (numberL) {
    console.log('also left')
    leftAndRight()
  }

  return numberR
}

function initLeft(e) {
  let leftN = document.querySelector('#left')
  numberL = e.target.value
  leftN.textContent = numberL
  
  if (numberT) {
    console.log('also top')
    topAndLeft()
  }
  else if (numberR) {
    console.log('also right')
    leftAndRight()
  }

  return numberL
}

function topAndRight() {
  // bottom left number is topth root of right
  numberL = Math.pow(numberR, 1 / numberT)
  let leftN = document.querySelector('#left')
  leftN.style.color = 'red'
  leftN.textContent = numberL

}

function topAndLeft() {
  numberR = Math.pow(numberL, numberT)
  let rightN = document.querySelector('#right')
  rightN.style.color = 'red'
  rightN.textContent = numberR
}

function leftAndRight() {
  numberT = Math.log(numberR) / Math.log(numberL)
  let topN = document.querySelector('#top')
  topN.style.color = 'red'
  topN.textContent = numberT
}
