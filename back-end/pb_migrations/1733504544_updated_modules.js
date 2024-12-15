/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6ew3exmunbjnnd")

  collection.name = "materials"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cblk7rvd",
    "name": "attachments",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "130f90b7mrjm19j",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lz5uqj3m",
    "name": "uploader",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "b7voph2ohmksqc8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6ew3exmunbjnnd")

  collection.name = "modules"

  // remove
  collection.schema.removeField("cblk7rvd")

  // remove
  collection.schema.removeField("lz5uqj3m")

  return dao.saveCollection(collection)
})
