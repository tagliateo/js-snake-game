// Define HTML elements

const board = document.getElementById("game-board");

//define game vars
let snake = [{ x: 10, y: 10 }];
let food = generateFood();

// draw game map, snake, food

function draw() {
	board.innerHTML = "";
	drawSnake();
}

//draw the snake

function drawSnake() {
	snake.forEach((segment) => {
		const snakeElement = createGameElement("div", "snake");
		setPosition(snakeElement, segment);
		board.appendChild(snakeElement);
	});
}

// creating a snake or food cube/div

function createGameElement(tag, className) {
	const element = document.createElement(tag);
	element.className = className;
	return element;
}

// set position of the fucking snake or the fucking fontLanguageOverride:

function setPosition(element, position) {
	element.style.gridColumn = position.x;
	element.style.gridRow = position.y;
}

//test draw function name(params) {

// draw();

function drawFood() {
	const foodElement = createGameElement("div", "food");
	setPosition(foodElement, food);
	board.appendChild(foodElement);
}

function generateFood() {
	//left off on min 41:43 https://www.youtube.com/watch?v=uyhzCBEGaBY
}
