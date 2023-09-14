const React = require("react");
const Layout = require("./Layout");
const Header = require("./Header");
const Category = require("./Category");
const BannerFilter = require("./BannerFilter");
const CategorySection = require("./CategorySection");
const SectionSale = require("./SectionSale");
const SectionBlock = require("./SectionBlock");
const Footer = require("./Footer");

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <Header />
      <Category />
      <BannerFilter />
      <CategorySection />
      <SectionSale />
      <SectionBlock />
      <Footer />
    </Layout>
  );
};
