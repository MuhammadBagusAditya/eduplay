/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  userQuizzes.answers as answers\nFROM `userQuizzes`\nINNER JOIN `answers` userAnswer ON \n  userAnswer.id = userQuizzes.answers"
  }

  // remove
  collection.schema.removeField("efdu259z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxbdad7u",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  userQuizzes.answers as answers\nFROM `userQuizzes`\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efdu259z",
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

  // remove
  collection.schema.removeField("nxbdad7u")

  return dao.saveCollection(collection)
})
