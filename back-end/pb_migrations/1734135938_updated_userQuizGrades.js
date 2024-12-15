/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions\nfrom `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // remove
  collection.schema.removeField("smub1eam")

  // remove
  collection.schema.removeField("u40cf7fl")

  // remove
  collection.schema.removeField("uir6vbde")

  // remove
  collection.schema.removeField("wwnwwzai")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vntsds7b",
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
    "id": "2xj5alnb",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  questions.name as questionname,\n  COUNT(questions.id) as total_questions,\n  COUNT(userAnswer.id) as correct_answers\nFROM `userQuizzes`\nLEFT JOIN `answers` userAnswer ON EXISTS\n  (SELECT 1 FROM JSON_EACH(answers) WHERE value = userAnswer.id)\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smub1eam",
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
    "id": "u40cf7fl",
    "name": "questionname",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uir6vbde",
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
    "id": "wwnwwzai",
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
  collection.schema.removeField("vntsds7b")

  // remove
  collection.schema.removeField("2xj5alnb")

  return dao.saveCollection(collection)
})
