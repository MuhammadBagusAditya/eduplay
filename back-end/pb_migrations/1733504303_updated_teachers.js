/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7voph2ohmksqc8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysqqkk9m",
    "name": "bio",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7voph2ohmksqc8")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ysqqkk9m",
    "name": "address",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
