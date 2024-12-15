/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT \n  `userQuizzes`.id as id, \n  answers, \n  user, \n  quiz, \n  isSubmitted, \n  COUNT(`userAnswers`.id) as total_answers \n  FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") \n  WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\nWHERE isSubmitted = true\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hguj0tme",
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
    "id": "e5b0wpss",
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
    "id": "fgco4buf",
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
    "id": "wonzsryw",
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
    "id": "lvi6nppy",
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
    "id": "wt9o77c7",
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
    "id": "bjcnhkoy",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT \n  `userQuizzes`.id as id, \n  answers, \n  user, \n  quiz, \n  isSubmitted, \n  COUNT(`userAnswers`.id) as total_answers \n  FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") \n  WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n\nWHERE isSubmitted = true"
  }

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

  // remove
  collection.schema.removeField("hguj0tme")

  // remove
  collection.schema.removeField("e5b0wpss")

  // remove
  collection.schema.removeField("fgco4buf")

  // remove
  collection.schema.removeField("wonzsryw")

  // remove
  collection.schema.removeField("lvi6nppy")

  // remove
  collection.schema.removeField("wt9o77c7")

  // remove
  collection.schema.removeField("bjcnhkoy")

  return dao.saveCollection(collection)
})
