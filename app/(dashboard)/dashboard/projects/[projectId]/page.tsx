import { Avatar, Button, Chip } from "@nextui-org/react";
import { Icon } from "@iconify/react";

const ProjectPage = ({ params }: { params: { projectId: string } }) => {
  const menuItems = [
    {
      id: 0,
      name: "WorkLoad",
      icon: "icon-park-outline:chart-graph",
    },
    {
      id: 1,
      name: "List",
      icon: "ic:round-list",
    },
    {
      id: 2,
      name: "Calendar",
      icon: "ic:round-date-range",
    },
    {
      id: 3,
      name: "Kanban",
      icon: "bi:kanban-fill",
    },
    {
      id: 4,
      name: "TimeLine",
      icon: "gravity-ui:list-timeline",
    },
  ];

  const settings = [
    {
      id: 0,
      name: "All Task",
      icon: "lets-icons:check-fill",
    },
    {
      id: 1,
      name: "Priority",
      icon: "hugeicons:arrow-up-down",
    },
    {
      id: 2,
      name: "Hidden",
      icon: "formkit:hidden",
    },
  ];
  return (
    <div className="flex-1 flex flex-col ml-72 ">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Avatar
              size="sm"
              src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
            />
            <div>
              <div className="flex text-sm text-gray-800 dark:text-gray-600 items-center gap-2">
                <p>Projects</p>/<p>Cross Functional Project Plan</p>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold">
                  Cross Functional Project Plan
                </h3>
                <Icon icon="solar:star-outline" />
                <Chip
                  startContent={
                    <div className="w-2 h-2 text-sm font-semibold rounded-full bg-green-500" />
                  }
                  variant="faded"
                  color="success"
                  className="p-1"
                >
                  ON TRACK
                </Chip>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              startContent={<Icon icon="bxs:customize" />}
              variant="bordered"
              className="uppercase font-semibold"
            >
              customize
            </Button>
            <Button
              startContent={<Icon icon={"ic:round-share"} />}
              className="uppercase font-semibold"
              variant="solid"
              color="danger"
            >
              Share
            </Button>
          </div>
        </div>
        <div>
          <div className="divide-x  cursor-pointer text-sm flex gap-2 text-gray-600 divide-gray-200 dark:divide-gray-800">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-center gap-2 px-4 py-1">
                <Icon icon={item.icon} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-2 items-center justify-between">
          <Button
            startContent={<Icon icon="ic:round-add" />}
            className="bg-indigo-600"
          >
            Add Task
          </Button>

          <div>
            {settings.map((item) => (
              <Button
                key={item.id}
                variant="light"
                startContent={<Icon icon={item.icon} />}
              >
                {item.name}
              </Button>
            ))}
            <Button variant="light" isIconOnly>
              <Icon icon="ph:dots-three-vertical" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black">heloo</div>
    </div>
  );
};

export default ProjectPage;
