import { MdNoFood } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { MdNightlife } from "react-icons/md";
import { useState } from "react";
import DiningOut from "../../pages/diningOut";

const Tabs = () => {
  const [Activetab, setActivetab] = useState("Dining Out");

  return (
    <>
      <div className="flex items-center gap-12 px-32 h-20 mt-8 text-gray-700">
        <section
          className={`flex items-center gap-2 cursor-pointer hover:text-red-500 hover:border-b transition p-4 
    ${
      Activetab === "Dining Out"
        ? "text-red-500 border-b-2 border-red-500"
        : "text-gray-700"
    }
  `}
          onClick={() => setActivetab("Dining Out")}
        >
          <MdNoFood className="text-5xl border rounded-2xl p-2 bg-gray-100 " />
          <h1 className="text-lg">Dining Out</h1>
        </section>

        <section
          className="flex items-center gap-2 cursor-pointer hover:text-red-500 hover:border-b transition p-4"
          onClick={() => setActivetab("Delivery")}
        >
          <MdDeliveryDining className="text-5xl border rounded-2xl p-1 bg-gray-100" />
          <h1 className="text-lg">Delivery</h1>
        </section>

        <section
          className="flex items-center gap-2 cursor-pointer hover:text-red-500 hover:border-b transition p-4 "
          onClick={() => setActivetab("NightLife")}
        >
          <MdNightlife className="text-5xl border rounded-2xl p-1 bg-gray-100 " />
          <h1 className="text-lg">NightLife</h1>
        </section>
      </div>

      {Activetab === "Dining Out" && <DiningOut />}

      {Activetab === "Delivery" && (
        <h1 className="px-32 text-2xl">Delivery Content</h1>
      )}

      {Activetab === "NightLife" && (
        <h1 className="px-32 text-2xl">NightLife Content</h1>
      )}
    </>
  );
};

export default Tabs;
