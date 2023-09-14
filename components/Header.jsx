const React = require("react");

module.exports = function Header() {
  return (
    <nav className="navbar navbar-light">
      <a href="/" className="navbar-brand">
        <img src="./images/batman.png" alt="" width={64} height={48} />
        <span>e-hvost</span>
      </a>
      <div className="d-flex">
        <input
          className="form-control input-header"
          type="search"
          placeholder="Search by make Model, Year, Product Type ..."
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </div>
      <div className="account">
        <div className="descr">
          <h3>My account</h3>
          <a
            href="/auth/login"
            className="btn btn-success btn-login"
            type="submit"
          >
            Log In
          </a>
          <p>
            New Customer?{" "}
            <span>
              <a href="/auth/signup">Sign Up</a>
            </span>
          </p>
        </div>
        <a href="/">
          <img src="images/profile.svg" alt="profile" />
          <span>Account</span>
        </a>
        <a href="/">
          <img src="images/cart.svg" alt="cart" />
          <span>Cart</span>
        </a>
      </div>
    </nav>
  );
};
