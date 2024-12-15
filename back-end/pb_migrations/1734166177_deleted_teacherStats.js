/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "a8v3pkkqusobpw3",
    "created": "2024-12-14 07:43:32.153Z",
    "updated": "2024-12-14 07:46:40.471Z",
    "name": "teacherStats",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hzliwzq7",
        "name": "materialsCount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "1xgairyu",
        "name": "assignmentsCount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "vxhjjfib",
        "name": "quizzesCount",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n  classes.id AS id, \n  COUNT(materials.id) AS materialsCount,\n  COUNT(assignments.id) AS assignmentsCount,\n  COUNT(quizzes.id) AS quizzesCount\nFROM classes\nLEFT JOIN materials ON\n  materials.classroom = classes.id\nLEFT JOIN assignments ON\n  assignments.classroom = classes.id\nLEFT JOIN quizzes ON\n  quizzes.classroom = classes.id"
    }
  });

  return Dao(db).saveCollection(collection);
})
