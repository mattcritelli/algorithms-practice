require 'pry-byebug'

# Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
#
# Each letter in the magazine string can only be used once in your ransom note.
#
# Note:
# You may assume that both strings contain only lowercase letters.

def can_construct(ransom_note, magazine)
  count = 0
  note_letters = ransom_note.split('')

  while count < note_letters.length
    # binding.pry
    if note_letters[count] == " "
      count += 1
    elsif magazine.index(note_letters[count]) != nil
      magazine.slice!(magazine[magazine.index(note_letters[count])])
      count +=1
    else
      return false
    end
  end
  return true
end



## TEST CASES ##
p can_construct("abcd", "drft") # false
p can_construct("a", "b") # false
p can_construct("aa", "ab") # false
p can_construct("aca", "aabc") # true
p can_construct("aa", "ab a") # true
p can_construct("ac a", "aabc") # true
