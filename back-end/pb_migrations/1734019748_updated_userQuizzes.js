/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("82ljtko8zicm1li")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ynbjyoaf",
    "name": "endTime",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("82ljtko8zicm1li")

  // remove
  collection.schema.removeField("ynbjyoaf")

  return dao.saveCollection(collection)
})
