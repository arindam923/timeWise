

import { ReactNode } from "react";
import dynamic from "next/dynamic";


const Sidebar = dynamic(() => import("@/components/dashbaord/Sidebar"), {
  ssr: false,
});

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
