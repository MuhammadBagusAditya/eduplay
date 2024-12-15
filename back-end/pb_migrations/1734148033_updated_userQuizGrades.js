/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT \n  `userQuizzes`.id as id, \n  answers, \n  user, \n  quiz, \n  isSubmitted, \n  COUNT(`userAnswers`.id) as total_answers \n  FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") \n  WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n\nWHERE isSubmitted = true"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cghhtlza",
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
    "id": "csop1xmo",
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
    "id": "cbfcwnfb",
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
    "id": "ogcyp0zm",
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
    "id": "9mbxte3d",
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
    "id": "zxnmdtln",
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
    "id": "nis97frr",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT `userQuizzes`.id as id, answers, user, quiz, isSubmitted, COUNT(`userAnswers`.id) as total_answers FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\nWHERE isSubmitted = true\n"
  }

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

  // remove
  collection.schema.removeField("cghhtlza")

  // remove
  collection.schema.removeField("csop1xmo")

  // remove
  collection.schema.removeField("cbfcwnfb")

  // remove
  collection.schema.removeField("ogcyp0zm")

  // remove
  collection.schema.removeField("9mbxte3d")

  // remove
  collection.schema.removeField("zxnmdtln")

  // remove
  collection.schema.removeField("nis97frr")

  return dao.saveCollection(collection)
})
