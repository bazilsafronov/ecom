const router = require("express").Router();
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const LoginPage = require("../components/Login/LoginPage");
const Registration = require("../components/Registration/Registration");

router
  .route("/login")
  .get((req, res) => {
    const login = React.createElement(LoginPage, { title: "Login Page" });
    const html = ReactDOMServer.renderToStaticMarkup(login);
    res.write("<!DOCTYPE html>");
    res.end(html);
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    try {
      const isUserDB = await User.finOne({
        where: email,
      });
    } catch (e) {
      console.error(e);
      return res.status(401).end();
    }
  });

router.get("/signup", (req, res) => {
  const signup = React.createElement(Registration, {
    title: "Регистриация в системе",
  });
  const html = ReactDOMServer.renderToStaticMarkup(signup);
  res.write("<!DOCTYPE html>");
  res.end(html);
});
module.exports = router;
