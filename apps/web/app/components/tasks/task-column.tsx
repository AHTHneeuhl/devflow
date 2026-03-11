import { Droppable } from '@hello-pangea/dnd';
import { TaskCard } from './task-card';

type Task = {
  id: string;
  title: string;
};

type Props = {
  title: string;
  tasks: Task[];
  droppableId: string;
};

export function TaskColumn({ droppableId, title, tasks }: Props) {
  return (
    <div className="border rounded p-4">
      <h3 className="font-semibold mb-3">{title}</h3>

      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-2"
          >
            {tasks.map((t, index) => (
              <TaskCard key={t.id} title={t.title} index={index} id={t.id} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
