# Variable first_name capitalize! method
print "What's your first name?"
 first_name = gets.chomp
 first_name.capitalize!

# Variable last_name capitalize! method
print "What's your last name?"
 last_name = gets.chomp
 last_name.capitalize!

# Variable city with capitalize! method
print "What city are you from?"
 city = gets.chomp
 city.capitalize!

# Variable state with upcase method
print "Enter the abbreviation of your state or province please."
 state = gets.chomp
 state.upcase!

# Variable country capitalize! method 
print "What country are you from?"
 country = gets.chomp
 country.capitalize!

# Print the output in a sentence
puts "My name is #{first_name} #{last_name}, I leave in #{city} localised in state of #{state} in #{country}."
