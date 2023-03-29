const { MongoClient } = require("mongodb");

let MongoDBConnection;

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect(`mongodb://127.0.0.1:27017/bookshelf`) // mongodb://127.0.0.1:27017/Your_DB_Name OR mongodb://localhost:27017/Your_DB_Name
      .then((Client) => {
        MongoDBConnection = Client.db();
        return cb();
      })
      .catch((error) => {
        console.log("Unable to connect to MongoDB", error);
        cb(error);
      });
  },
  GetMongoDB: () => MongoDBConnection,
};
