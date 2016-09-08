class Recipe < ActiveRecord::Base
  has_many :ingredients

  def self.search(query)
    Recipe.where("name LIKE ? or url LIKE ? or tags LIKE ? or notes LIKE ?",
    "%#{query}%","%#{query}%","%#{query}%","%#{query}%")
  end

end
