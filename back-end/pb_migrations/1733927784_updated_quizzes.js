/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ymkag7q3",
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
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // remove
  collection.schema.removeField("ymkag7q3")

  return dao.saveCollection(collection)
})
