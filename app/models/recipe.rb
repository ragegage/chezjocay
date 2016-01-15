class Recipe < ActiveRecord::Base

  def self.search(query)
    Recipe.where(name: query)
  end

end
