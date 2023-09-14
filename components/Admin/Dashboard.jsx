const React = require("react");
const Layout = require("../Layout");
const AdminMenu = require("../AdminMenu");

function Dashboard() {
  return (
    <Layout title={title}>
      <AdminMenu />
    </Layout>
  );
}

module.exports = Dashboard;
