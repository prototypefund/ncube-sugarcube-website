import React from "react";
import { Link } from "gatsby";

const BillBoard = () => {
  return (
    <div className="flex flex-column justify-around mw8 center pl4">
      <div className="fl">
        <h2 className="w-100 mt0 header2-neg">
          Data pipelines for human rights.
        </h2>
        <p>
          A collection of tools to support human rights defenders and
          investigative journalists to conduct data based investigations. They
          help to develop compelling stories which expose the misuse of power
          and human rights abuses.
        </p>
      </div>
      <div className="fl flex mt3">
        <Link
          className="btn btn-large btn-billboard mr3 flex flex-column justify-around"
          to="/get-in-touch"
        >
          <span>Get in Touch</span>
        </Link>
        <p>
          We would love to hear from you if you are interested in using data for
          your next investigation.
        </p>
      </div>
    </div>
  );
};

export default BillBoard;