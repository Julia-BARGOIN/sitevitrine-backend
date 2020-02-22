const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  },
  {
    collection: "articles",
    minimize: false,
    versionKey: false
  }
);

const Article = mongoose.model("article", articleSchema);
module.exports = Article;
