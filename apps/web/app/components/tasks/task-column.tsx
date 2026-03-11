import { TaskCard } from './task-card';

type Task = {
  id: string;
  title: string;
};

type Props = {
  title: string;
  tasks: Task[];
};

export function TaskColumn({ title, tasks }: Props) {
  return (
    <div className="border rounded p-4">
      <h3 className="font-semibold mb-3">{title}</h3>

      <div className="space-y-2">
        {tasks.map((t) => (
          <TaskCard key={t.id} title={t.title} />
        ))}
      </div>
    </div>
  );
}
