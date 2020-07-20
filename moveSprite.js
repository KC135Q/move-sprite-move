alert("Please move...")

let myGamePiece

function startGame() {
  myGamePiece = new component(30, 30, "./i/run-robot.png", 10, 120, "image")
  myGameArea.start()
}

document.body.onkeydown = function (e) {
  var keys = {
    37: "left",
    39: "right",
  }
  moveright()
}

var myGameArea = {
  canvas: document.getElementsByTagName("canvas")[0],
  start: function () {
    this.canvas.width = 600
    this.canvas.height = 450
    this.context = this.canvas.getContext("2d")
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.frameNo = 0
    this.interval = setInterval(updateGameArea, 20)
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  stop: function () {
    clearInterval(this.interval)
  },
}

function component(width, height, color, x, y, type) {
  this.type = type
  if (type == "image") {
    this.image = new Image()
    this.image.src = color
  }
  this.width = width
  this.height = height
  this.speedX = 0
  this.speedY = 0
  this.x = x
  this.y = y
  this.update = function () {
    ctx = myGameArea.context
    if (type == "image") {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    } else {
      ctx.fillStyle = color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  this.newPos = function () {
    this.x += this.speedX
    this.y += this.speedY
  }
}

function updateGameArea() {
  myGameArea.clear()
  myGamePiece.newPos()
  myGamePiece.update()
}

function moveup() {
  myGamePiece.speedY = -1
}

function movedown() {
  myGamePiece.speedY = 1
}

function moveleft() {
  myGamePiece.speedX = -1
}

function moveright() {
  myGamePiece.speedX = 1
}

function clearmove() {
  myGamePiece.speedX = 0
  myGamePiece.speedY = 0
}

startGame()
