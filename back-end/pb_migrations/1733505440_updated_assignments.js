/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnpb0jd8",
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
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // remove
  collection.schema.removeField("bnpb0jd8")

  return dao.saveCollection(collection)
})
