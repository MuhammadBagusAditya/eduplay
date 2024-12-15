/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  userAnswer.id as userId\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  userAnswer.id IN answers"
  }

  // remove
  collection.schema.removeField("s5iyotac")

  // remove
  collection.schema.removeField("in1fdnhx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vwgk3hgp",
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
    "id": "uun5svr1",
    "name": "userId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9g4hxmh04xpjcdc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  userAnswer.id as userId\nFROM `userQuizzes`\nRIGHT JOIN `answers` userAnswer ON \n  userAnswer.id IN answers"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s5iyotac",
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
    "id": "in1fdnhx",
    "name": "userId",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9g4hxmh04xpjcdc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("vwgk3hgp")

  // remove
  collection.schema.removeField("uun5svr1")

  return dao.saveCollection(collection)
})