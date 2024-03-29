import React from "react";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className="tu-preloader">
      <div className="tu-preloader_holder">
        <img src="images/favicon.png" alt="laoder img" />
        <div className="tu-loader"></div>
      </div>
    </div>
  );
};

export default Loader;
