const React = require("react");

function SectionSale() {
  return (
    <div className=" d-flex flex-row justify-content-center">
      <div className="d-flex flex-column">
        <div className="card-one p-2">
          <button className="btn btn-danger" type="submit">
            SHOP NOW
          </button>
        </div>
        <div className="card-two p-2">
          <button className="btn btn-danger" type="submit">
            SHOP NOW
          </button>
        </div>
      </div>
      <div className="card-center ">
        <button className="btn btn-danger" type="submit">
          SHOP NOW
        </button>
      </div>
      <div>
        <div className="card-one">
          <button className="btn btn-danger" type="submit">
            SHOP NOW
          </button>
        </div>
        <div className="card-two">
          <button className="btn btn-danger" type="submit">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

module.exports = SectionSale;
