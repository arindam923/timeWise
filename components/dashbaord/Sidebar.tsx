"use client";

import { Icon } from "@iconify/react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  ScrollShadow,
  Spacer,
  user,
} from "@nextui-org/react";
import SidebarComponent from "@/components/ui/Sidebar";
import { items } from "@/components/dashbaord/Sidebar-items";
import { useUser } from "@clerk/nextjs";

const Sidebar = () => {
  const { user } = useUser();

  return (
    <div className="h-dvh fixed top-0">
      <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-divider p-6">
        <div className="flex items-center gap-2 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            {/* <AcmeIcon className="text-background" /> */}
          </div>
          <span className="text-small font-bold uppercase">TimeWise</span>
        </div>
        <Spacer y={12} />
        <div className="flex items-center gap-3 px-4">
          <Avatar isBordered size="sm" src={user?.imageUrl} />
          <div className="flex flex-col">
            <p className="text-small font-medium text-default-600">
              {user?.fullName}
            </p>
            <p className="text-tiny text-default-400">
              @<strong>TIMEWISE</strong>
            </p>
          </div>
        </div>
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <SidebarComponent items={items} />
          <Card className="mx-2 overflow-visible" shadow="sm">
            <CardBody className="items-center py-5 text-center">
              <h3 className="text-medium font-medium text-default-700">
                Upgrade to Pro
                <span aria-label="rocket-emoji" className="ml-2" role="img">
                  🚀
                </span>
              </h3>
              <p className="p-4 text-small text-default-500">
                Get 1 month free and unlock all the features of the pro plan.
              </p>
            </CardBody>
            <CardFooter className="absolute -bottom-8 justify-center">
              <Button
                className="px-10 shadow-md"
                color="primary"
                radius="full"
                variant="shadow"
              >
                Upgrade
              </Button>
            </CardFooter>
          </Card>
        </ScrollShadow>
        <div className="mt-auto flex flex-col">
          <Button
            fullWidth
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon
                className="text-default-500"
                icon="solar:info-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Help & Information
          </Button>
          <Button
            className="justify-start text-default-500 data-[hover=true]:text-foreground"
            startContent={
              <Icon
                className="rotate-180 text-default-500"
                icon="solar:minus-circle-line-duotone"
                width={24}
              />
            }
            variant="light"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
