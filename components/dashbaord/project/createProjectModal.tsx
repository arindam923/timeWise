import React from "react";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  DateInput,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  tags: z.array(z.string()).min(1, "Tags are required"),
  priority: z.string().optional(),
  deadline: z.string().optional(),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface CreateProjectModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  onProjectCreated: (project: ProjectFormData) => void;
}

const CreateProjectModal: React.FC<CreateProjectModalProps> = ({
  isOpen,
  onOpenChange,
  onProjectCreated,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProjectFormData>({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
      priority: "",
      deadline: undefined,
    },
  });

  const onSubmit = (data: ProjectFormData) => {
    onProjectCreated(data);
    reset();
    onOpenChange();
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader className="flex flex-col gap-1">
            Create New Project
          </ModalHeader>
          <ModalBody>
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label="Project Title"
                  placeholder="Enter project title"
                  isInvalid={!!errors.title}
                  errorMessage={errors.title?.message}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  label="Project Description"
                  placeholder="Enter project description"
                  isInvalid={!!errors.description}
                  errorMessage={errors.description?.message}
                />
              )}
            />
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  multiple
                  placeholder="Select or create tags"
                  onChange={(selected) =>
                    field.onChange(selected.map((option) => option.value))
                  }
                  isInvalid={!!errors.tags}
                  errorMessage={errors.tags?.message}
                >
                  {field.value.map((tag, index) => (
                    <SelectItem key={index} value={tag}>
                      {tag}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select priority"
                  isInvalid={!!errors.priority}
                  errorMessage={errors.priority?.message}
                >
                  <SelectItem key={"low"} value="low">
                    Low
                  </SelectItem>
                  <SelectItem key={"medium"} value="medium">
                    Medium
                  </SelectItem>
                  <SelectItem key={"high"} value="high">
                    High
                  </SelectItem>
                </Select>
              )}
            />
            <Controller
              name="deadline"
              control={control}
              render={({ field }) => (
                <DateInput
                  {...field}
                  label="Deadline"
                  isInvalid={!!errors.deadline}
                  errorMessage={errors.deadline?.message}
                />
              )}
            />
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Add Photos or Backgrounds
              </label>
              {/* <FileInput
                multiple
                accept="image/*"
                onChange={(files) => console.log(files)}
              /> */}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onOpenChange}>
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Create Project
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default CreateProjectModal;
