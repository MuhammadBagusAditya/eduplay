/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.name = "userQuizGrades"
  collection.options = {
    "query": "SELECT\nid\nFROM `userQuizzes`\n"
  }

  // remove
  collection.schema.removeField("zudt1oft")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.name = "userQuizzesGrade"
  collection.options = {
    "query": "SELECT id, answers FROM userQuizzes"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zudt1oft",
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
})
