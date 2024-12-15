/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6u3gndhx",
    "name": "module",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p6ew3exmunbjnnd",
      "cascadeDelete": false,
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
  collection.schema.removeField("6u3gndhx")

  return dao.saveCollection(collection)
})
