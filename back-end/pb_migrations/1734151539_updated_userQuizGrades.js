/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5")

  collection.options = {
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.user_name as user_name,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT \n  `userQuizzes`.id as id, \n  `userQuizzes`.answers as answers, \n  user, \n  quiz, \n  isSubmitted, \n  users.name as user_name,\n  COUNT(`userAnswers`.id) as total_answers \n  FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(`userQuizzes`.answers, \"$\") \n  WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\n  lEFT JOIN users ON \n  users.id = user\nWHERE isSubmitted = true\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // remove
  collection.schema.removeField("xib4fyqw")

  // remove
  collection.schema.removeField("qhkn9uvo")

  // remove
  collection.schema.removeField("mtg6yyax")

  // remove
  collection.schema.removeField("nr2zxegl")

  // remove
  collection.schema.removeField("jbcwh9h6")

  // remove
  collection.schema.removeField("hkeigzuz")

  // remove
  collection.schema.removeField("nspoyllx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e2ulwes2",
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
    "id": "shnu20ej",
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
    "id": "x1utaaoi",
    "name": "user_name",
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
    "id": "keyfqfl1",
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
    "id": "sy3uqj1l",
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
    "id": "ry6grldp",
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
    "id": "weatg8kj",
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
    "id": "zf7gxqja",
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
    "query": "SELECT \n  userQuizzes.id as id,\n  `userQuizzes`.answers as answers,\n  `userQuizzes`.user as user,\n  `userQuizzes`.quiz as quiz,\n  COUNT(questions.id) as total_questions,\n  `userQuizzes`.total_answers as total_answers,\n  `userQuizzes`.`isSubmitted` as isSubmitted,\n  ((`userQuizzes`.total_answers * 1.0) / COUNT(questions.id) * 100) as grade\nfrom (\n  SELECT \n  `userQuizzes`.id as id, \n  answers, \n  user, \n  quiz, \n  isSubmitted, \n  COUNT(`userAnswers`.id) as total_answers \n  FROM `userQuizzes`\n  LEFT JOIN answers `userAnswers` ON EXISTS (\n  SELECT 1 FROM JSON_EACH(answers, \"$\") \n  WHERE value = `userAnswers`.id AND `userAnswers`.isCorrect = TRUE\n  )\nWHERE isSubmitted = true\n) `userQuizzes`\nLEFT JOIN (quizzes LEFT JOIN questions ON \n  questions.quiz = quizzes.id) ON \n  quizzes.id = `userQuizzes`.quiz\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xib4fyqw",
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
    "id": "qhkn9uvo",
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
    "id": "mtg6yyax",
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
    "id": "nr2zxegl",
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
    "id": "jbcwh9h6",
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
    "id": "hkeigzuz",
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
    "id": "nspoyllx",
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
  collection.schema.removeField("e2ulwes2")

  // remove
  collection.schema.removeField("shnu20ej")

  // remove
  collection.schema.removeField("x1utaaoi")

  // remove
  collection.schema.removeField("keyfqfl1")

  // remove
  collection.schema.removeField("sy3uqj1l")

  // remove
  collection.schema.removeField("ry6grldp")

  // remove
  collection.schema.removeField("weatg8kj")

  // remove
  collection.schema.removeField("zf7gxqja")

  return dao.saveCollection(collection)
})
