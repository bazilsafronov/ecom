const React = require("react");

function ProductList({user}) {
  return (
    <> 
    {user ? (
      <div>
        <div className="product">
          <img src="./images/test.jpg" alt="" width={250} height={250} />
          <div className="product_section">
            <h2 className="product_title">Original(OEM) Exhaust Parts</h2>
            <div className="rating">
              <span>
                <img className="product_img" src="./images/stars.svg" alt="" />
              </span>
            </div>
            <p className="product_desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              aliquam natus repellat aspernatur debitis tempore doloremque harum
              dolor voluptatum! Ducimus nihil amet velit ipsa consequuntur culpa
              illum laboriosam facere soluta?
            </p>
          </div>
          <div className="product_price">
            <h3>$432.02</h3>
            <button type="button" className="btn btn-outline-dark btn-lg">
              VIEW DETAILS
            </button>
          </div>
        </div>
      </div>) : (
<div>
        <div className="product">
          <img src="./images/test.jpg" alt="" width={250} height={250} />
          <div className="product_section">
            <h2 className="product_title">Original(OEM) Exhaust Parts</h2>
            <div className="rating">
              <span>
                <img className="product_img" src="./images/stars.svg" alt="" />
              </span>
            </div>
            <p className="product_desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              aliquam natus repellat aspernatur debitis tempore doloremque harum
              dolor voluptatum! Ducimus nihil amet velit ipsa consequuntur culpa
              illum laboriosam facere soluta?
            </p>
          </div>
          <div className="product_price">
            <h3>$432.02</h3>
            <button type="button" className="btn btn-outline-dark btn-lg">
              VIEW DETAILS
            </button>
          </div>
        </div>
      )}
    </>
  );
}

module.exports = ProductList;
