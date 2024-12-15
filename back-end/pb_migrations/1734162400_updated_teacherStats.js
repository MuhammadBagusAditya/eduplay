/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3")

  collection.options = {
    "query": "SELECT \n  classes.id AS id, \n  COUNT(materials.id) AS materialsCount,\n  COUNT(assignments.id) AS assignmentsCount,\n  COUNT(quizzes.id) AS quizzesCount\nFROM classes\nLEFT JOIN materials ON\n  materials.classroom = classes.id\nLEFT JOIN assignments ON\n  assignments.classroom = classes.id\nLEFT JOIN quizzes ON\n  quizzes.classroom = classes.id"
  }

  // remove
  collection.schema.removeField("rbvpebwt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hzliwzq7",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1xgairyu",
    "name": "assignmentsCount",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vxhjjfib",
    "name": "quizzesCount",
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

  // remove
  collection.schema.removeField("hzliwzq7")

  // remove
  collection.schema.removeField("1xgairyu")

  // remove
  collection.schema.removeField("vxhjjfib")

  return dao.saveCollection(collection)
})
