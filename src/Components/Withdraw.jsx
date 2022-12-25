import React from "react";
import { useSelector } from "react-redux";

const Withdraw = () => {
  const withdraw = useSelector((state) => state.withdraw);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">Withdraw</h2>
          <p className="text-2xl font-semibold">$ {withdraw}</p>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
