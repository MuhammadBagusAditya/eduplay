/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a8v3pkkqusobpw3",
    "created": "2024-12-14 07:43:32.153Z",
    "updated": "2024-12-14 07:43:32.153Z",
    "name": "teacherStats",
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
      "query": "SELECT id from users"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a8v3pkkqusobpw3");

  return dao.deleteCollection(collection);
})
