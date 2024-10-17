// Get the board elements from the DOM
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
const board3 = document.getElementById('board3');
const board4 = document.getElementById('board4');

// Function to create a board with specific black and white disc positions
function createBoard(board, whitePositions, blackPositions, greyPositions) {
    board.style.backgroundColor = 'green';
    board.style.display = 'grid';
    board.style.gridTemplateColumns = 'repeat(8, 100px)';
    board.style.gridTemplateRows = 'repeat(8, 100px)';
    board.style.gap = '5px';
    board.style.width = 'fit-content';
    board.style.padding = '5px';
    board.style.marginTop = '10px';

    // Build a grid 8x8
    for (let i = 0; i < 64; i++) {
        const grid = document.createElement('div'); // Create a grid square
        grid.style.border = 'solid';
        grid.style.height = '100px';
        grid.style.width = '100px';
        grid.style.position = 'relative';
        grid.setAttribute('id', 'grid-' + i); // Unique IDs for grid squares

        // Set a white disc if position matches
        if (whitePositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'white';
            grid.appendChild(disc); // Add disc to the grid square
        }

        // Set a black disc if position matches
        if (blackPositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'black';
            grid.appendChild(disc); // Add disc to the grid square
        }

        // Set a black disc if position matches
        if (greyPositions.includes(i)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';
            disc.style.backgroundColor = 'grey';
            grid.appendChild(disc); // Add disc to the grid square
        }


        board.appendChild(grid); // Add grid square to the board
    }
}

// Create the boards with specific black and white disc positions
createBoard(board1, [27, 36], [28, 35, 43, 44], [46]); // Board1: White on 27, 36, Black on others
createBoard(board2, [10, 18, 26], [11, 19, 27],[49]); // Board2: Alternating white and black
createBoard(board3, [0, 56], [7, 63],[0]);           // Board3: White in top-left and bottom-left, Black in top-right and bottom-right
createBoard(board4, [30, 32, 40], [31, 39, 41],[0]); // Board4: White and black discs alternating in middle row
