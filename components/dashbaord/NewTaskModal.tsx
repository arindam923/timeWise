'use client'

import React, { useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useTaskStore } from '@/store/taskStore';

interface NewTaskModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

const predefinedTags = [
  "UI", "UX", "Frontend", "Backend", "Testing", "Design", "Development", "Bug Fix", "Feature"
];

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, onOpenChange }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const addTask = useTaskStore((state) => state.addTask);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      duration: 0, // TODO: Implement duration calculation
      tags: selectedTags,
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setSelectedTags([]);
    onOpenChange();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader className="flex flex-col gap-1">Create New Task</ModalHeader>
          <ModalBody>
            <Input
              label="Task Name"
              placeholder="Enter task name"
              variant="bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Textarea
              label="Description"
              placeholder="Enter task description"
              variant="bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Select
              label="Tags"
              placeholder="Select tags"
              selectionMode="multiple"
              selectedKeys={selectedTags}
              onSelectionChange={(keys) => setSelectedTags(Array.from(keys) as string[])}
            >
              {predefinedTags.map((tag) => (
                <SelectItem key={tag} value={tag}>
                  {tag}
                </SelectItem>
              ))}
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onOpenChange}>
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Create Task
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default NewTaskModal;