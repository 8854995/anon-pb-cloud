/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716835629")

  // update collection data
  unmarshal({
    "name": "match_queue"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716835629")

  // update collection data
  unmarshal({
    "name": "match_queue1"
  }, collection)

  return app.save(collection)
})
