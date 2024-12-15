/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lmc2ou2v",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // remove
  collection.schema.removeField("lmc2ou2v")

  return dao.saveCollection(collection)
})
