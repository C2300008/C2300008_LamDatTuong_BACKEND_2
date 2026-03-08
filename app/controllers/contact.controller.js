const { MongoDBCollectionNamespace } = require("mongodb");
const ApiError = require("../api-error");

exports.create = async (req, res, next) => {
  if (!req.body?.name) {
    return res.status(400).send({ message: "Name can not be empty" });
  }
  try {
    const ContactService = new ContactService(
      MongoDBCollectionNamespace.client,
    );
    return res.send(document);
  } catch (error) {
    return next(
      new ApiError(500, "An error occurred while creating the contact"),
    );
  }
};

exports.findAll = (req, res) => {
  res.send({ message: "findAll handler" });
};

exports.findOne = (req, res) => {
  res.send({ message: "findOne handler" });
};

exports.update = (req, res) => {
  res.send({ message: "update handler" });
};

exports.delete = (req, res) => {
  res.send({ message: "delete handler" });
};

exports.deleteAll = (req, res) => {
  res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
  res.send({ message: "findAllFavorite handler" });
};
