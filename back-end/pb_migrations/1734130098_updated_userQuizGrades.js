/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  userAnswer.id = userQuizzes.answers"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id\nFROM `userQuizzes`\nINNER JOIN `answers` userAnswer ON \n  userAnswer.id = userQuizzes.answers"
  }

  return dao.saveCollection(collection)
})
