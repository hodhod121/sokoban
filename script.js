/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
  Wall: 'tile-wall',
  Space: 'tile-space',
  Goal: 'tile-goal',
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
  Character: 'entity-player',
  Block: 'entity-block',
  BlockDone: 'entity-block-goal',
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
  width: 19,
  height: 16,
  mapGrid: [
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      ['B'],
      [' '],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      ['B'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      ['W'],
      [' '],
      [' '],
      ['B'],
      [' '],
      ['B'],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      ['W'],
      ['W'],
      ['W'],
      [' '],
      ['W'],
      [' '],
      ['W'],
      ['W'],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
    ],
    [
      ['W'],
      [' '],
      [' '],
      [' '],
      ['W'],
      [' '],
      ['W'],
      ['W'],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      ['G'],
      ['G'],
      ['W'],
    ],
    [
      ['W'],
      [' '],
      ['B'],
      [' '],
      [' '],
      ['B'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      ['G'],
      ['G'],
      ['W'],
    ],
    [
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      ['W'],
      ['P'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      ['G'],
      ['G'],
      ['W'],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      ['W'],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
    [
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
      [' '],
    ],
  ],
};
var mapGrid = tileMap01.mapGrid;
var newArray = [
  [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    ['B'],
    [' '],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    ['B'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    ['W'],
    [' '],
    [' '],
    ['B'],
    [' '],
    ['B'],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    ['W'],
    ['W'],
    ['W'],
    [' '],
    ['W'],
    [' '],
    ['W'],
    ['W'],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
  ],
  [
    ['W'],
    [' '],
    [' '],
    [' '],
    ['W'],
    [' '],
    ['W'],
    ['W'],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    ['G'],
    ['G'],
    ['W'],
  ],
  [
    ['W'],
    [' '],
    ['B'],
    [' '],
    [' '],
    ['B'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    ['G'],
    ['G'],
    ['W'],
  ],
  [
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    ['W'],
    ['P'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    ['G'],
    ['G'],
    ['W'],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    ['W'],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
  [
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
    [' '],
  ],
];
const maindiv = document.createElement('div');

maindiv.classList.add('main-div');

document.addEventListener('keydown', function (event) {
  if (event.key == 'ArrowUp') {
    for (let i = 0; i < tileMap01.height; i++) {
      for (let j = 0; j < tileMap01.width; j++) {
        if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i - 1][j] == 'B' &&
          mapGrid[i - 2][j] == 'G'
        ) {
          mapGrid[i][j] = 'G';
          mapGrid[i - 1][j] = 'P';
          mapGrid[i - 2][j] = 'B';
          move();
        } else if (mapGrid[i][j] == 'P' && mapGrid[i - 1][j] == 'G') {
          mapGrid[i][j] = 'G';
          mapGrid[i - 1][j] = 'P';
          move();
        } else if (mapGrid[i][j] == 'P' && mapGrid[i - 1][j] == ' ') {
          mapGrid[i][j] = ' ';
          mapGrid[i - 1][j] = 'P';
          move();
        } else if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i - 1][j] == 'B' &&
          mapGrid[i - 2][j] == ' '
        ) {
          if (j === 16 || j == 17) {
            mapGrid[i][j] = 'G';
            mapGrid[i - 1][j] = 'P';
            mapGrid[i - 2][j] = 'B';
            move();
          } else {
            mapGrid[i][j] = ' ';
            mapGrid[i - 1][j] = 'P';
            mapGrid[i - 2][j] = 'B';
            move();
          }
        }
      }
    }
  }
  if (event.key == 'ArrowDown') {
    let count_down = 0;
    for (let i = 0; i < tileMap01.height; i++) {
      for (let j = 0; j < tileMap01.width; j++) {
        if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i + 1][j] == 'B' &&
          mapGrid[i + 2][j] == 'G'
        ) {
          {
            mapGrid[i][j] = 'G';
            mapGrid[i + 1][j] = 'P';
            mapGrid[i + 2][j] = 'B';
            count_down++;
            move();
          }
        } else if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i + 1][j] == 'B' &&
          mapGrid[i + 2][j] == ' '
        ) {
          if (count_down === 0) {
            mapGrid[i][j] = ' ';
            mapGrid[i + 1][j] = 'P';
            mapGrid[i + 2][j] = 'B';
            count_down++;
            move();
          }
        } else if (mapGrid[i][j] == 'P' && mapGrid[i + 1][j] == ' ') {
          if (count_down === 0) {
            mapGrid[i][j] = ' ';
            mapGrid[i + 1][j] = 'P';
            count_down++;
            move();
          }
        } else if (mapGrid[i][j] == 'P' && mapGrid[i + 1][j] == 'G') {
          if (count_down === 0) {
            mapGrid[i][j] = 'G';
            mapGrid[i + 1][j] = 'P';
            count_down++;
            move();
          }
        }
      }
    }
    count_down = 0;
  }
  if (event.key == 'ArrowRight') {
    let count_right = 0;
    for (let i = 0; i < tileMap01.height; i++) {
      for (let j = 0; j < tileMap01.width; j++) {
        if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i][j + 1] == 'B' &&
          mapGrid[i][j + 2] == ' '
        ) {
          if (count_right === 0) {
            mapGrid[i][j] = ' ';
            mapGrid[i][j + 1] = 'P';
            mapGrid[i][j + 2] = 'B';
            count_right++;
            move();
          }
        } else if (
          mapGrid[i][j] == 'P' &&
          mapGrid[i][j + 1] == 'B' &&
          mapGrid[i][j + 2] == 'G'
        ) {
          if (count_right === 0) {
            mapGrid[i][j] = ' ';
            mapGrid[i][j + 1] = 'P';
            mapGrid[i][j + 2] = 'B';
            count_right++;
            move();
          }
        } else if (mapGrid[i][j] == 'P' && mapGrid[i][j + 1] == 'G') {
          if (count_right === 0) {
            if (j === 15) {
              mapGrid[i][j] = ' ';
              mapGrid[i][j + 1] = 'P';
              count_right++;
            } else {
              mapGrid[i][j] = 'G';
              mapGrid[i][j + 1] = 'P';
              count_right++;
            }
          }
          move();
        } else if (mapGrid[i][j] == 'P' && mapGrid[i][j + 1] == ' ') {
          if (count_right === 0) {
            mapGrid[i][j] = ' ';
            mapGrid[i][j + 1] = 'P';
            move();
            count_right++;
          }
        }
      }
    }
    count_right = 0;
  }
  if (event.key == 'ArrowLeft') {
    for (let i = 0; i < tileMap01.height; i++) {
      for (let j = 0; j < tileMap01.width; j++) {
        if (mapGrid[i][j] == 'P' && mapGrid[i][j - 1] == 'G') {
          mapGrid[i][j] = 'G';
          mapGrid[i][j - 1] = 'P';
          move();
          Won();
        } else if (mapGrid[i][j] == 'P' && mapGrid[i][j - 1] == ' ') {
          if (j === 16) {
            mapGrid[i][j] = 'G';
            mapGrid[i][j - 1] = 'P';
            move();
            Won();
          } else {
            mapGrid[i][j] = ' ';
            mapGrid[i][j - 1] = 'P';
            move();
            Won();
          }
        } else if (mapGrid[i][j] == 'P' && mapGrid[i][j - 1] == 'B') {
          if (j === 16) {
            mapGrid[i][j] = 'G';
            mapGrid[i][j - 1] = 'P';
            mapGrid[i][j - 2] = 'B';
            move();
            Won();
          } else if (j == 17) {
            mapGrid[i][j] = 'G';
            mapGrid[i][j - 1] = 'P';
            mapGrid[i][j - 2] = 'B';
            move();
            Won();
          } else if (mapGrid[i][j - 2] == ' ') {
            mapGrid[i][j] = ' ';
            mapGrid[i][j - 1] = 'P';
            mapGrid[i][j - 2] = 'B';
            move();
            Won();
          }
        }
      }
    }
  }
});
function Won() {
  let numberOfBlocks = 0;
  for (let i = 9; i < 12; i++) {
    for (let j = 16; j < 18; j++) {
      if (mapGrid[i][j] == 'B') {
        numberOfBlocks++;
      }
    }
  }
  if (numberOfBlocks === 6) {
    numberOfBlocks = 0;
    return 'Congratulation, you Won the game';
  } else {
    return '';
  }
}
function Reset() {
  mapGrid = [...newArray];
  move();
}

function move() {
  maindiv.innerHTML =
    mapGrid
      .map((Legends) => {
        const ullist = Legends.map((Legend) => {
          if (Legend == 'W') {
            return '<li><img src="./wall.jpg" alt="blank image" width="25px" height="25px" /></li>';
          } else if (Legend == 'G') {
            return '<li><img src="./boll.png" alt="blank image" width="25px" height="25px" /></li>';
          } else if (Legend == 'P') {
            return '<li><img src="./character.png" alt="blank image" width="25px" height="25px" /></li>';
          } else if (Legend == 'B') {
            return '<li><img src="./stone.png" alt="blank image" width="25px" height="25px" /></li>';
          } else {
            return '<li><img src="./blank.jpg" alt="blank image" width="25px" height="25px" /></li>';
          }
        }).join('');

        return '<ul>' + ullist + '</ul>';
      })
      .join('') +
    `<div class='won'>${Won()}</div><button class='tryagain' onclick="Reset()">Try again</button>`;
  document.body.appendChild(maindiv);
}
move();
