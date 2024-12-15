/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT `userQuizzes`.id as id, answers, quiz, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes` \n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // remove
  collection.schema.removeField("klbieusv")

  // remove
  collection.schema.removeField("ct25fdej")

  // remove
  collection.schema.removeField("zovb7jwu")

  // remove
  collection.schema.removeField("fhnhuu13")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1yjvnhmn",
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
    "id": "poicnhvu",
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
    "id": "x5vjhc1b",
    "name": "total_answers",
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
    "id": "vlokldij",
    "name": "grade",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  (`userQuizzes`.total_answers / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT `userQuizzes`.id as id, answers, quiz, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes` \n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "klbieusv",
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
    "id": "ct25fdej",
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
    "id": "zovb7jwu",
    "name": "total_answers",
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
    "id": "fhnhuu13",
    "name": "grade",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("1yjvnhmn")

  // remove
  collection.schema.removeField("poicnhvu")

  // remove
  collection.schema.removeField("x5vjhc1b")

  // remove
  collection.schema.removeField("vlokldij")

  return dao.saveCollection(collection)
})
