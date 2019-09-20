const crossword = [
  '+-++++++++',
  '+-++++++++',
  '+-++++++++',
  '+DELHI++++',
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
  let startIdx;

  for (let i = 0; i < splitRow.length; i++) {
    if (splitRow[i] !== '+') count++;
    if (!startIdx) startIdx = i;
  }
  console.log('count', count)
  return { count, startIdx };
}

function insertWord(row, rowData, word) {
  const { count, startIdx } = rowData;
  let splitRow = row.split('');
  let letterIndex = 0;
  let output = '';

  for (let i = startIdx; i < splitRow.length; i++) {
    if (splitRow[i] === '-') {
      splitRow[i] = word.charAt(letterIndex);
      letterIndex++;
    } else if (splitRow[i] === word.charAt(letterIndex)) {
      letterIndex++
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
  // for(let i = 0; i < 5; i++) {
  for (let i = 0; i < crossword.length; i++) {
    let row = crossword[i];
    const rowData = spaceCount(row);
    console.log('rowData', rowData)

    for (let j = 0; j < words.length; j++) {
      if (words[j].length === rowData.count) {
        let result = insertWord(row, rowData, words[j]);
        console.log(typeof result)
        crossword[i] = result;
        break;
      }
    }
  }
  console.log(crossword)
}

crosswordPuzzle(crossword, words);
// rotatePuzzle(crossword);


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