    // number of rows and columns: 16 x 16 board
    // can implement a function where user input is taken, then user-desired drawing board can be made
let num;

    // creates board in grid format instead of using tables
function createGameUsingGrid(num = 16) {
        // create variable for the whole drawing board. This is where the squares will be inserted
    const board = document.querySelector("[class~='board-grid']");
        // initialize variable so CSS can make the grid using grid-template-columns
    let numColumnsCss = '';
        // we need to send it as string so CSS can read it for the property, so we send
            // string of '1fr ' repeated the amount of times the user defined
    for (let i = 0; i < num; i ++) {
        numColumnsCss += '1fr ';
    }
        // we have our string variable ready and let CSS make the grid by setting the property
    board.style.setProperty("--board-columns", numColumnsCss);
        // obv can do num*num instead of nested loop if preferred
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            const div = document.createElement(`square`)
                // squares are being added row by row, letting the defined number of columns in CSS work
            board.appendChild(div);
                // class name needed to allow EventListener to listen for entire grid
            div.className = 'square';
                // id needed to we can fill in the square appropriately when user clicks it
            div.id = `square-${i}-${j}`;
        }
    }
}

    // board is created and user can begin drawing
function draw(){
        // selects all cells with class=cell
    const elements = document.querySelectorAll("[class~='square']");
        // event listener will be added to each element from elements (representing one cell from the board)
    elements.forEach((element) => {
        element.addEventListener("click", () => {
            removeEventListener("click", draw);
                // if user clicks that cell, we send to a function that will mark the cell
            markCell(element.id);
        })
    })
}

    // separate function to mark the cell after user clicks
    // made this separate because it gives us the ability to change colors, patterns, etc. (possibly
        // taking another input
function markCell(cellID) {
    let markedCell = document.getElementById(cellID);
    markedCell.style.background = "black";
}

    // function to clear entire board if user desires
function resetBoard() {
    let allSquares = document.querySelectorAll('square');
    allSquares.forEach(square => square.style.background = "white");
}


createGameUsingGrid(num);
draw();