import React from "react";

export default function Load() {
  return (
    <div>
      <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue-only">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
