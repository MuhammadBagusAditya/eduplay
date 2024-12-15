/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6ew3exmunbjnnd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kn8jv1ud",
    "name": "description",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p6ew3exmunbjnnd")

  // remove
  collection.schema.removeField("kn8jv1ud")

  return dao.saveCollection(collection)
})
