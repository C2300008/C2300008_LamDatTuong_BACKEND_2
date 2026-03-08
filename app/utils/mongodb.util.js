const { MongoClient } = require("mongodb"); // Import MongoClient from the mongodb package
class MongoDB {
  static connect = async (uri) => {
    if (this.client) return this.client; // return existing client if already connected

    this.client = await MongoClient.connect(uri); // connect to MongoDB server
    return this.client; // return the connected client
  };
}
module.exports = MongoDB; // Export the MongoDB class
