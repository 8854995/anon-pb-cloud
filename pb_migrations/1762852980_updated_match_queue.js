/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716835629")

  // update collection data
  unmarshal({
    "listRule": "user = @request.auth.id",
    "viewRule": "user = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2716835629")

  // update collection data
  unmarshal({
    "listRule": "status = \"waiting\"",
    "viewRule": "user = @request.auth.id || status = \"waiting\""
  }, collection)

  return app.save(collection)
})
