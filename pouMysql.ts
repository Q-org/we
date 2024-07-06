const express = require("express");
const router = express.Router();
const PouchDB = require("pouchdb").plugin(require("pouchdb-find"));
const sqldown = require("sqldown");

// Fernando's data object
const fernando = {
  _id: "fernando",
  idade: 31,
  site: "https://fernandobhz.github.io",
};

// MySQL connection string
const myconn = "mysql://root:Abc741963.@localhost/msch";

// Configure PouchDB to use sqldown adapter
const SqlDownDB = PouchDB.defaults({
  db: function (location) {
    return new sqldown(myconn + "?table=" + location);
  },
});

// Create a new PouchDB instance
const db = new SqlDownDB("abc");

router.get("/", async function (req, res) {
  let existing;

  // Try to get the existing document
  try {
    existing = await db.get("fernando");
  } catch (err) {
    // Handle errors (e.g., document not found)
  }

  // If the document exists, remove it
  if (existing) {
    console.log("Existing document:", existing);
    await db.remove(existing);
  }

  // Put the new document
  await db.put(fernando);

  // Respond with the new document
  res.json(await db.get("fernando"));

  // Create an index (this should be done outside of the route handler)
  db.createIndex({
    index: {
      fields: ["foo"],
    },
  })
    .then(function (result) {
      console.log("Index created:", result);
    })
    .catch(function (err) {
      console.log("Index creation error:", err);
    });
});

module.exports = router;
