FORMAT: 1A

# To-do アイテムコレクション [/v1/items]

## すべての To-do アイテムを取得 [GET]

* `curl -i -H 'Content-type: application/json' -X GET http://localhost:3010/v1/items`

+ Response 200 (application/json)

        [
          { "id": 1, "state": "active", "name": "TODO 1", "note": "Note for TODO 1" },
          { "id": 2, "state": "active", "name": "TODO 2", "note": "Note for TODO 2" },
          { "id": 3, "state": "active", "name": "TODO 3", "note": "Note for TODO 3" },
          { "id": 4, "state": "active", "name": "TODO 4", "note": "Note for TODO 4" },
          { "id": 5, "state": "active", "name": "TODO 5", "note": "Note for TODO 5" }
        ]

## To-do アイテムを作成 [POST]

* `curl -i -H 'Content-type: application/json' -X POST http://localhost:3010/v1/items -d '{ "name": "TODO 6", "note": "Note for TODO 6" }'`

+ Request (application/json)

        {
          "name": "TODO 6",
          "note": "Note for TODO 6"
        }

+ Response 200 (application/json)

        {
          "id": 6,
          "state": "active",
          "name": "TODO 6",
          "note": "Note for TODO 6"
        }

## To-do アイテム単体への操作 [/v1/items/{id}]

+ Parameters
    + id: 6 (number) - ID of item

### To-do アイテムの詳細を取得 [GET]

* `curl -i -H 'Content-type: application/json' -X GET http://localhost:3010/v1/items/6`

+ Response 200 (application/json)

        {
          "id": 6,
          "state": "active",
          "name": "TODO 6",
          "note": "Note for TODO 6"
        }

### To-do アイテムを更新 [PUT]

* `curl -i -H 'Content-type: application/json' -X PUT http://localhost:3010/v1/items/6 -d '{ "name": "TODO 6 [edit]", "note": "Note for TODO 6 [edit]" }'`

+ Request (application/json)

    + Headers
 
            Accept: application/json

    + Parameters

        + id: 6 (number, required) - ID of item

    + Attributes

        + name: "TODO 6 [edit]" (string, required)
        + note: "Note for TODO 6 [edit]" (string, required)

+ Response 201 (application/json)

        {
          "id": 6,
          "state": "active",
          "name": "TODO 6 (edit)",
          "note": "Note for TODO 6 (edit)"
        }

### To-do アイテムを削除 [DELETE]

* `curl -i -H 'Content-type: application/json' -X DELETE http://localhost:3010/v1/items/6`

+ Response 204

## To-do アイテムの未完了・完了に関する処理 [/v1/items/{item_id}/completion]

+ Parameters
    + item_id: 3 (number) - ID of item

### To-do アイテムを「完了」状態に更新する [PUT]

* `curl -i -H 'Content-type: application/json' -X PUT http://localhost:3010/v1/items/3/completion`

+ Response 201 (application/json)

### To-do アイテムを「未完了」状態に更新する [DELETE]

* `curl -i -H 'Content-type: application/json' -X DELETE http://localhost:3010/v1/items/3/completion`

+ Response 201
