import "./App.css";
import Deposit from "./Components/Deposit";
import Withdraw from "./Components/Withdraw";
import Balance from "./Components/Balance";
import InputDeposit from "./Components/InputDeposit";
import InputWithdraw from "./Components/InputWithdraw";

function App() {
  return (
    <div className="App bg-gradient-to-r from-[#f9cdc3] to-[#e1dae6]  min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 px-10 gap-10 max-w-7xl pt-10 md:pt-32 mx-auto">
        <Deposit></Deposit>
        <Withdraw></Withdraw>
        <Balance></Balance>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pb-10 px-10 gap-10 mt-10 max-w-4xl  mx-auto">
        <InputDeposit></InputDeposit>
        <InputWithdraw></InputWithdraw>
      </div>
    </div>
  );
}

export default App;
