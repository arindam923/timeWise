

import {create} from 'zustand'



interface Task {
    id:number;
    title:string;
    description:string;
    duration:number;
    tags:string[];
}

interface TaskStore {
    tasks:Task[];
    addTask: (task:Task) => void;
    
    removeTask: (taskId:number) => void;
}


export const useTaskStore = create<TaskStore>((set) => ({
    tasks: [
        {
            id: 1,
            duration:7200,
            title: "UI kit Development",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ex, cum ad et fuga aut tempora consequatur animi delectus quibusdam!",
            tags: ["UI", "DESIGN", "DEVELOPMENT"],
          },
    ],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (taskId) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== taskId) })),
  }));