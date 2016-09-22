json.extract! shopping_list, :id, :name

if shopping_list.shopping_list_items.length == 0
  json.shopping_list_items({})
else
  json.shopping_list_items do
    shopping_list.shopping_list_items.each do |shopping_list_item|
      json.set! shopping_list_item.id do
        json.extract! shopping_list_item, :id, :name, :done
      end
    end
  end
end
