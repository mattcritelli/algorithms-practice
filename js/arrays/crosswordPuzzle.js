const crossword = [
  '+-++++++++',
  '+-++++++++',
  '+-++++++++',
  '+-----++++',
  '+-+++-++++',
  '+-+++-++++',
  '+++++-++++',
  '++------++',
  '+++++-++++',
  '+++++-++++'
];

const words = [
  'LONDON',
  'DELHI',
  'ICELAND',
  'ANKARA'
];

function spaceCount(row) {
  let splitRow = row.split('');
  let count = 0;

  for (let x = 0; x < splitRow.length; x++) {
    if (splitRow[x] === '-') count++;
  }
  return count;
}

function insertWord(row, word) {
  let splitRow = row.split('');
  let letterIndex = 0;

  for (let i = 0; i < splitRow.length; i++) {
    if (splitRow[i] === '-') {
      splitRow[i] = word.charAt(letterIndex);
      letterIndex++;
    } else if (splitRow[i] === word.charAt(letterIndex)) {
      letterIndex++;
    }
  }
  return splitRow.join('');
}

function rotatePuzzle(puzzle) {
  const rotatedPuzzle = Array.from(Array(10), x => x = "");

  for (let i = 0; i < puzzle.length; i++) {
    let splitRow = puzzle[i].split('');

    for (let j = 0; j < splitRow.length; j++) {
      rotatedPuzzle[j] = rotatedPuzzle[j].concat(splitRow[j])
    }
  }
  // console.log('rotatedPuzzle\n', rotatedPuzzle)
  return rotatedPuzzle;
};





function crosswordPuzzle(crossword, words) {
  let crosswordDup = crossword.slice(); 

  for (let i = 0; i < crosswordDup.length; i++) {
    let row = crosswordDup[i];
    const count = spaceCount(row);

    for (let j = 0; j < words.length; j++) {
      if (words[j].length === count) {
        let result = insertWord(row, words[j]);
        crosswordDup[i] = result;
        break;
      }
    }
  }

  // let rotatedPuzzle = rotatePuzzle(crossword)

  // for (let i = 0; i < rotatedPuzzle.length; i++) {
  //   let row = rotatedPuzzle[i];
  //   const count = spaceCount(row);

  //   for (let j = 0; j < words.length; j++) {
  //     if (words[j].length === count) {
  //       let result = insertWord(row, words[j]);
  //       rotatedPuzzle[i] = result;
  //       break;
  //     }
  //   }
  // }

  // let reRotatedPuzzle = rotatePuzzle(rotatedPuzzle);

  console.log('\n\noriginal\n', crossword)
  console.log('\n\nduplicated\n', crosswordDup)
  // console.log('\n\nreRotatedPuzzle\n', reRotatedPuzzle)
}

crosswordPuzzle(crossword, words);
// console.log(rotatePuzzle(crossword));


// OTHER POSSIBLE PUZZLES

// PUZZLE 1:
// +-++++++++
// +-++++++++
// +-------++
// +-++++++++
// +-++++++++
// +------+++
// +-+++-++++
// +++++-++++
// +++++-++++
// ++++++++++
// AGRA;NORWAY;ENGLAND;GWALIOR

// +E++++++++
// +N++++++++
// +GWALIOR++
// +L++++++++
// +A++++++++
// +NORWAY+++
// +D+++G++++
// +++++R++++
// +++++A++++
// ++++++++++
// AGRA;NORWAY;ENGLAND;GWALIOR



// PUZZLE 2
// XXXXXX-XXX
// XX------XX
// XXXXXX-XXX
// XXXXXX-XXX
// XXX------X
// XXXXXX-X-X
// XXXXXX-X-X
// XXXXXXXX-X
// XXXXXXXX-X
// XXXXXXXX-X
// ICELAND;MEXICO;PANAMA;ALMATY

// XXXXXXIXXX
// XXMEXICOXX
// XXXXXXEXXX
// XXXXXXLXXX
// XXXPANAMAX
// XXXXXXNXLX
// XXXXXXDXMX
// XXXXXXXXAX
// XXXXXXXXTX
// XXXXXXXXYX
// ICELAND;MEXICO;PANAMA;ALMATY

//PUZZLE 3
// ++++++++++
// +------+++
// +++-++++++
// +++-++++++
// +++-----++
// +++-++-+++
// ++++++-+++
// ++++++-+++
// ++++++-+++
// ++++++++++
// POLAND;LHASA;SPAIN;INDIA

// ++++++++++
// +POLAND+++
// +++H++++++
// +++A++++++
// +++SPAIN++
// +++A++N+++
// ++++++D+++
// ++++++I+++
// ++++++A+++
// ++++++++++
// POLAND;LHASA;SPAIN;INDIA