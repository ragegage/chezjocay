class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :url
      t.boolean :entree
      t.boolean :soup
      t.boolean :salad
      t.boolean :dessert
      t.boolean :appetizer
      t.string :tags
      t.text :notes

      t.timestamps null: false
    end
  end
end
