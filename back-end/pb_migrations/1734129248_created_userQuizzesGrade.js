/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "owh7vddqzg8cti5",
    "created": "2024-12-13 22:34:08.613Z",
    "updated": "2024-12-13 22:34:08.613Z",
    "name": "userQuizzesGrade",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM userQuizzes"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("owh7vddqzg8cti5");

  return dao.deleteCollection(collection);
})
