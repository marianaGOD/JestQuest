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
    document.getElementById("player-score").innerText = player.score;
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
    this.isOpened = false
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
    let bottle = { value: 3, imageUrl: "images/objbottle.jpeg" };
    let candle = { value: 1, imageUrl: "images/objcandle.jpeg" };
    let wrench = { value: 2, imageUrl: "images/objchave.jpeg" };
    let doll = { value: 7, imageUrl: "images/objdoll.jpeg" };
    let gramophone = { value: 6, imageUrl: "images/objgramophone.jpeg" };
    let phone = { value: 5, imageUrl: "images/objphone.jpeg" };
    let picture = { value: 8, imageUrl: "images/objpicture.jpeg" };

    let objArr = [];
    objArr.push(bottle, candle, wrench, doll, gramophone, phone, picture);

    let randomObject = Math.floor(Math.random() * 7);
    let choosenObject = objArr[randomObject];
    this.value = choosenObject.value;
    this.imageUrl = choosenObject.imageUrl;
    console.log(this);
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
let mySound = new Audio("sound/backgroundMusic.mp3");
setTimeout(() => {
  mySound.play();
}, 3000);
mySound.volume = 0.2;
let hauntedHouseSound = new Audio("sound/haunted.mp3"); //https://www.youtube.com/watch?v=OWKFovmuoQs
hauntedHouseSound.volume = 0.1;
let booSound = new Audio("sound/boo.mp3");
booSound.volume = 1;

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
const endScreenVictory = document.getElementById("end-screen-victory");
const endScreenDefeat = document.getElementById("end-screen-defeat");

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
  mySound.pause();
  hauntedHouseSound.play();
  console.log(game.currentRoom);
}

function prepareRoom2() {
  let room2 = new Room("Room2", 2);
  let door1 = new Door("Door1");
  let door2 = new Door("Door2");
  room2.doors.push(door1);
  room2.doors.push(door2);
  game.currentRoom = room2;
  mySound.pause();
  hauntedHouseSound.play();
  console.log(game.currentRoom);
}

function prepareRoom3() {
  let room3 = new Room("Room3", 7);
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
  mySound.pause();
  hauntedHouseSound.play();
  console.log(game.currentRoom);
}

function openRoomDoor1() {
  let isGoodDoor = game.currentRoom.doors[0].isGoodDoor;
  let doorItem = game.currentRoom.doors[0].item;
  let isOpenedDoor = game.currentRoom.doors[0].isOpened
  if (isOpenedDoor === true) {
    return
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[0].isOpened = true;
  console.log(player);
}

function openRoomDoor2() {
  let isGoodDoor = game.currentRoom.doors[1].isGoodDoor;
  let doorItem = game.currentRoom.doors[1].item;
  let isOpenedDoor = game.currentRoom.doors[1].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[1].isOpened = true;
  console.log(player);
}

function openRoomDoor3() {
  let isGoodDoor = game.currentRoom.doors[2].isGoodDoor;
  let doorItem = game.currentRoom.doors[2].item;
  let isOpenedDoor = game.currentRoom.doors[2].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[2].isOpened = true;
  console.log(player);
}

function openRoomDoor4() {
  let isGoodDoor = game.currentRoom.doors[3].isGoodDoor;
  let doorItem = game.currentRoom.doors[3].item;
  let isOpenedDoor = game.currentRoom.doors[3].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[3].isOpened = true;
  console.log(player);
}

function openRoomDoor5() {
  let isGoodDoor = game.currentRoom.doors[4].isGoodDoor;
  let doorItem = game.currentRoom.doors[4].item;
  let isOpenedDoor = game.currentRoom.doors[4].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[4].isOpened = true;
  console.log(player);
}

function openRoomDoor6() {
  let isGoodDoor = game.currentRoom.doors[5].isGoodDoor;
  let doorItem = game.currentRoom.doors[5].item;
  let isOpenedDoor = game.currentRoom.doors[5].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[5].isOpened = true;
  console.log(player);
}

function openRoomDoor7() {
  let isGoodDoor = game.currentRoom.doors[6].isGoodDoor;
  let doorItem = game.currentRoom.doors[6].item;
  let isOpenedDoor = game.currentRoom.doors[6].isOpened;
  if (isOpenedDoor === true) {
    return;
  }
  if (isGoodDoor) {
    player.score += doorItem.value;
    showPopupGoodDoor(doorItem.imageUrl);
  } else {
    player.score -= Math.floor(Math.random() * (player.score - 1) + 1);
    showPopupBadDoor();
  }
  hauntedHouseSound.pause();
  endGame();
  game.currentRoom.doors[6].isOpened = true;
  console.log(player);
}

function showPopupGoodDoor(imageUrl) {
  document.getElementById("popup").classList.add("show");
  document.getElementById("item-found-img").src = imageUrl;
  document.getElementById("player-score").innerText = player.score;
}

function showPopupBadDoor() {
  let popup = document.getElementById("popup");
  popup.classList.add("show");
  popup.classList.add("bad-door-screen");
  document.getElementById("item-found-img").src = "images/doorbackground.jpeg";
  booSound.play();
  document.getElementById("player-score").innerText = player.score;
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");
  document.getElementById("popup").classList.remove("bad-door-screen");
}

function endGame() {
  if (player.score <= 0) {
    endScreenDefeat.classList.add("show");
    gameScreenContainer.classList.remove("show");
  } else if (player.score >= 13) {
    endScreenVictory.classList.add("show");
    gameScreenContainer.classList.remove("show");
  }
}

function restartGame() {
  game = new Game();
  player = new Player("Jester");
  mySound = new Audio("sound/backgroundMusic.mp3");
  setTimeout(() => {
    mySound.play();
  }, 3000);
  mySound.volume = 0.2;
  hauntedHouseSound = new Audio("sound/haunted.mp3"); //https://www.youtube.com/watch?v=OWKFovmuoQs
  hauntedHouseSound.volume = 0.1;
  booSound = new Audio("sound/boo.mp3");
  booSound.volume = 1;
  endScreenDefeat.classList.remove("show");
  endScreenVictory.classList.remove("show");
  gameScreenContainer.classList.remove("show");
  room1Container.classList.remove("show");
  room2Container.classList.remove("show");
  room3Container.classList.remove("show");
  startScreenContainer.classList.add("show");
  document.getElementById("popup").classList.remove("show");
}
