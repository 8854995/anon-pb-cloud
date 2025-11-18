/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" &&\n(\n  room.a_user ?= @request.auth.id ||\n  room.b_user ?= @request.auth.id\n)",
    "listRule": "@request.auth.id != \"\" &&\n(\n  room.a_user ?= @request.auth.id ||\n  room.b_user ?= @request.auth.id\n)",
    "viewRule": "@request.auth.id != \"\" &&\n(\n  room.a_user ?= @request.auth.id ||\n  room.b_user ?= @request.auth.id\n)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2605467279")

  // update collection data
  unmarshal({
    "createRule": "sender = @request.auth.id && (room.a_user = @request.auth.id || room.b_user = @request.auth.id)",
    "listRule": "room.a_user = @request.auth.id || room.b_user = @request.auth.id",
    "viewRule": "room.a_user = @request.auth.id || room.b_user = @request.auth.id"
  }, collection)

  return app.save(collection)
})
