/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mmi7izgd",
    "name": "time",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("uv7ex9tfj32f2gl")

  // remove
  collection.schema.removeField("mmi7izgd")

  return dao.saveCollection(collection)
})
