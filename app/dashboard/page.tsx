import Balance from "./Balance";
import DasboardLayout from "./layout";
import PaymentMethod from "./PaymentMethod";
import Sidebar from "./Sidebar";
import { IoAddCircleOutline } from "react-icons/io5";
function Dashboard() {
  return (
    <section className="flex flex-row min-h-screen p-5 ">
      <Sidebar />
      <main className="flex-1">
        <div className="flex flex-col gap-2  pb-4 w-full md:w-3/4">
          <div className="flex flex-col items-center md:items-start ml-4 gap-2">
            <h4 className="text-white pt-6 font-bold">Welcome, Attai</h4>
            <div className="flex flex-col flex-wrap mt-3 gap-2 md:flex-row  ">
              <Balance />
              <Balance />
              <Balance />
            </div>
          </div>
          <div className="h-8 bg-gray-900  flex items-center  justify-between ml-4 px-10 w-[calc(100%_-_6.5rem)] rounded-md">
            <p className="text-xs text-white ">Payment Methods</p>
            <button className="text-white font-bold">
              <IoAddCircleOutline />
            </button>
          </div>
          <div className="flex flex-col flex-wrap gap-2 items-center ml-4 md:flex-row">
            <PaymentMethod />
            <PaymentMethod />
            <PaymentMethod />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Dashboard;
