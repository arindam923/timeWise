'use client'

import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import { Icon } from "@iconify/react";
import ProjectCards from "@/components/dashbaord/project/project-cards";
import CreateProjectModal from "@/components/dashbaord/project/createProjectModal";

const Projects = () => {

  const {isOpen,onOpen,onOpenChange} = useDisclosure()

  const handleProjectCreated = (newProject:any) => {
    // Add new project to your project store or database here
    console.log("New project created:", newProject);
    onOpenChange();
  }

  return (
    <div className="flex-1 ml-72 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <Button onClick={onOpen} className="flex items-center gap-2">
          <Icon icon={"ic:round-plus"} />
          Create Project
        </Button>
      </div>

      <CreateProjectModal
        isOpen={isOpen}
        onOpenChange={onOpenChange} 
        onProjectCreated={handleProjectCreated}
      
      />

      <ProjectCards />
    </div>
  );
};

export default Projects;
