const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const CategoryPage = require("../components/PageCategory/CategoryPage");

const router = express.Router();

router.get("/", (req, res) => {
  const main = React.createElement(CategoryPage, {
    title: "Ehvost - Category",
  });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write("<!DOCTYPE html>");
  res.end(html);
});

module.exports = router;
