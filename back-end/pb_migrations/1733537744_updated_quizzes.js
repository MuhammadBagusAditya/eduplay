/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v7b3hvpn",
    "name": "classroom",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "685v49o938smfjg",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // remove
  collection.schema.removeField("v7b3hvpn")

  return dao.saveCollection(collection)
})
