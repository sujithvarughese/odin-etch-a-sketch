

let game = document.getElementById("game-container");
let row = document.getElementsByClassName("row");
let square = document.getElementsByClassName("square");
const num = 16;

function createGame(num) {
    for (let i = 0; i < num; i++) {
            // create rows inside game-container, all with same class name
        let row = document.createElement('row');
        row.className = 'row';
        game.appendChild(row);
        for (let j = 0; j < num; j++) {
                // create individual square elements in each row
            let square = document.createElement('square');
            square.className = 'square';
            square.textContent = '[X]';
            row.appendChild(square);
        }
    }
}

createGame(num);