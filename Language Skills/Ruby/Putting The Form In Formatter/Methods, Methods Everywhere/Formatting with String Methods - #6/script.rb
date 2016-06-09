print "What's your first name?"
 first_name = gets.chomp
 first_name.capitalize!

print "What's your last name?"
 last_name = gets.chomp
 last_name.capitalize!

print "What city are you from?"
 city = gets.chomp
 city.capitalize!

print "Enter the abbreviation of your state or province please."
 state = gets.chomp
 state.upcase!

print "What country are you from?"
 country = gets.chomp
 country.capitalize!

puts "My name is #{first_name} #{last_name}, I leave in #{city} localised in state of #{state} in #{country}."