'use client';

import { attachmentService } from '@/services/attachment-service';

export function AttachmentUpload({ taskId }: { taskId: string }) {
  const MAX_SIZE = 2 * 1024 * 1024; // 2 MB

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_SIZE) {
      alert('File too large (max 10MB)');
      return;
    }

    await attachmentService.upload(file, taskId);
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}
