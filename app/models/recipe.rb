#require 'elasticsearch/model'

class Recipe < ActiveRecord::Base
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  #allows word stem searching
  settings index: { number_of_shards: 1 } do
    mappings dynamic: 'false' do
      indexes :name, analyzer: 'english'
      indexes :url, analyzer: 'english'
      indexes :tags, analyzer: 'english'
      indexes :notes, analyzer: 'english'
    end
  end

  def self.search(query)
    __elasticsearch__.search(
      {
        query: {
          multi_match: {
            query: query,
            fields: ['name^10', 'url', 'tags', 'notes']
          }
        }
      }
    )
  end

end
Recipe.import force:true # for auto sync model with elastic search
