/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT `userQuizzes`.id as id, answers, user, quiz, isSubmitted, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\nWHERE isSubmitted = true\n"
  }

  // remove
  collection.schema.removeField("g9ijypyt")

  // remove
  collection.schema.removeField("9d3a1elb")

  // remove
  collection.schema.removeField("ul1dbuob")

  // remove
  collection.schema.removeField("q3pr7icf")

  // remove
  collection.schema.removeField("pz5jqgpw")

  // remove
  collection.schema.removeField("boaqnp6z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b510ieba",
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
    "id": "gdvqjrij",
    "name": "user",
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
    "id": "maaoq9ud",
    "name": "quiz",
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
    "id": "fb2wasp7",
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
    "id": "shhaoqt9",
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
    "id": "wb8kubk4",
    "name": "isSubmitted",
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
    "id": "cxz6vnk2",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT `userQuizzes`.id as id, answers, user, quiz, isSubmitted, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n   WHERE isSubmitted = true\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g9ijypyt",
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
    "id": "9d3a1elb",
    "name": "user",
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
    "id": "ul1dbuob",
    "name": "quiz",
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
    "id": "q3pr7icf",
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
    "id": "pz5jqgpw",
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
    "id": "boaqnp6z",
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
  collection.schema.removeField("b510ieba")

  // remove
  collection.schema.removeField("gdvqjrij")

  // remove
  collection.schema.removeField("maaoq9ud")

  // remove
  collection.schema.removeField("fb2wasp7")

  // remove
  collection.schema.removeField("shhaoqt9")

  // remove
  collection.schema.removeField("wb8kubk4")

  // remove
  collection.schema.removeField("cxz6vnk2")

  return dao.saveCollection(collection)
})
