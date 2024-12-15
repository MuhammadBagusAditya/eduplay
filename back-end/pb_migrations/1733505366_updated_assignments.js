/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1viutdjn",
    "name": "userAssignments",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "51s7ns718n9zdmb",
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
  collection.schema.removeField("1viutdjn")

  return dao.saveCollection(collection)
})
