'use client'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  useDisclosure,
} from "@nextui-org/react";
import { Icon } from "@iconify/react";
import NewTaskModal from "@/components/dashbaord/NewTaskModal";
import { useTaskStore } from "@/store/taskStore";

const Dashboard = () => {

  const {isOpen,onOpen,onOpenChange} = useDisclosure()
  const tasks = useTaskStore((state) => state.tasks)

  const totalTasks = tasks.length
  const totalTimeSpent = tasks.reduce((acc,task) => acc +(task.duration||0),0)

  return (
    <div className="flex-1 ml-72 bg-slate-100 h-screen dark:bg-zinc-900 p-6">
      <div className="flex mb-4 items-center justify-between">
        <div>
          <h3 className="text-xl font-medium dark:text-gray-200 text-gray-900">
            Hello, <strong>Arindam</strong>
          </h3>
          <p className="text-tiny text-default-400">
            Let&apos;s get <strong>things</strong> done!
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            className="dark:border-gray-700 border-gray-400 dark:text-gray-200 text-gray-700"
            isIconOnly
            aria-label="Search"
            color="default"
            variant="bordered"
          >
            <Icon fontSize={18} icon="mynaui:search" />
          </Button>

          <Button
            isIconOnly
            className="dark:border-gray-700 border-gray-400 dark:text-gray-200 text-gray-700"
            color="default"
            aria-label="Share"
            variant="bordered"
          >
            <Icon radius={""} fontSize={18} icon="material-symbols:share" />
          </Button>
          <Button
            radius="full"
            onPress={onOpen}
            endContent={<Icon fontSize={24} icon="carbon:add" />}
            color="primary"
            variant="solid"
          >
            New Task
          </Button>
        </div>
      </div>

      <NewTaskModal isOpen={isOpen} onOpenChange={onOpenChange} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {/* Tasks Created Card */}
        <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Icon icon="lets-icons:check-fill" />
                <p className="text-sm font-medium text-purple-200">
                  Tasks Created
                </p>
              </div>
              <h3 className="text-2xl font-bold mt-2">{totalTasks}</h3>
              <p className="text-sm text-purple-200 mt-1">
                Total tasks created
              </p>
            </div>
          </div>
        </Card>

        {/* Total Projects Card */}
        <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Icon icon="bi:kanban-fill" />
                <p className="text-sm font-medium text-blue-200">
                  Total Projects
                </p>
              </div>
              <h3 className="text-2xl font-bold mt-2">12</h3>
              <p className="text-sm text-blue-200 mt-1">
                Active projects this month
              </p>
            </div>
          </div>
        </Card>

        {/* Time Spent Card */}
        <Card className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <Icon icon={"mdi:clock"} />
                <p className="text-sm font-medium text-emerald-200">
                  Time Spent
                </p>
              </div>
              <h3 className="text-2xl font-bold mt-2">{totalTimeSpent}</h3>
              <p className="text-sm text-emerald-200 mt-1">
                This month's logged hours
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold">Ongoing Tasks</h3>
        <Button variant="ghost">View All</Button>
      </div>

      <div className="grid grid-cols-2 gap-6 p-2">
        {tasks.map((task) => (
          <Card key={task.id} className="p-4">
            <CardHeader>
              <div className="flex items-center gap-2">
              {task.tags.map((tag, index) => (
                  <Chip key={index} color="success" size="sm">
                    {tag}
                  </Chip>
                ))}
              </div>
            </CardHeader>
            <CardBody>
            <h2>{task.title}</h2>
              <p className="truncate text-tiny text-default-400">
                {task.description}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
