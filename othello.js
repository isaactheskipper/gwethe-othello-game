const board = document.getElementById('board');
board.style.backgroundColor = 'green';
board.style.display = 'grid';
board.style.gridTemplateColumns = 'repeat(8,100px)';
board.style.gridTemplateRows = 'repeat(8,100px)';
board.style.gap = '5px';
board.style.width = 'fit-content'
board.style.padding = '5px'
board.style.marginBottom='10px'
board.style.marginTop='10px'

document.body.appendChild(board);


//build a grid 8*8

for(let i = 0; i < 64; i++){
const grid = document.createElement('board');
grid.style.border = 'solid'
grid.style.height = '100px'
grid.style.width = '100px'
grid.setAttribute('id', 'grid-' + i)

board.appendChild(grid);}



const board2 = document.getElementById('board2');
board2.style.backgroundColor = 'green';
board2.style.display = 'grid';
board2.style.gridTemplateColumns = 'repeat(8,100px)';
board2.style.gridTemplateRows = 'repeat(8,100px)';
board2.style.gap = '5px';
board2.style.width = 'fit-content'
board2.style.padding = '5px'
board2.style.marginTop='10px'

document.body.appendChild(board2);


//build a grid 8*8

for(let i = 0; i < 64; i++){
const grid2 = document.createElement('board2');
grid2.style.border = 'solid'
grid2.style.height = '100px'
grid2.style.width = '100px'
grid2.setAttribute('id', 'grid-' + i)

board2.appendChild(grid2);}