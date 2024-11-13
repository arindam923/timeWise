"use client";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Progress,
} from "@nextui-org/react";

import { Icon } from "@iconify/react";
import Link from "next/link";

const ProjectCards = () => {
  const projects = [
    {
      id: 1,
      title: "Marketing Campaign",
      description: "Q4 marketing campaign planning and execution",
      team: [
        { name: "John Doe", image: "" },
        { name: "Jane Smith", image: "" },
        { name: "Mike Johnson", image: "" },
      ],
      progress: 75,
    },
    {
      id: 2,
      title: "Website Redesign",
      description: "Overhaul of company website with new brand guidelines",
      team: [
        { name: "Alice Brown", image: "" },
        { name: "Bob Wilson", image: "" },
      ],
      progress: 45,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card key={project.id} className="w-full py-8 p-4 max-w-xl ">
          <CardHeader className="flex  flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-xl truncate mr-2 font-semibold">
              <Link href={`/dashboard/projects/${project.id}`}>
                {project.title}
              </Link>
            </h2>

            <Button variant="ghost" isIconOnly>
              <Icon icon={"pajamas:project"} />
            </Button>
          </CardHeader>

          <CardBody>
            <p className="text-sm text-gray-500 mb-4">{project.description}</p>

            <div className="flex flex-col  gap-2 mb-4">
              <div className="flex -space-x-2">
                {project.team.map((member, index) => (
                  <Avatar
                    key={index}
                    src={member.image}
                    size="sm"
                    className="border-2 border-white"
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="sm"
                endContent={<Icon icon={"fluent:people-team-24-regular"} />}
                className="ml-2"
              >
                Manage Team
              </Button>
            </div>

            <Progress value={project.progress} size="sm" className="mb-4" />
          </CardBody>
          <CardFooter className="gap-2">
            <Chip color="primary" size="sm">
              UI
            </Chip>
            <Chip color="primary" size="sm">
              DESIGN
            </Chip>
          </CardFooter>
        </Card>
      ))}

      <Card className="w-full border-2 border-dashed flex items-center justify-center cursor-pointer grid place-items-center hover:bg-zinc-800">
        <CardBody className="flex flex-col items-center py-8">
          <Icon fontSize={30} icon="ic:round-plus" />
          <p className="text-sm text-gray-500">Add New Project</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCards;
