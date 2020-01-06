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
