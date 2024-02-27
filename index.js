//HTML CONTAINERS
const startScreenContainer = document.getElementById("initial-screen");
const gameScreenContainer = document.getElementById("game-screen");
const instructionsScreenContainer = document.getElementById(
  "instructions-screen"
);
const transitionScreenContainer = document.getElementById("transition-screen");
const gameEndScreenContainer = document.getElementById("end-screen");
const playerInfoContainer = document.getElementById("player-info");
const room1Container = document.getElementById("room1");
const room2Container = document.getElementById("room2");
const room3Container = document.getElementById("room3");

//BUTTONS
const startBtn = document.getElementById("start-btn");
const instructBtn = document.getElementById("instructions-btn");
const roomBtn1 = document.getElementById("room1-btn");
const roomBtn2 = document.getElementById("room2-btn");
const roomBtn3 = document.getElementById("room3-btn");
const exitLevelButtons = document.querySelectorAll(".exit-room-btn");

//CLASSES
class Game {
  constructor() {
    this.IsGameOver = false;
    this.rooms = [];
    console.log(this);
  }
  startGame() {
    startScreenContainer.classList.remove("show");
    gameScreenContainer.classList.add("show");
    transitionScreenContainer.classList.add("show");
    playerInfoContainer.classList.add("show");
  }
  gotToRoomOne() {
    prepareRoom1();
    room1Container.classList.add("show");
    transitionScreenContainer.classList.remove("show");
  }
  gotToRoomTwo() {
    room2Container.classList.add("show");
    transitionScreenContainer.classList.remove("show");
  }
  gotToRoomThree() {
    room3Container.classList.add("show");
    transitionScreenContainer.classList.remove("show");
  }
}

class Room {
  constructor(name, totalDoors) {
    this.name = name;
    this.doors = [];
    this.totalDoors = totalDoors;
  }
}

class Door {
  constructor(name) {
    this.name = name;
    this.randomizeDoors();
  }
  randomizeDoors() {
    let value = Math.random();
    if (value < 0.5) {
      this.isGoodDoor = true;
      this.item = new Item();
    } else {
      this.isGoodDoor = false;
    }
  }
}

class Item {
  constructor() {
    this.randomizeItem();
  }
  randomizeItem() {
    let bottle = { value: 3, imageUrl: "../objbottle.png" };
    let candle = { value: 1, imageUrl: "../objcandle.png" };
    let wrench = { value: 2, imageUrl: "../objchave.png" };
    let doll = { value: 7, imageUrl: "../objdoll.png" };
    let gramophone = { value: 6, imageUrl: "../objgramophone.png" };
    let phone = { value: 5, imageUrl: "../objphone.png" };
    let picture = { value: 8, imageUrl: "../objpicture.png" };

    let objArr = [];
    objArr.push(bottle, candle, wrench, doll, gramophone, phone, picture);

    let randomObject = Math.floor(Math.random() * 7);
    let choosenObject = objArr[randomObject];
    this.value = choosenObject.value;
    this.imageUrl = choosenObject.imageUrl;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 5;
  }
}

let game = new Game();

//EVENT LISTENERS
startBtn.addEventListener("click", game.startGame);
instructBtn.addEventListener("click", goToInstructions);
roomBtn1.addEventListener("click", game.gotToRoomOne);
roomBtn2.addEventListener("click", game.gotToRoomTwo);
roomBtn3.addEventListener("click", game.gotToRoomThree);
exitLevelButtons.forEach((btn) =>
  btn.addEventListener("click", goBackToTransitionScreen)
);

//FUNCTIONS
function goToInstructions() {
  startScreenContainer.classList.remove("show");
  instructionsScreenContainer.classList.add("show");
}

function goBackToTransitionScreen() {
  room1Container.classList.remove("show");
  room2Container.classList.remove("show");
  room3Container.classList.remove("show");
  transitionScreenContainer.classList.add("show");
}

function prepareRoom1() {
  let room1 = new Room("Room1", 4);
  let door1 = new Door("Door1");
  let door2 = new Door("Door2");
  let door3 = new Door("Door3");
  let door4 = new Door("Door4");
  room1.doors.push(door1);
  room1.doors.push(door2);
  room1.doors.push(door3);
  room1.doors.push(door4);
  game.rooms.push(room1);
  console.log(game.rooms);
}
