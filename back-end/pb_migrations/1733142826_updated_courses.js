/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // remove
  collection.schema.removeField("hjhqodhq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjhqodhq",
    "name": "modules",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "p6ew3exmunbjnnd",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
