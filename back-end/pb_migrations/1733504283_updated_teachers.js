/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7voph2ohmksqc8")

  // remove
  collection.schema.removeField("ppy7rb6o")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("b7voph2ohmksqc8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ppy7rb6o",
    "name": "affiliation",
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
