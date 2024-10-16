// Get the board elements from the DOM
const board1 = document.getElementById('board1');
const board2 = document.getElementById('board2');
const board3 = document.getElementById('board3')
const board4 = document.getElementById('board4')
// Function to create a board
function createBoard(board) {
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
        const grid = document.createElement('div'); // Changed 'board' to 'div'
        grid.style.border = 'solid';
        grid.style.height = '100px';
        grid.style.width = '100px';
        grid.setAttribute('id', 'grid-' + i); // Unique IDs for grid squares
        board.appendChild(grid);
    }
}

// Create both boards
createBoard(board1);
createBoard(board2);
createBoard(board3);
createBoard(board4);
