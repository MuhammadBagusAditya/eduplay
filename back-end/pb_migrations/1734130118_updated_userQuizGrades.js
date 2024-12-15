/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  userAnswer.id as userId\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  userAnswer.id = userQuizzes.answers"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a5nxvsaq",
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
    "query": "SELECT \n  userQuizzes.id as id\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  userAnswer.id = userQuizzes.answers"
  }

  // remove
  collection.schema.removeField("a5nxvsaq")

  return dao.saveCollection(collection)
})
