import React from "react";
import toast from "react-hot-toast";
import SidebarLayout from "./SidebarLayout";
import { MoneyEmptyWalletTimeBold } from "react-icons-sax";

const iconColor = "#4c49ee";
const Sidebar = () => {
  return (
    <SidebarLayout>
      <section>
        <div className="h-screen w-1/5 bg-white py-10 px-3 fixed rounded-tr-xl rounded-br-xl">
          <div className="logo flex items-center">
            <MoneyEmptyWalletTimeBold size="32" color={iconColor} />
            <h1 className="font-extrabold text-lg">Fin<spna className="text-[#4c49ee]">Dash</spna></h1>
          </div>
        </div>
      </section>
    </SidebarLayout>
  );
};

export default Sidebar;
