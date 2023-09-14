require("@babel/register");

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionConfig = require("./sessionConfig");

const indexRouter = require("./routes/index.routes");
const categoriesRouter = require("./routes/catalog.routes");
const adminRouter = require("./routes/admin/product.routes");
const authRouter = require("./routes/auth.routes");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
app.use(session(sessionConfig));

app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/catalog", categoriesRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server started port: ${PORT}`);
});
