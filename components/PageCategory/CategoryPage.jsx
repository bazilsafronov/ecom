const React = require("react");
const Layout = require("../Layout");
const Header = require("../Header");
const Category = require("../Category");
const ProductList = require("./ProductList");
const FilterItem = require("./FilterItem");

function CategoryPage({ title }) {
  return (
    <Layout title={title}>
      <Header />

      <div className="header_product d-flex justify-content-center">
        <img src="./images/header_product.jpg" alt="" />
      </div>
      <div className="">
        <Category />
        <FilterItem />
      </div>
      <ProductList />
    </Layout>
  );
}

module.exports = CategoryPage;
