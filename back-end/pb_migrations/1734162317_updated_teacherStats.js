/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3")

  collection.options = {
    "query": "SELECT classes.id as id, count(materials.id) as materialsCount from classes\nLEFT JOIN materials ON\n  materials.classroom = classes.id"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rbvpebwt",
    "name": "materialsCount",
    "type": "number",
    "required": false,
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
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3")

  collection.options = {
    "query": "SELECT classes.id as id from classes\nLEFT JOIN materials ON\n  materials.classroom = classes.id"
  }

  // remove
  collection.schema.removeField("rbvpebwt")

  return dao.saveCollection(collection)
})
