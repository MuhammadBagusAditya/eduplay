/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zjoxjfgh",
    "name": "schedules",
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

  // update
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
})
