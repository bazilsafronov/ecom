const React = require("react");

function Category() {
  return (
    <>
      <ul className="nav justify-content-center">
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Parts
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Wheels
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Exterior
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Lighting
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Body Parts
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Interior
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Audio & Electronics
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Tools
          </a>
        </li>
        <li className="nav-item category-text">
          <a href="/" className="nav-link">
            Specialty
          </a>
        </li>
      </ul>
    </>
  );
}

module.exports = Category;
