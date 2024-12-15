/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "130f90b7mrjm19j",
    "created": "2024-12-02 17:30:54.690Z",
    "updated": "2024-12-02 17:30:54.690Z",
    "name": "attachments",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "shn17lxo",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("130f90b7mrjm19j");

  return dao.deleteCollection(collection);
})
