/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions,\n  COUNT(userAnswer.id) as correct_answers\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON EXISTS\n  (SELECT 1 FROM JSON_EACH(answers) WHERE value = userAnswer.id)\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // remove
  collection.schema.removeField("onaupiie")

  // remove
  collection.schema.removeField("ldbpnzwf")

  // remove
  collection.schema.removeField("c743a6nb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adhn9phc",
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
    "id": "dfbr8icd",
    "name": "total_questions",
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
    "id": "yy3grbcr",
    "name": "correct_answers",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions,\n  COUNT(userAnswer.id) as correct_answers\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON \n  JSON_EXTRACT(answers, \"$\") LIKE \"%\" + userAnswer.id + \"%\"\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onaupiie",
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
    "id": "ldbpnzwf",
    "name": "total_questions",
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
    "id": "c743a6nb",
    "name": "correct_answers",
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
  collection.schema.removeField("adhn9phc")

  // remove
  collection.schema.removeField("dfbr8icd")

  // remove
  collection.schema.removeField("yy3grbcr")

  return dao.saveCollection(collection)
})
