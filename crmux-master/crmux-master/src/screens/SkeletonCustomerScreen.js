import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCustomerScreen() {
  return (
    <>
      <div>
        <Skeleton height={240} width={320} />
      </div>
      <div>
        <Skeleton height={32} width={120} />
      </div>
      <ul className="interactions">
        {Array(4)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <Skeleton height={20} width={320} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default SkeletonCustomerScreen;
