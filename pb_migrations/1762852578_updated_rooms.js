/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `rooms_pair_key_unique` ON `rooms` (`pair_key`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3085411453")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX `rooms_pair_key_unique` ON `rooms` (`pair_key`)"
    ]
  }, collection)

  return app.save(collection)
})
