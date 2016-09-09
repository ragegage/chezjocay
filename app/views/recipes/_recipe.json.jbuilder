json.extract! recipe, :id, :name, :url, :entree, :soup, :salad, :dessert, :appetizer, :tags, :notes

json.favorite_users bench.favorite_users.map(&:id)

json.ingredients do
  recipe.ingredients.each do |ingredient|
    json.set! ingredient.id do
      json.extract! :name
    end
  end
end

create_table "ingredients", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "recipe_id"
  end

  create_table "recipes", force: :cascade do |t|
    t.string   "name"
    t.string   "url"
    t.boolean  "entree"
    t.boolean  "soup"
    t.boolean  "salad"
    t.boolean  "dessert"
    t.boolean  "appetizer"
    t.string   "tags"
    t.text     "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false