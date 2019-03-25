class Bench < ApplicationRecord 
    validates :description, :lat, :lng, presence: true 


    def filterize(min_seating, max_seating)
        locations = Bench.where("seating > ? AND seating < ? ", min_seating, max_seating)
        
    end
    def self.in_bounds(bounds, min_seating= 0, max_seating=100)
 

        # google map bounds will be in the following format:
        # {
        #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
        #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
        # }
        #... query logic goes here
        # debugger
        # locations = Bench.where("lat < ? ", 39).where("lng < ?", 122)
        locations = Bench.where("lat > ? AND lat < ? ", 
        bounds['southWest']['lat'].to_f, 
        bounds['northEast']['lat'].to_f).where("lng > ? AND lng < ?", 
        bounds['southWest']['lng'].to_f, 
        bounds['northEast']['lng'].to_f).where("seating >= ? AND seating <= ?", min_seating, max_seating)
        # debugger
        # return locations
    end

end