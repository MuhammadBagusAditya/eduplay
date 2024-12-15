/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3")

  collection.options = {
    "query": "SELECT classes.id as id from classes\nLEFT JOIN materials ON\n  materials.classroom = classes.id"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3")

  collection.options = {
    "query": "SELECT id from users"
  }

  return dao.saveCollection(collection)
})
