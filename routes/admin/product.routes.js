const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  const main = React.createElement(Dashboard, {
    title: "Admin | Dashboard",
  });
  const html = ReactDOMServer.renderToStaticMarkup(main);
  res.write("<!DOCTYPE html>");
  res.end(html);
});

module.exports = router;
