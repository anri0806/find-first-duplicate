require 'set'

def find_first_duplicate(arr)
  # type your code in here

  newArr = Set.new
  i = 0


  arr.each do |value|
    if newArr.include?(value) 
      return value
    else
      newArr << value
    end
  end

  -1

end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file



  #### SECOND ATTEMPT
  #### Create empty set -->  #<Set: {}>  will look like this after addition
  ####  #<Set: {1, 3, 4} >
  #### Then iterate each value 
  #### Return if set includes iterated value, if not, add value to set

  # uniques = Set.new

  # arr.each do |value|
  #   if uniques.include?(value)
  #    return value 
  #   else
  #    uniques.add(value)
  #   end
  # end

  # -1



#### FIRST ATTEMPT

## Create variable = -1
## I want to iterate number i and j and find matching

  # newArr = []

  # arr.each do |e|
  #   return e if newArr[e] ## <- e is index number
  #   newArr[e] = true
  # end

  # -1
