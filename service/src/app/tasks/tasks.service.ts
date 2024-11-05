import { Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);

  allTasks = this.tasks.asReadonly();

  addTask(task: { title: string; description: string }) {
    const newTask: Task = {
      ...task,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.tasks.update((prev) => [...prev, newTask]);
  }

  updateTaskStatus(id: string, newStatus: TaskStatus) {
    // this.tasks.update((oldTasks) =>
    //   oldTasks.map((task) => {
    //     if (task.id == id) {
    //       return {
    //         ...task,
    //         status: newStatus,
    //       };
    //     }

    //     return task;
    //   })
    // );

    this.tasks.update((oldTasks) =>
      oldTasks.map((task) =>
        task.id == id ? { ...task, status: newStatus } : task
      )
    );
  }
}
