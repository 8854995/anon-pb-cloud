/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" &&\n(\n  a_user ?= @request.auth.id ||\n  b_user ?= @request.auth.id\n)",
    "updateRule": "@request.auth.id != \"\" &&\n(\n  a_user ?= @request.auth.id ||\n  b_user ?= @request.auth.id\n)",
    "viewRule": "@request.auth.id != \"\" &&\n(\n  a_user ?= @request.auth.id ||\n  b_user ?= @request.auth.id\n)"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "listRule": "a_user = @request.auth.id || b_user = @request.auth.id",
    "updateRule": "a_user = @request.auth.id || b_user = @request.auth.id",
    "viewRule": "a_user = @request.auth.id || b_user = @request.auth.id"
  }, collection)

  return app.save(collection)
})
