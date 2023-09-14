const React = require("react");

function BannerFilter() {
  return (
    <div className="banner">
      <div className="d-flex flex-column banner_main">
        <h2 className="banner_title">SELECT YOUR VEHICLE</h2>
        <p className="banner_desc">
          Customize, Modify, Upgrade, Repair, Replace
        </p>
      </div>
      <div className="btn-group">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Year
        </button>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          Make
        </button>
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          MODEL
        </button>

        <ul className="dropdown-menu" aria-labelledby="dLabel">
          <li>
            <a className="dropdown-item" href="#">
              2010
            </a>
          </li>
        </ul>
        <button className="btn btn-danger" type="submit">
          GO
        </button>
      </div>
    </div>
  );
}

module.exports = BannerFilter;
