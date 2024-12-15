/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers\nfrom (\n  SELECT `userQuizzes`.id as id, answers, quiz, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes` \n  LEFT JOIN answers `userAnswers` ON\n  answers LIKE \"%\" + `userAnswers`.id + \"%\"\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // remove
  collection.schema.removeField("8gxazthj")

  // remove
  collection.schema.removeField("yqbppwba")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2rz9qnks",
    "name": "answers",
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
    "id": "uhyzoxwh",
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
    "id": "uhmelmst",
    "name": "total_answers",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions\nfrom (\n  SELECT `userQuizzes`.id as id, answers, quiz FROM `userQuizzes` \n  LEFT JOIN answers `userAnswers` ON\n  answers LIKE \"%\" + `userAnswers`.id + \"%\"\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8gxazthj",
    "name": "answers",
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
    "id": "yqbppwba",
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

  // remove
  collection.schema.removeField("2rz9qnks")

  // remove
  collection.schema.removeField("uhyzoxwh")

  // remove
  collection.schema.removeField("uhmelmst")

  return dao.saveCollection(collection)
})
