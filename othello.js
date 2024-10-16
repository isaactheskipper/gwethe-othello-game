// Get the board elements from the DOM
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
const board3 = document.getElementById('board3');
const board4 = document.getElementById('board4');

// Function to create a board
function createBoard(board, isCenterDiscs = false) {
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

        // Set fixed center discs only for board1
        if (isCenterDiscs && (i === 27 || i === 28 || i === 35 || i === 36)) {
            const disc = document.createElement('div');
            disc.style.width = '80px';
            disc.style.height = '80px';
            disc.style.borderRadius = '50%';
            disc.style.position = 'absolute';
            disc.style.top = '50%';
            disc.style.left = '50%';
            disc.style.transform = 'translate(-50%, -50%)';

            // Alternate colors for discs
            disc.style.backgroundColor = (i === 27 || i === 36) ? 'white' : 'black';

             // Make grid square relative for absolute positioning of discs
            grid.appendChild(disc); // Add disc to the grid square
        }

        board.appendChild(grid); // Add grid square to the board
    }
}

// Create the boards
createBoard(board1, true); // Only board1 has center discs
createBoard(board2);        // Other boards are empty
createBoard(board3);
createBoard(board4);
