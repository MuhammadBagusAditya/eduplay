/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // remove
  collection.schema.removeField("ez5ycubf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjoxjfgh",
    "name": "days",
    "type": "select",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
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

  // remove
  collection.schema.removeField("zjoxjfgh")

  return dao.saveCollection(collection)
})
