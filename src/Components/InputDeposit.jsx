import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

const InputDeposit = () => {
  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();
    const amount = parseFloat(e.target.amount.value);
    dispatch({ type: "DEPOSIT", payload: amount });
    toast.success("Deposit successful");
    e.target.reset();
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <form onSubmit={handleDeposit}>
          <input
            type="number"
            name="amount"
            required
            placeholder="$ Amount"
            className="input input-bordered w-full"
          />
          <div className="flex mt-3 justify-center">
            <button
              type="submit"
              className="w-36 rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative text-lg">Deposit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputDeposit;
