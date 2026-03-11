import { Draggable } from '@hello-pangea/dnd';

type Props = {
  id: string;
  title: string;
  index: number;
};

export function TaskCard({ id, title, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="border rounded p-3 bg-white shadow-sm"
        >
          <p className="text-sm font-medium">{title}</p>
        </div>
      )}
    </Draggable>
  );
}
