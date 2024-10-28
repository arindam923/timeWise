import { Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export const items = [
  {
    key: "home",
    href: "/dashboard",
    icon: "solar:home-2-linear",
    title: "Home",
  },
  {
    key: "projects",
    href: "/dashboard/projects",
    icon: "solar:widget-2-outline",
    title: "Projects",
    endContent: (
      <Icon
        className="text-default-400"
        icon="solar:add-circle-line-duotone"
        width={24}
      />
    ),
  },
  {
    key: "tasks",
    href: "/dashboard/tasks",
    icon: "solar:checklist-minimalistic-outline",
    title: "Tasks",
    endContent: (
      <Icon
        className="text-default-400"
        icon="solar:add-circle-line-duotone"
        width={24}
      />
    ),
  },
  {
    key: "tracker",
    href: "#",
    icon: "solar:sort-by-time-linear",
    title: "Tracker",
    endContent: (
      <Chip size="sm" color="primary" variant="flat">
        New
      </Chip>
    ),
  },
  {
    key: "settings",
    href: "/dashboard/settings",
    icon: "solar:settings-outline",
    title: "Settings",
  },
];
