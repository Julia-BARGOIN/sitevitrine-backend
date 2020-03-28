const db = require("../models");

exports.createArticle = async function(req, res) {
  try {
    let newArticle = await db.Article.create({
      title: req.body.title,
      text: req.body.text,
      author: req.body.author,
      date: new Date()
    });
    return res.status(200).json({
      message: "New article create successful",
      newArticle
    });
  } catch (error) {
    console.log("error article", error);
  }
};

exports.showArticles = async function(req, res) {
  try {
    let articles = await db.Article.aggregate([
      {
        $sort: {
          date: -1
        }
      },
      {
        $limit: req.body.limit || 10
      }
    ]);
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
    console.log("error article", error);
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

exports.updateArticle = async function(req, res) {
  try {
    console.log(req.body);
    const article = await db.Article.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        text: req.body.text,
        author: req.body.author,
        date: new Date()
      },
      { new: true }
    );
    return res.status(200).json(article);
  } catch (error) {
    console.log("error updateArticle", error);
  }
};
