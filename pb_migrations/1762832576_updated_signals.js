/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1207876327")

  // update collection data
  unmarshal({
    "createRule": "from = @request.auth.id",
    "deleteRule": "id = \"\"",
    "listRule": "room.a_user = @request.auth.id || room.b_user = @request.auth.id",
    "updateRule": "id = \"\"",
    "viewRule": "room.a_user = @request.auth.id || room.b_user = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1207876327")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
