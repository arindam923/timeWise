import Header from "@/components/home/Header";
import { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HomeLayout;
