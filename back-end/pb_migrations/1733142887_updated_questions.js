/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v0qixk0wnqwg08d")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p7c9dd5v",
    "name": "quiz",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "uv7ex9tfj32f2gl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v0qixk0wnqwg08d")

  // remove
  collection.schema.removeField("p7c9dd5v")

  return dao.saveCollection(collection)
})
