/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(userAnswer.id) as total_answers\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  userAnswer.id = JSON_EXTRACT(answers, \"$\")"
  }

  // remove
  collection.schema.removeField("8qvikpqx")

  // remove
  collection.schema.removeField("soii6ax0")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oxvagvzi",
    "name": "answers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9g4hxmh04xpjcdc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "raxsjpd3",
    "name": "total_answers",
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
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(userAnswer.id) as total_answers\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  true"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8qvikpqx",
    "name": "answers",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9g4hxmh04xpjcdc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "soii6ax0",
    "name": "total_answers",
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
  collection.schema.removeField("oxvagvzi")

  // remove
  collection.schema.removeField("raxsjpd3")

  return dao.saveCollection(collection)
})
