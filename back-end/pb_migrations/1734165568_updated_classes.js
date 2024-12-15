/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.updateRule = "@request.auth.role = \"teacher\" && @request.auth.id = creator"
  collection.deleteRule = "@request.auth.role = \"teacher\" && @request.auth.id = creator"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.updateRule = "@request.auth.role = \"teacher\" && @request.auth.id = creator.id"
  collection.deleteRule = "@request.auth.role = \"teacher\" && @request.auth.id = creator.id"

  return dao.saveCollection(collection)
})
