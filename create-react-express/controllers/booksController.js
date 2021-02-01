const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll:async function(req, res) {
    try{
    const result = await db.Book.find(req.query).sort({ date: -1 })
      res.json(result)
    }catch (error){
      res.status(400);
      res.json({
        error:error
      });
    }
  },

  findById:async function(req, res) {
    const result = await db.Book.findById(req.params.id)
      res.json(result)
  },
  create:async function(req, res) {
    const result = await db.Book.create(req.body)
      res.json(result)
  },
  update:async function(req, res) {
    const result = await db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      res.json(result)
  },
  remove:async function(req, res) {
    const result = await db.Book.findById({ _id: req.params.id })
      const removeItem= result.remove();
      res.json(removeItem)
  }
};
