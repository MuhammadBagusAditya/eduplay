/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z6v5tn3ug55zs4b",
    "created": "2024-12-14 00:39:16.016Z",
    "updated": "2024-12-14 00:39:16.016Z",
    "name": "userAssignmentGrades",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id FROM `userAssignments`"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z6v5tn3ug55zs4b");

  return dao.deleteCollection(collection);
})
