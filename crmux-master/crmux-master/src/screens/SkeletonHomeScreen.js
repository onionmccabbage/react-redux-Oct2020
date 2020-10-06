import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonHomeScreen() {
  return (
    <>
      <div className="homeMessage">
        <Skeleton height={30} width={320} />
      </div>

      <ul className="actions">
        {Array(7)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <Skeleton height={160} width={240} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default SkeletonHomeScreen;
