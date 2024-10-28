import { Button } from "@nextui-org/react";
import React from "react";
import { Icon } from "@iconify/react";
import ProjectCards from "@/components/dashbaord/project/project-cards";

const Projects = () => {
  return (
    <div className="flex-1 ml-72 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button className="flex items-center gap-2">
          <Icon icon={"ic:round-plus"} />
          Create Project
        </Button>
      </div>

      <ProjectCards />
    </div>
  );
};

export default Projects;
