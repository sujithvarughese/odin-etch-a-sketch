    // number of rows and columns: 16 x 16 board
    // can implement a function where user input is taken, then user-desired drawing board can be made
const num = 16;

    // takes number as input and sets that to column and rows, then will create drawing board
function createGameUsingTable(num) {
        // create variable for the whole drawing board. This is where we will be inserting each row
    let board = document.getElementById("board");
    for (let i = 0, row; i < num; i++) {
            // inserts row into board(table)
        row = board.insertRow();
            // rows will have same className
        row.className = 'rows';
        for (let j = 0, cell; j < num; j++) {
                // insert cell for all columns per row
            cell = row.insertCell();
                // cells need class name for eventListener later to actually interact and draw
            cell.className = "cell"
                // each cell id is unique "row-col"- will be used to fill in one cell at a time
            cell.id = `${i}-${j}`;
        }
    }
}

    // board is created and user can begin drawing
function draw(){
        // selects all cells with class=cell
    const elements = document.querySelectorAll("[class~='cell']");
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

createGameUsingTable(num);
draw();