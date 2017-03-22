require_relative '../valid_sudoku'

board_one = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

#board two has two 5's in the first row
board_two = "1-58-25---9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

#board three has two 5's in the same superbox
board_three = "1-58-2---59--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

#board four has two 5's in the same column
board_four = "1-58-2----9--764-52--4--819-195-73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

describe '#is_valid_sudoku' do
  let(:board_one) { board = board_one }
  let(:board_two) { board = board_two }
  let(:board_three) { board = board_three }
  let(:board_four) { board = board_four }

  it 'returns true if the sudoku board is valid' do
    expect(is_valid_sudoku(board_one)).to eq true
  end

  it 'returns false if the board has duplicates in a row' do
    expect(is_valid_sudoku(board_two)).to eq false
  end

  it 'returns false if the board has duplicates in a superbox' do
    expect(is_valid_sudoku(board_three)).to eq false
  end

  it 'returns false if the board has duplicates in a row' do
    expect(is_valid_sudoku(board_four)).to eq false
  end
end
