/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.indexes = []

  // remove
  collection.schema.removeField("uazhfhum")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("685v49o938smfjg")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_8LHVf6y` ON `classes` (`invite_code`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uazhfhum",
    "name": "invite_code",
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
