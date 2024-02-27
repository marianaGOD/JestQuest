//CLASSES
class Game {
  constructor() {
    this.IsGameOver = false;
    this.currentRoom;
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
    prepareRoom2();
    room2Container.classList.add("show");
    transitionScreenContainer.classList.remove("show");
  }
  gotToRoomThree() {
    prepareRoom3();
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
let player = new Player("Jester");

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
startBtn.addEventListener("click", game.startGame);
const instructBtn = document.getElementById("instructions-btn");
instructBtn.addEventListener("click", goToInstructions);
const roomBtn1 = document.getElementById("room1-btn");
roomBtn1.addEventListener("click", game.gotToRoomOne);
const roomBtn2 = document.getElementById("room2-btn");
roomBtn2.addEventListener("click", game.gotToRoomTwo);
const roomBtn3 = document.getElementById("room3-btn");
roomBtn3.addEventListener("click", game.gotToRoomThree);
const exitLevelButtons = document.querySelectorAll(".exit-room-btn");
exitLevelButtons.forEach((btn) =>
  btn.addEventListener("click", goBackToTransitionScreen)
);
const room1Door1Btn = document.getElementById("room1-door1-btn");
room1Door1Btn.addEventListener("click", openRoomDoor1);
const room1Door2Btn = document.getElementById("room1-door2-btn");
room1Door2Btn.addEventListener("click", openRoomDoor2);
const room1Door3Btn = document.getElementById("room1-door3-btn");
room1Door3Btn.addEventListener("click", openRoomDoor3);
const room1Door4Btn = document.getElementById("room1-door4-btn");
room1Door4Btn.addEventListener("click", openRoomDoor4);
const room2Door1Btn = document.getElementById("room2-door1-btn");
room2Door1Btn.addEventListener("click", openRoomDoor1);
const room2Door2Btn = document.getElementById("room2-door2-btn");
room2Door2Btn.addEventListener("click", openRoomDoor2);
const room3Door1Btn = document.getElementById("room3-door1-btn");
room3Door1Btn.addEventListener("click", openRoomDoor1);
const room3Door2Btn = document.getElementById("room3-door2-btn");
room3Door2Btn.addEventListener("click", openRoomDoor2);
const room3Door3Btn = document.getElementById("room3-door3-btn");
room3Door3Btn.addEventListener("click", openRoomDoor3);
const room3Door4Btn = document.getElementById("room3-door4-btn");
room3Door4Btn.addEventListener("click", openRoomDoor4);
const room3Door5Btn = document.getElementById("room3-door5-btn");
room3Door5Btn.addEventListener("click", openRoomDoor5);
const room3Door6Btn = document.getElementById("room3-door6-btn");
room3Door6Btn.addEventListener("click", openRoomDoor6);
const room3Door7Btn = document.getElementById("room3-door7-btn");
room3Door7Btn.addEventListener("click", openRoomDoor7);


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
  game.currentRoom = null;
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
  game.currentRoom = room1;
  console.log(game.currentRoom);
}

function prepareRoom2() {
  let room2 = new Room("Room1", 2);
  let door1 = new Door("Door1");
  let door2 = new Door("Door2");
  room2.doors.push(door1);
  room2.doors.push(door2);
  game.currentRoom = room2;
  console.log(game.currentRoom);
}

function prepareRoom3() {
  let room3 = new Room("Room1", 7);
  let door1 = new Door("Door1");
  let door2 = new Door("Door2");
  let door3 = new Door("Door3");
  let door4 = new Door("Door4");
  let door5 = new Door("Door5");
  let door6 = new Door("Door6");
  let door7 = new Door("Door7");
  room3.doors.push(door1);
  room3.doors.push(door2);
  room3.doors.push(door3);
  room3.doors.push(door4);
  room3.doors.push(door5);
  room3.doors.push(door6);
  room3.doors.push(door7);
  game.currentRoom = room3;
  console.log(game.currentRoom);
}

function openRoomDoor1() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor2() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor3() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor4() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor5() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor6() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

function openRoomDoor7() {
  let isGoodDoor = game.currentRoom.isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  if (isGoodDoor) {
    player.score += doorItem.value;
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
  }
  console.log(player);
}

