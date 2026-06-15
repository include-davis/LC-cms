
  module.exports = {
    async up(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "board_members",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "first_name",
              "last_name",
              "position",
              "major",
              "instragram",
              "linkedin",
              "photo"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "first_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "last_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "pronouns": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "position": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "year": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "major": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "interests": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "outside_activities": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "fun_fact": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "instragram": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "linkedin": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              }
            }
          }
        }
      });

      // create step 
    },
    async down(db, client) {
      // delete step 

      // update step 
      await db.command({
        collMod: "board_members",
        validator: {
          "$jsonSchema": {
            "bsonType": "object",
            "required": [
              "_name",
              "first_name",
              "last_name",
              "position",
              "major",
              "photo"
            ],
            "properties": {
              "_id": {
                "bsonType": "objectId"
              },
              "_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "_published": {
                "bsonType": "bool"
              },
              "_created_at": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "_last_modified": {
                "bsonType": "string",
                "description": "must be a string and match the ISO 8601 format",
                "pattern": "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$"
              },
              "first_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "last_name": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "pronouns": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "position": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "year": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "major": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "interests": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "outside_activities": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "fun_fact": {
                "bsonType": "string",
                "description": "Must be a string and is required"
              },
              "photo": {
                "bsonType": "array",
                "items": {
                  "bsonType": "objectId"
                }
              }
            }
          }
        }
      });
      
      // create step     
    }
  };
  