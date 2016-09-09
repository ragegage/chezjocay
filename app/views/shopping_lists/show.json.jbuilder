json.set! @shopping_list.id do
  json.partial! 'shopping_list', shopping_list: @shopping_list
end
