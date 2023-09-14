const React = require("react");

function SocialLink() {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex fle-row">
        <div className="social">
          <a href="/">
            <img src="./images/tel.svg" alt="" width={32} height={32} />
          </a>
        </div>
        <div className="social">
          <a href="/">
            <img src="./images/tel.svg" alt="" width={32} height={32} />
          </a>
        </div>
        <div className="social">
          <a href="/">
            <img src="./images/tel.svg" alt="" width={32} height={32} />
          </a>
        </div>
        <div className="social">
          <a href="/">
            <img src="./images/tel.svg" alt="" width={32} height={32} />
          </a>
        </div>
      </div>
      <p>
        All manufacturer names, symbols, and descriptions, used in our images
        and text are used solely for identification purposes only. It is neither
        inferred nor implied that any item sold by CARiD.com is a product
        authorized by or in any way connected with any vehicle manufacturers
        displayed on this page. more details on - https://www.ehvost.com/
      </p>
    </div>
  );
}

module.exports = SocialLink;
