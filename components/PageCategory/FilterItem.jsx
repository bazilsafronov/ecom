const React = require("react");

function FilterItem() {
  return (
    <div className="filter_column">
      <fieldset>
        <div>
          <legend className="title">Category</legend>
        </div>
        <div>
          <ul>
            <li>
              <label>All products</label>
              <input type="checkbox" name="checkbox" id="" />
            </li>
          </ul>
        </div>
      </fieldset>
    </div>
  );
}

module.exports = FilterItem;
