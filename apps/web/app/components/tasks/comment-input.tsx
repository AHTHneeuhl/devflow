'use client';

import { useState } from 'react';

export function CommentInput() {
  const [text, setText] = useState('');

  return (
    <div className="mt-4 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 border rounded px-3 py-2"
      />

      <button className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
    </div>
  );
}
