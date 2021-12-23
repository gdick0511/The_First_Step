# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# Post.destroy_all
# Comment.destroy_all

# puts "Seeding your User data now! 🌱"

# 2.times do 
# User.create(
#     email: Faker::Internet.free_email,
#     username: Faker::FunnyName.two_word_name,
#     password_digest: Faker::Internet.password
# )
# end

# puts "Seeding your Post data now! 📜"

# 10.times do
# Post.create(
#     subject: Faker::Book.title,
#     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
#     user_id: User.all.sample.id
# )
# end

puts "Seeding your Comment data now! 📝"

10.times do 
Comment.create(
    body: "This is a comment left on a comment",
    user_id: User.all.sample.id,
    commentable_id: Comment.all.sample.id,
    commentable_type: "Comment"
)
end

puts "Done seeding 🎊"

# rails g resource User email username password_digest 

# rails g resource Post subject body user:belongs_to

# rails g resource Comment body user:belongs_to commentable:references{polymorphic}