/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.deleteRule = "@request.auth.role = \"teacher\" && @request.auth.id = @collection.classes.creator.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.deleteRule = "@request.auth.role = \"teacher\""

  return dao.saveCollection(collection)
})
