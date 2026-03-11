'use client';

type Props = {
  onClick: () => void;
};

export function NewProjectButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
    >
      New Project
    </button>
  );
}
