# Setting Up the 'If' Branch, Part 2
print "Get me some text"
user_input = gets.chomp
user_input.downcase!

user_input.gsub! /s/, "th"