const React = require("react");

function AdminMenu() {
  return (
    <div>
      <ul>
        <li>
          <a href="/create-product">Create new product</a>
        </li>
        <li>
          <a href="/update-product">Update product</a>
        </li>
        <li>
          <a href="/delete-product">Delete product</a>
        </li>
      </ul>
    </div>
  );
}

module.exports = AdminMenu;
