class Recipe < ActiveRecord::Base

  def self.search(query)
    Recipe.where("name LIKE ? or url LIKE ? or tags LIKE ? or notes LIKE ?",
    "%#{query}%","%#{query}%","%#{query}%","%#{query}%")
  end

end
