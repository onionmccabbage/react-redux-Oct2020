import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCustomers() {
  return (
    <>
      <div className="customerSearch">
        <Skeleton height={30} width={80} />
      </div>

      <ul className="customers">
        {Array(9)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <Skeleton height={240} width={320} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default SkeletonCustomers;
