'use client';

import { useProjectTasks } from '@/hooks/use-project-tasks';
import { Task } from '@/types/task';
import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import { TaskColumn } from './task-column';

export function TasksBoard({ projectId }: { projectId: string }) {
  const { data: tasks, isLoading, error } = useProjectTasks(projectId);

  if (isLoading) {
    return <div className="p-6">Loading tasks...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Failed to load tasks</div>;
  }

  const todo = tasks?.filter((t: Task) => t.status === 'todo') ?? [];
  const inProgress =
    tasks?.filter((t: Task) => t.status === 'in_progress') ?? [];
  const done = tasks?.filter((t: Task) => t.status === 'done') ?? [];

  function onDragEnd(result: DropResult) {
    const { source, destination } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId) return;

    console.log('Move task', {
      taskId: result.draggableId,
      from: source.droppableId,
      to: destination.droppableId,
    });
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-3 gap-4">
        <TaskColumn title="Todo" tasks={todo} droppableId="todo" />
        <TaskColumn
          title="In Progress"
          tasks={inProgress}
          droppableId="in_progress"
        />
        <TaskColumn title="Done" tasks={done} droppableId="done" />
      </div>
    </DragDropContext>
  );
}
