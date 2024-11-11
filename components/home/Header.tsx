import { Button } from "@nextui-org/react";
import Link from "next/link";

const Header = () => {
  const tabs = [
    {
      id: 0,
      name: "Home",
      href: "/",
    },
    {
      id: 1,
      name: "About",
      href: "#about-us",
    },
    {
      id: 3,
      name: "Features",
      href: "/features",
    },
    {
      id: 4,
      name: "Pricing",
      href: "/pricing",
    },
    {
      id: 2,
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="contianer border-b border-gray-900 max-w-5xl mx-auto flex flex-col items-center justify-between py-6 sm:flex-row">
      <h1 className="text-3xl font-bold tracking-tight text-gray-200">
        TimeWise
      </h1>
      <nav className="flex text-sm  space-x-10">
        {tabs.map((tab) => (
          <Link key={tab.id} href={tab.href}>
            <p className="p-2 text-gray-200 dark:text-gray-200 hover:text-gray-700">
              {tab.name}
            </p>
          </Link>
        ))}
      </nav>
      <div>
        <Button className="bg-black text-white">Get Started</Button>
        <Button variant="bordered">Sign Up</Button>
      </div>
    </header>
  );
};

export default Header;
