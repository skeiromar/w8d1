# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bench = Bench.create({description: 'some bench', lat: 37.749338, lng: -122.424477})
bench.save!

bench1 = Bench.create({description: 'some bench', lat: 37.749338, lng: -122.424477})
bench1.save!
bench2 = Bench.create({description: 'some one bench', lat: -37.749338, lng: -122.424477})
bench2.save!
bench3 = Bench.create({description: 'some two bench', lat: 39.749338, lng: -122.424477})
bench3.save!

