/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k9tdzz9r",
    "name": "status",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "open",
        "closed"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y4pm60b1vcupsgf")

  // remove
  collection.schema.removeField("k9tdzz9r")

  return dao.saveCollection(collection)
})
