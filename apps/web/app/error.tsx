'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-red-500">
        Something went wrong
      </h2>

      <p className="text-sm text-gray-500">{error.message}</p>

      <button onClick={() => reset()} className="px-4 py-2 border rounded">
        Try again
      </button>
    </div>
  );
}
