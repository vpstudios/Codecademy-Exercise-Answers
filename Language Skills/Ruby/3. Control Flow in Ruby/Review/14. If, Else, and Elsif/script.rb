# If
if 1 < 3
	puts "I'm getting printed because one is less than three!"
else 
	puts "That means I'll get printed!"
end

# Else
if 1 > 2
  print "I won't get printed because one is less than two."
else
  print "That means I'll get printed!"
end

# Elseif
# Define variables x and y
x = 1
y = 3

# Elseif statement
if x < y  # Assumes x and y are defined
  puts "x is less than y!"
elsif x > y
  puts "x is greater than y!"
else
  puts "x equals y!"
end