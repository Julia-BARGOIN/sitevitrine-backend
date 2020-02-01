const db = require("../models");

exports.createArticle = async function(req, res) {
  try {
    let newArticle = await db.Article.create({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      date: req.body.date
    });
    return res.status(200).json({
      message: "New article create successfulle",
      newArticle
    });
  } catch (error) {
    console.log("error article", error);
  }
};

exports.showArticles = async function(req, res) {
  try {
    let articles = await db.Article.find();
    return res.status(200).json(articles);
  } catch (error) {
    console.log("error showArticles", error);
  }
};
exports.showOneArticle = async function(req, res) {
  try {
    let article = await db.Article.findById(req.params.id);
    return res.status(200).json(article);
  } catch (error) {
    console.log("error showOneArticle", error);
  }
};

exports.deleteOneArticle = async function(req, res) {
  try {
    let deletedArticle = await db.Article.deleteOne({ _id: req.params.id });
    return res.status(200).json({
      message: "Article supprimé avec succès",
      article: deletedArticle
    });
  } catch (error) {
    console.log("error deleteOneArticle", error);
  }
};

exports.updateManyArticle = async function(res, req) {
  try {
    let updateManyArticle = await db.Article.updateMany();
    return res.status(200).json(updateManyAdmin);
  } catch (error) {
    console.log("error updateManyArticle", error);
  }
};
