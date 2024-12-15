/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ez5ycubf",
    "name": "day",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 7,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // remove
  collection.schema.removeField("ez5ycubf")

  return dao.saveCollection(collection)
})
